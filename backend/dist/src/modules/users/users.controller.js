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
import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards, HttpCode, HttpStatus, ParseUUIDPipe, } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { UsersService } from "./users.service.js";
import { CreateUserDto, UpdateUserDto, AssignUserDto, QueryUsersDto, BulkCreateUsersDto, } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(dto) {
        const user = await this.usersService.create(dto);
        return { data: user, message: "User created successfully" };
    }
    async bulkCreate(dto) {
        const result = await this.usersService.bulkCreate(dto);
        return {
            data: result,
            message: `${result.created.length} created, ${result.skipped.length} skipped`,
        };
    }
    async findAll(query) {
        const result = await this.usersService.findAll(query);
        return { data: result.data, message: "Users retrieved", meta: result.meta };
    }
    async findOne(id) {
        const user = await this.usersService.findOne(id);
        return { data: user, message: "User retrieved" };
    }
    async update(id, dto) {
        const user = await this.usersService.update(id, dto);
        return { data: user, message: "User updated successfully" };
    }
    async remove(id) {
        await this.usersService.remove(id);
    }
    async assign(id, dto) {
        const user = await this.usersService.assign(id, dto);
        return { data: user, message: "User assignment updated" };
    }
};
__decorate([
    Post(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create a new user (admin only)" }),
    ApiResponse({ status: 201, description: "User created" }),
    ApiResponse({ status: 409, description: "Email already in use" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    Post("bulk"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Import multiple users at once — skips existing emails" }),
    ApiResponse({ status: 201, description: "Bulk import result" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BulkCreateUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "bulkCreate", null);
__decorate([
    Get(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "List users with filters and pagination" }),
    ApiResponse({ status: 200, description: "Users list" }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QueryUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    Get(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Get user by ID" }),
    ApiResponse({ status: 200, description: "User found" }),
    ApiResponse({ status: 404, description: "User not found" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    Patch(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Update user details" }),
    ApiResponse({ status: 200, description: "User updated" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    Delete(":id"),
    Roles(UserRole.ADMIN),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiOperation({ summary: "Soft-delete a user" }),
    ApiResponse({ status: 204, description: "User deactivated" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
__decorate([
    Post(":id/assign"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Assign user to department, level, or line manager" }),
    ApiResponse({ status: 200, description: "User assigned" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AssignUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "assign", null);
UsersController = __decorate([
    Controller("users"),
    ApiTags("Users"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [UsersService])
], UsersController);
export { UsersController };
//# sourceMappingURL=users.controller.js.map