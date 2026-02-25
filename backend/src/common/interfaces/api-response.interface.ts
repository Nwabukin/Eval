/**
 * Standard paginated metadata returned with list endpoints.
 */
export interface PaginationMeta {
  readonly page: number;
  readonly limit: number;
  readonly total: number;
  readonly totalPages: number;
}

/**
 * Consistent API success response envelope.
 * Every endpoint returns this shape via the TransformInterceptor.
 */
export interface ApiSuccessResponse<T> {
  readonly success: true;
  readonly data: T;
  readonly message: string;
  readonly meta?: PaginationMeta;
}

/**
 * Consistent API error response envelope.
 * Returned by the HttpExceptionFilter.
 */
export interface ApiErrorResponse {
  readonly success: false;
  readonly error: {
    readonly code: string;
    readonly message: string;
    readonly details: unknown[];
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
