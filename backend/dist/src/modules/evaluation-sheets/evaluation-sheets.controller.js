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
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { EvaluationSheetsService } from "./evaluation-sheets.service.js";
import { CreateSheetDto, UpdateSheetDto, QuerySheetsDto, BulkCreateSheetsDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
let EvaluationSheetsController = class EvaluationSheetsController {
    sheetsService;
    constructor(sheetsService) {
        this.sheetsService = sheetsService;
    }
    async create(dto) {
        const sheet = await this.sheetsService.create(dto);
        return { data: sheet, message: "Sheet created" };
    }
    async bulkCreate(dto) {
        const sheets = await this.sheetsService.bulkCreate(dto);
        return { data: sheets, message: `${sheets.length} sheets created` };
    }
    async findAll(query) {
        const sheets = await this.sheetsService.findAll(query);
        return { data: sheets, message: "Sheets retrieved" };
    }
    async findOne(id) {
        const sheet = await this.sheetsService.findOne(id);
        return { data: sheet, message: "Sheet retrieved" };
    }
    async update(id, dto) {
        const sheet = await this.sheetsService.update(id, dto);
        return { data: sheet, message: "Sheet updated" };
    }
    async remove(id) {
        await this.sheetsService.remove(id);
    }
};
__decorate([
    Post(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create an evaluation sheet scoped to cycle/dept/level" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSheetDto]),
    __metadata("design:returntype", Promise)
], EvaluationSheetsController.prototype, "create", null);
__decorate([
    Post("bulk"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create multiple sheets at once for a cycle" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BulkCreateSheetsDto]),
    __metadata("design:returntype", Promise)
], EvaluationSheetsController.prototype, "bulkCreate", null);
__decorate([
    Get(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "List sheets with optional cycle/dept/level filters" }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuerySheetsDto]),
    __metadata("design:returntype", Promise)
], EvaluationSheetsController.prototype, "findAll", null);
__decorate([
    Get(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Get sheet by ID with its questions" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationSheetsController.prototype, "findOne", null);
__decorate([
    Patch(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Update sheet properties" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateSheetDto]),
    __metadata("design:returntype", Promise)
], EvaluationSheetsController.prototype, "update", null);
__decorate([
    Delete(":id"),
    Roles(UserRole.ADMIN),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiOperation({ summary: "Delete a sheet and its questions (cascade)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationSheetsController.prototype, "remove", null);
EvaluationSheetsController = __decorate([
    Controller("evaluation-sheets"),
    ApiTags("Evaluation Sheets"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [EvaluationSheetsService])
], EvaluationSheetsController);
export { EvaluationSheetsController };
//# sourceMappingURL=evaluation-sheets.controller.js.map