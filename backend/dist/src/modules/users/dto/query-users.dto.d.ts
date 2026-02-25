import { UserRole } from "../../../../generated/prisma/client.js";
export declare class QueryUsersDto {
    readonly search?: string;
    readonly role?: UserRole;
    readonly departmentId?: string;
    readonly levelId?: string;
    readonly includeInactive?: boolean;
    readonly page?: number;
    readonly limit?: number;
}
