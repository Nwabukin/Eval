import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import type { ApiSuccessResponse } from "../interfaces/index.js";
export declare class TransformInterceptor<T> implements NestInterceptor<T, ApiSuccessResponse<T>> {
    intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<ApiSuccessResponse<T>>;
}
