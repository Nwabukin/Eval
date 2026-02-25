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
import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, HttpCode, HttpStatus, ParseUUIDPipe, } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { LevelsService } from "./levels.service.js";
import { CreateLevelDto, UpdateLevelDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
let LevelsController = class LevelsController {
    levelsService;
    constructor(levelsService) {
        this.levelsService = levelsService;
    }
    async create(dto) {
        const level = await this.levelsService.create(dto);
        return { data: level, message: "Level created" };
    }
    async findAll() {
        const levels = await this.levelsService.findAll();
        return { data: levels, message: "Levels retrieved" };
    }
    async findOne(id) {
        const level = await this.levelsService.findOne(id);
        return { data: level, message: "Level retrieved" };
    }
    async update(id, dto) {
        const level = await this.levelsService.update(id, dto);
        return { data: level, message: "Level updated" };
    }
    async remove(id) {
        await this.levelsService.remove(id);
    }
};
__decorate([
    Post(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create a level" }),
    ApiResponse({ status: 201, description: "Level created" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateLevelDto]),
    __metadata("design:returntype", Promise)
], LevelsController.prototype, "create", null);
__decorate([
    Get(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "List all levels" }),
    ApiResponse({ status: 200, description: "Levels list" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LevelsController.prototype, "findAll", null);
__decorate([
    Get(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Get level by ID" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LevelsController.prototype, "findOne", null);
__decorate([
    Patch(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Update a level" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateLevelDto]),
    __metadata("design:returntype", Promise)
], LevelsController.prototype, "update", null);
__decorate([
    Delete(":id"),
    Roles(UserRole.ADMIN),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiOperation({ summary: "Delete a level" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LevelsController.prototype, "remove", null);
LevelsController = __decorate([
    Controller("levels"),
    ApiTags("Levels"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [LevelsService])
], LevelsController);
export { LevelsController };
//# sourceMappingURL=levels.controller.js.map