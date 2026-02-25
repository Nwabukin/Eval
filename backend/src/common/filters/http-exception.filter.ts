import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import type { Response } from "express";
import type { ApiErrorResponse } from "../interfaces/index.js";

/** Prisma error codes that mean DB is unreachable or connection failed */
const PRISMA_DB_UNREACHABLE_CODES = ["P1001", "P1002", "P1017"];

/**
 * Global exception filter that transforms all HTTP exceptions
 * into the standard { success: false, error: { code, message, details } } envelope.
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal server error";
    let code = "INTERNAL_ERROR";
    let details: unknown[] = [];

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === "string") {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === "object" && exceptionResponse !== null) {
        const resp = exceptionResponse as Record<string, unknown>;
        message = (resp["message"] as string) ?? exception.message;
        code = (resp["error"] as string) ?? this.statusToCode(status);

        // class-validator returns message as an array of validation errors
        if (Array.isArray(resp["message"])) {
          details = resp["message"] as unknown[];
          message = "Validation failed";
          code = "VALIDATION_ERROR";
        }
      }
    } else {
      const prismaCode = this.getPrismaErrorCode(exception);
      if (prismaCode && PRISMA_DB_UNREACHABLE_CODES.includes(prismaCode)) {
        status = HttpStatus.SERVICE_UNAVAILABLE;
        message = "Database temporarily unavailable. Please try again shortly.";
        code = "SERVICE_UNAVAILABLE";
      }
      this.logger.error("Unhandled exception", exception);
    }

    const body: ApiErrorResponse = {
      success: false,
      error: { code, message, details },
    };

    response.status(status).json(body);
  }

  private statusToCode(status: number): string {
    const map: Record<number, string> = {
      400: "BAD_REQUEST",
      401: "UNAUTHORIZED",
      403: "FORBIDDEN",
      404: "NOT_FOUND",
      409: "CONFLICT",
      429: "TOO_MANY_REQUESTS",
    };
    return map[status] ?? "INTERNAL_ERROR";
  }

  private getPrismaErrorCode(exception: unknown): string | null {
    if (exception && typeof exception === "object" && "code" in exception) {
      const code = (exception as { code?: string }).code;
      return typeof code === "string" ? code : null;
    }
    return null;
  }
}
