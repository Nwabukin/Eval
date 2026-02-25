import { UserRole } from "../../../generated/prisma/client.js";

/**
 * Shape of the user object attached to the request after JWT validation.
 */
export interface AuthenticatedUser {
  readonly id: string;
  readonly email: string;
  readonly role: UserRole;
  readonly departmentId: string | null;
}
