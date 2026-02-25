import type { PaginationMeta } from "../interfaces/index.js";
export interface PaginationQuery {
    readonly page?: number;
    readonly limit?: number;
}
export declare function normalizePagination(query: PaginationQuery): {
    page: number;
    limit: number;
    skip: number;
};
export declare function buildPaginationMeta(total: number, page: number, limit: number): PaginationMeta;
