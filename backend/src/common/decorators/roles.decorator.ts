import { SetMetadata } from "@nestjs/common";
import { UserRole } from "../../../generated/prisma/client.js";

export const ROLES_KEY = "roles";

/**
 * Declares which roles are allowed to access an endpoint.
 * Used with RolesGuard.
 *
 * @example @Roles(UserRole.ADMIN, UserRole.LINE_MANAGER)
 */
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
