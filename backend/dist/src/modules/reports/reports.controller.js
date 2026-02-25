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
import { Controller, Get, Query, Res, UseGuards, ParseUUIDPipe, } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery, ApiResponse, } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { ReportsService } from "./reports.service.js";
import { CurrentUser, Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
let ReportsController = class ReportsController {
    reportsService;
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async getDashboard(user, cycleId) {
        const stats = await this.reportsService.getDashboard(cycleId, user);
        return { data: stats, message: "Dashboard retrieved" };
    }
    async exportCsv(user, cycleId, res) {
        const csv = await this.reportsService.generateCsvReport(cycleId, user);
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader("Content-Disposition", `attachment; filename=evaluation-report-${cycleId}.csv`);
        res.send(csv);
    }
    async exportExcel(user, cycleId, res) {
        const buffer = await this.reportsService.generateExcelReport(cycleId, user);
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename=evaluation-report-${cycleId}.xlsx`);
        res.send(buffer);
    }
    async exportPdf(user, cycleId, res) {
        const buffer = await this.reportsService.generatePdfReport(cycleId, user);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename=evaluation-report-${cycleId}.pdf`);
        res.send(buffer);
    }
};
__decorate([
    Get("dashboard"),
    Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION),
    ApiOperation({ summary: "Dashboard summary stats — admin sees all, managers/calibrators see scoped data" }),
    ApiQuery({ name: "cycleId", type: String, required: false, description: "Filter by evaluation cycle" }),
    ApiResponse({ status: 200, description: "Dashboard data with KPIs, averages, and completion rate" }),
    __param(0, CurrentUser()),
    __param(1, Query("cycleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getDashboard", null);
__decorate([
    Get("export/csv"),
    Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION),
    ApiOperation({ summary: "Export evaluations as CSV — scoped to user's access" }),
    ApiQuery({ name: "cycleId", type: String, required: true }),
    ApiResponse({ status: 200, description: "CSV file download" }),
    ApiResponse({ status: 404, description: "Cycle not found" }),
    __param(0, CurrentUser()),
    __param(1, Query("cycleId", ParseUUIDPipe)),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "exportCsv", null);
__decorate([
    Get("export/excel"),
    Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION),
    ApiOperation({ summary: "Export evaluations as Excel — scoped to user's access" }),
    ApiQuery({ name: "cycleId", type: String, required: true }),
    ApiResponse({ status: 200, description: "Excel file download with Summary, Evaluations, and Department sheets" }),
    ApiResponse({ status: 404, description: "Cycle not found" }),
    __param(0, CurrentUser()),
    __param(1, Query("cycleId", ParseUUIDPipe)),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "exportExcel", null);
__decorate([
    Get("export/pdf"),
    Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION),
    ApiOperation({ summary: "Export evaluations as branded PDF — scoped to user's access" }),
    ApiQuery({ name: "cycleId", type: String, required: true }),
    ApiResponse({ status: 200, description: "PDF file download with KPIs, charts, and evaluation tables" }),
    ApiResponse({ status: 404, description: "Cycle not found" }),
    __param(0, CurrentUser()),
    __param(1, Query("cycleId", ParseUUIDPipe)),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "exportPdf", null);
ReportsController = __decorate([
    Controller("reports"),
    ApiTags("Reports"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [ReportsService])
], ReportsController);
export { ReportsController };
//# sourceMappingURL=reports.controller.js.map