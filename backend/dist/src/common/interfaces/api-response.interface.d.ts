export interface PaginationMeta {
    readonly page: number;
    readonly limit: number;
    readonly total: number;
    readonly totalPages: number;
}
export interface ApiSuccessResponse<T> {
    readonly success: true;
    readonly data: T;
    readonly message: string;
    readonly meta?: PaginationMeta;
}
export interface ApiErrorResponse {
    readonly success: false;
    readonly error: {
        readonly code: string;
        readonly message: string;
        readonly details: unknown[];
    };
}
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
