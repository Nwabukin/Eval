import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  Logger,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import bcrypt from "bcrypt";
import type ms from "ms";
import { PrismaService } from "../../database/prisma.service.js";
import type { LoginDto, ChangePasswordDto } from "./dto/index.js";

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

interface JwtPayload {
  sub: string;
  email: string;
  role: string;
  departmentId: string | null;
  exp?: number;
}

/** Fields safe to return from the profile endpoint — excludes password */
const PROFILE_SELECT = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  role: true,
  isActive: true,
  departmentId: true,
  levelId: true,
  lineManagerId: true,
  createdAt: true,
  updatedAt: true,
  department: { select: { id: true, name: true } },
  level: { select: { id: true, name: true } },
  lineManager: { select: { id: true, firstName: true, lastName: true, email: true } },
} as const;

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly BCRYPT_ROUNDS = 12;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Validates credentials and returns access + refresh token pair.
   *
   * @throws UnauthorizedException if email or password is invalid
   */
  async login(dto: LoginDto): Promise<TokenPair> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const passwordValid = await bcrypt.compare(dto.password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.generateTokenPair({
      sub: user.id,
      email: user.email,
      role: user.role,
      departmentId: user.departmentId,
    });
  }

  /**
   * Issues a new access + refresh token pair from a valid refresh token.
   * Rejects tokens that have been revoked via logout.
   *
   * @throws UnauthorizedException if the refresh token is invalid, expired, or revoked
   */
  async refreshTokens(refreshToken: string): Promise<TokenPair> {
    try {
      const revoked = await this.prisma.revokedToken.findUnique({
        where: { token: refreshToken },
      });
      if (revoked) {
        throw new UnauthorizedException("Token has been revoked");
      }

      const payload = this.jwtService.verify<JwtPayload>(refreshToken, {
        secret: this.configService.getOrThrow<string>("JWT_REFRESH_SECRET"),
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || !user.isActive) {
        throw new UnauthorizedException("User no longer active");
      }

      return this.generateTokenPair({
        sub: user.id,
        email: user.email,
        role: user.role,
        departmentId: user.departmentId,
      });
    } catch (err) {
      if (err instanceof UnauthorizedException) throw err;
      throw new UnauthorizedException("Invalid or expired refresh token");
    }
  }

  /**
   * Returns the authenticated user's full profile (excluding password).
   */
  async getProfile(userId: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: PROFILE_SELECT,
    });
  }

  /**
   * Revokes a refresh token so it can no longer be used.
   * Expired tokens are cleaned up periodically.
   */
  async logout(userId: string, refreshToken: string): Promise<void> {
    try {
      const payload = this.jwtService.verify<JwtPayload>(refreshToken, {
        secret: this.configService.getOrThrow<string>("JWT_REFRESH_SECRET"),
      });

      await this.prisma.revokedToken.create({
        data: {
          token: refreshToken,
          userId,
          expiresAt: new Date((payload.exp ?? 0) * 1000),
        },
      });
    } catch {
      // Token is already expired or invalid — no need to revoke
      this.logger.debug("Logout called with invalid/expired token — ignoring");
    }

    this.cleanupExpiredTokens().catch((err: unknown) =>
      this.logger.error("Failed to cleanup expired tokens", err),
    );
  }

  /**
   * Changes the authenticated user's password.
   *
   * @throws BadRequestException if the current password is incorrect
   */
  async changePassword(
    userId: string,
    dto: ChangePasswordDto,
  ): Promise<void> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });

    const currentValid = await bcrypt.compare(dto.currentPassword, user.password);
    if (!currentValid) {
      throw new BadRequestException("Current password is incorrect");
    }

    const hashedNew = await bcrypt.hash(dto.newPassword, this.BCRYPT_ROUNDS);
    await this.prisma.user.update({
      where: { id: userId },
      data: { password: hashedNew },
    });
  }

  /**
   * Hashes a plain-text password. Used by the Users module when creating accounts.
   */
  async hashPassword(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, this.BCRYPT_ROUNDS);
  }

  private generateTokenPair(payload: JwtPayload): TokenPair {
    const data: Record<string, unknown> = { ...payload };

    const accessToken = this.jwtService.sign(data, {
      secret: this.configService.getOrThrow<string>("JWT_SECRET"),
      expiresIn: this.configService.getOrThrow<string>("JWT_EXPIRES_IN") as ms.StringValue,
    });

    const refreshToken = this.jwtService.sign(data, {
      secret: this.configService.getOrThrow<string>("JWT_REFRESH_SECRET"),
      expiresIn: this.configService.getOrThrow<string>("JWT_REFRESH_EXPIRES_IN") as ms.StringValue,
    });

    return { accessToken, refreshToken };
  }

  /** Removes revoked tokens that have already expired — housekeeping. */
  private async cleanupExpiredTokens(): Promise<void> {
    const { count } = await this.prisma.revokedToken.deleteMany({
      where: { expiresAt: { lt: new Date() } },
    });
    if (count > 0) {
      this.logger.log(`Cleaned up ${count} expired revoked tokens`);
    }
  }
}
