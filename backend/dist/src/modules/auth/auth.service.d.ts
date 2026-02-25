import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service.js";
import type { LoginDto, ChangePasswordDto } from "./dto/index.js";
export interface TokenPair {
    accessToken: string;
    refreshToken: string;
}
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly configService;
    private readonly logger;
    private readonly BCRYPT_ROUNDS;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    login(dto: LoginDto): Promise<TokenPair>;
    refreshTokens(refreshToken: string): Promise<TokenPair>;
    getProfile(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../../generated/prisma/enums.js").UserRole;
        isActive: boolean;
        departmentId: string | null;
        levelId: string | null;
        lineManagerId: string | null;
        level: {
            id: string;
            name: string;
        } | null;
        department: {
            id: string;
            name: string;
        } | null;
        lineManager: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        } | null;
    }>;
    logout(userId: string, refreshToken: string): Promise<void>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<void>;
    hashPassword(plainText: string): Promise<string>;
    private generateTokenPair;
    private cleanupExpiredTokens;
}
