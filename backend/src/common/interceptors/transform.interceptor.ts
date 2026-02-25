import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, map } from "rxjs";
import type { ApiSuccessResponse } from "../interfaces/index.js";

/**
 * Wraps all successful responses in the standard envelope:
 * { success: true, data, message, meta? }
 *
 * Controllers can return raw data — this interceptor wraps it automatically.
 * If a controller returns an object with a `meta` property, it is extracted
 * and placed at the envelope level for paginated responses.
 */
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiSuccessResponse<T>>
{
  intercept(
    _context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiSuccessResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        // Support controllers returning { data, message, meta } directly
        if (
          data !== null &&
          typeof data === "object" &&
          "data" in data &&
          "message" in data
        ) {
          const shaped = data as unknown as {
            data: T;
            message: string;
            meta?: unknown;
          };
          return {
            success: true as const,
            data: shaped.data,
            message: shaped.message,
            meta: shaped.meta,
          } as ApiSuccessResponse<T>;
        }

        return {
          success: true as const,
          data,
          message: "Success",
        };
      }),
    );
  }
}
