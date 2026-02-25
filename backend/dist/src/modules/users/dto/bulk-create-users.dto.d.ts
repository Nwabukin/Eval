import { UserRole } from "../../../../generated/prisma/client.js";
declare class BulkUserItem {
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly role: UserRole;
    readonly departmentId?: string;
    readonly levelId?: string;
    readonly lineManagerId?: string;
}
export declare class BulkCreateUsersDto {
    readonly users: BulkUserItem[];
}
export {};
