var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Patch, Body, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service.js";
import { LoginDto, RefreshTokenDto, ChangePasswordDto } from "./dto/index.js";
import { CurrentUser } from "../../common/decorators/index.js";
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async login(dto) {
        const tokens = await this.authService.login(dto);
        return { data: tokens, message: "Login successful" };
    }
    async refresh(dto) {
        const tokens = await this.authService.refreshTokens(dto.refreshToken);
        return { data: tokens, message: "Tokens refreshed" };
    }
    async getProfile(user) {
        const profile = await this.authService.getProfile(user.id);
        return { data: profile, message: "Profile retrieved" };
    }
    async logout(user, dto) {
        await this.authService.logout(user.id, dto.refreshToken);
        return { data: null, message: "Logged out successfully" };
    }
    async changePassword(user, dto) {
        await this.authService.changePassword(user.id, dto);
        return { data: null, message: "Password changed successfully" };
    }
};
__decorate([
    Post("login"),
    ApiOperation({ summary: "Authenticate user and receive JWT tokens" }),
    ApiResponse({ status: 200, description: "Login successful" }),
    ApiResponse({ status: 401, description: "Invalid credentials" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    Post("refresh"),
    ApiOperation({ summary: "Refresh access token using refresh token" }),
    ApiResponse({ status: 200, description: "Tokens refreshed" }),
    ApiResponse({ status: 401, description: "Invalid refresh token" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    Get("me"),
    UseGuards(AuthGuard("jwt")),
    ApiBearerAuth(),
    ApiOperation({ summary: "Get current authenticated user's profile" }),
    ApiResponse({ status: 200, description: "Profile retrieved" }),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    Post("logout"),
    UseGuards(AuthGuard("jwt")),
    ApiBearerAuth(),
    ApiOperation({ summary: "Logout and invalidate refresh token" }),
    ApiResponse({ status: 200, description: "Logged out" }),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    Patch("password"),
    UseGuards(AuthGuard("jwt")),
    ApiBearerAuth(),
    ApiOperation({ summary: "Change authenticated user password" }),
    ApiResponse({ status: 200, description: "Password changed" }),
    ApiResponse({ status: 400, description: "Current password incorrect" }),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    Controller("auth"),
    ApiTags("Auth"),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map