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
import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, ParseUUIDPipe, } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { EvaluationCyclesService } from "./evaluation-cycles.service.js";
import { CreateCycleDto, UpdateCycleDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole, CycleStatus } from "../../../generated/prisma/client.js";
let EvaluationCyclesController = class EvaluationCyclesController {
    cyclesService;
    constructor(cyclesService) {
        this.cyclesService = cyclesService;
    }
    async create(dto) {
        const cycle = await this.cyclesService.create(dto);
        return { data: cycle, message: "Evaluation cycle created" };
    }
    async findAll(status) {
        const cycles = await this.cyclesService.findAll(status);
        return { data: cycles, message: "Evaluation cycles retrieved" };
    }
    async findOne(id) {
        const cycle = await this.cyclesService.findOne(id);
        return { data: cycle, message: "Evaluation cycle retrieved" };
    }
    async update(id, dto) {
        const cycle = await this.cyclesService.update(id, dto);
        return { data: cycle, message: "Evaluation cycle updated" };
    }
    async close(id) {
        const cycle = await this.cyclesService.close(id);
        return { data: cycle, message: "Evaluation cycle closed" };
    }
};
__decorate([
    Post(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create evaluation cycle with optional calibration panel" }),
    ApiResponse({ status: 201, description: "Cycle created" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCycleDto]),
    __metadata("design:returntype", Promise)
], EvaluationCyclesController.prototype, "create", null);
__decorate([
    Get(),
    Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION, UserRole.EMPLOYEE),
    ApiOperation({ summary: "List evaluation cycles" }),
    ApiQuery({ name: "status", enum: CycleStatus, required: false }),
    __param(0, Query("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationCyclesController.prototype, "findAll", null);
__decorate([
    Get(":id"),
    Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION, UserRole.EMPLOYEE),
    ApiOperation({ summary: "Get cycle detail with calibration members" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationCyclesController.prototype, "findOne", null);
__decorate([
    Patch(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Update cycle and/or replace calibration panel" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCycleDto]),
    __metadata("design:returntype", Promise)
], EvaluationCyclesController.prototype, "update", null);
__decorate([
    Post(":id/close"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Close an evaluation cycle" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationCyclesController.prototype, "close", null);
EvaluationCyclesController = __decorate([
    Controller("evaluation-cycles"),
    ApiTags("Evaluation Cycles"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [EvaluationCyclesService])
], EvaluationCyclesController);
export { EvaluationCyclesController };
//# sourceMappingURL=evaluation-cycles.controller.js.map