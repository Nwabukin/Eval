var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpExceptionFilter_1;
import { Catch, HttpException, HttpStatus, Logger, } from "@nestjs/common";
const PRISMA_DB_UNREACHABLE_CODES = ["P1001", "P1002", "P1017"];
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    logger = new Logger(HttpExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = "Internal server error";
        let code = "INTERNAL_ERROR";
        let details = [];
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse === "string") {
                message = exceptionResponse;
            }
            else if (typeof exceptionResponse === "object" && exceptionResponse !== null) {
                const resp = exceptionResponse;
                message = resp["message"] ?? exception.message;
                code = resp["error"] ?? this.statusToCode(status);
                if (Array.isArray(resp["message"])) {
                    details = resp["message"];
                    message = "Validation failed";
                    code = "VALIDATION_ERROR";
                }
            }
        }
        else {
            const prismaCode = this.getPrismaErrorCode(exception);
            if (prismaCode && PRISMA_DB_UNREACHABLE_CODES.includes(prismaCode)) {
                status = HttpStatus.SERVICE_UNAVAILABLE;
                message = "Database temporarily unavailable. Please try again shortly.";
                code = "SERVICE_UNAVAILABLE";
            }
            this.logger.error("Unhandled exception", exception);
        }
        const body = {
            success: false,
            error: { code, message, details },
        };
        response.status(status).json(body);
    }
    statusToCode(status) {
        const map = {
            400: "BAD_REQUEST",
            401: "UNAUTHORIZED",
            403: "FORBIDDEN",
            404: "NOT_FOUND",
            409: "CONFLICT",
            429: "TOO_MANY_REQUESTS",
        };
        return map[status] ?? "INTERNAL_ERROR";
    }
    getPrismaErrorCode(exception) {
        if (exception && typeof exception === "object" && "code" in exception) {
            const code = exception.code;
            return typeof code === "string" ? code : null;
        }
        return null;
    }
};
HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    Catch()
], HttpExceptionFilter);
export { HttpExceptionFilter };
//# sourceMappingURL=http-exception.filter.js.map