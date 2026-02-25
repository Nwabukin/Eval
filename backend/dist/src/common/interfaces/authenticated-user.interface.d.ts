import { UserRole } from "../../../generated/prisma/client.js";
export interface AuthenticatedUser {
    readonly id: string;
    readonly email: string;
    readonly role: UserRole;
    readonly departmentId: string | null;
}
