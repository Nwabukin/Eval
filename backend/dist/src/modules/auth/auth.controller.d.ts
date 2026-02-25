import { AuthService } from "./auth.service.js";
import { LoginDto, RefreshTokenDto, ChangePasswordDto } from "./dto/index.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        data: import("./auth.service.js").TokenPair;
        message: string;
    }>;
    refresh(dto: RefreshTokenDto): Promise<{
        data: import("./auth.service.js").TokenPair;
        message: string;
    }>;
    getProfile(user: AuthenticatedUser): Promise<{
        data: {
            level: {
                id: string;
                name: string;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            department: {
                id: string;
                name: string;
            } | null;
            departmentId: string | null;
            levelId: string | null;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../../generated/prisma/enums.js").UserRole;
            isActive: boolean;
            lineManagerId: string | null;
            lineManager: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            } | null;
        };
        message: string;
    }>;
    logout(user: AuthenticatedUser, dto: RefreshTokenDto): Promise<{
        data: null;
        message: string;
    }>;
    changePassword(user: AuthenticatedUser, dto: ChangePasswordDto): Promise<{
        data: null;
        message: string;
    }>;
}
