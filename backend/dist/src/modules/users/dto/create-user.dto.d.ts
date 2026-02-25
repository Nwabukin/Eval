import { UserRole } from "../../../../generated/prisma/client.js";
export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly role: UserRole;
    readonly departmentId?: string;
    readonly levelId?: string;
    readonly lineManagerId?: string;
}
