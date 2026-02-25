import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "../../../generated/prisma/client.js";
import { ROLES_KEY } from "../decorators/roles.decorator.js";
import type { AuthenticatedUser } from "../interfaces/index.js";

/**
 * Enforces role-based access control.
 * Reads the @Roles() metadata and checks the authenticated user's role.
 * If no roles are specified on the handler, access is allowed (auth-only check).
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<
      UserRole[] | undefined
    >(ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<{ user: AuthenticatedUser }>();
    const user = request.user;

    return requiredRoles.includes(user.role);
  }
}
