var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
import { Injectable, UnauthorizedException, BadRequestException, Logger, } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import bcrypt from "bcrypt";
import { PrismaService } from "../../database/prisma.service.js";
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
};
let AuthService = AuthService_1 = class AuthService {
    prisma;
    jwtService;
    configService;
    logger = new Logger(AuthService_1.name);
    BCRYPT_ROUNDS = 12;
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async login(dto) {
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
    async refreshTokens(refreshToken) {
        try {
            const revoked = await this.prisma.revokedToken.findUnique({
                where: { token: refreshToken },
            });
            if (revoked) {
                throw new UnauthorizedException("Token has been revoked");
            }
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.getOrThrow("JWT_REFRESH_SECRET"),
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
        }
        catch (err) {
            if (err instanceof UnauthorizedException)
                throw err;
            throw new UnauthorizedException("Invalid or expired refresh token");
        }
    }
    async getProfile(userId) {
        return this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: PROFILE_SELECT,
        });
    }
    async logout(userId, refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.getOrThrow("JWT_REFRESH_SECRET"),
            });
            await this.prisma.revokedToken.create({
                data: {
                    token: refreshToken,
                    userId,
                    expiresAt: new Date((payload.exp ?? 0) * 1000),
                },
            });
        }
        catch {
            this.logger.debug("Logout called with invalid/expired token — ignoring");
        }
        this.cleanupExpiredTokens().catch((err) => this.logger.error("Failed to cleanup expired tokens", err));
    }
    async changePassword(userId, dto) {
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
    async hashPassword(plainText) {
        return bcrypt.hash(plainText, this.BCRYPT_ROUNDS);
    }
    generateTokenPair(payload) {
        const data = { ...payload };
        const accessToken = this.jwtService.sign(data, {
            secret: this.configService.getOrThrow("JWT_SECRET"),
            expiresIn: this.configService.getOrThrow("JWT_EXPIRES_IN"),
        });
        const refreshToken = this.jwtService.sign(data, {
            secret: this.configService.getOrThrow("JWT_REFRESH_SECRET"),
            expiresIn: this.configService.getOrThrow("JWT_REFRESH_EXPIRES_IN"),
        });
        return { accessToken, refreshToken };
    }
    async cleanupExpiredTokens() {
        const { count } = await this.prisma.revokedToken.deleteMany({
            where: { expiresAt: { lt: new Date() } },
        });
        if (count > 0) {
            this.logger.log(`Cleaned up ${count} expired revoked tokens`);
        }
    }
};
AuthService = AuthService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService,
        ConfigService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map