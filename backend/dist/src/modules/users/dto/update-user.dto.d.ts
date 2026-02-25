import { UserRole } from "../../../../generated/prisma/client.js";
export declare class UpdateUserDto {
    readonly email?: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly role?: UserRole;
    readonly password?: string;
}
