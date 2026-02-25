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
import { DepartmentsService } from "./departments.service.js";
import { CreateDepartmentDto, UpdateDepartmentDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
let DepartmentsController = class DepartmentsController {
    departmentsService;
    constructor(departmentsService) {
        this.departmentsService = departmentsService;
    }
    async create(dto) {
        const dept = await this.departmentsService.create(dto);
        return { data: dept, message: "Department created" };
    }
    async findAll() {
        const depts = await this.departmentsService.findAll();
        return { data: depts, message: "Departments retrieved" };
    }
    async findOne(id) {
        const dept = await this.departmentsService.findOne(id);
        return { data: dept, message: "Department retrieved" };
    }
    async update(id, dto) {
        const dept = await this.departmentsService.update(id, dto);
        return { data: dept, message: "Department updated" };
    }
    async remove(id) {
        await this.departmentsService.remove(id);
    }
};
__decorate([
    Post(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create a department" }),
    ApiResponse({ status: 201, description: "Department created" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "create", null);
__decorate([
    Get(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "List all departments" }),
    ApiResponse({ status: 200, description: "Departments list" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "findAll", null);
__decorate([
    Get(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Get department by ID" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "findOne", null);
__decorate([
    Patch(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Update a department" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateDepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "update", null);
__decorate([
    Delete(":id"),
    Roles(UserRole.ADMIN),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiOperation({ summary: "Delete a department" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "remove", null);
DepartmentsController = __decorate([
    Controller("departments"),
    ApiTags("Departments"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [DepartmentsService])
], DepartmentsController);
export { DepartmentsController };
//# sourceMappingURL=departments.controller.js.map