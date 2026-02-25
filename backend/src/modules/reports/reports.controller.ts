import {
  Controller,
  Get,
  Query,
  Res,
  UseGuards,
  ParseUUIDPipe,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
  ApiResponse,
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import type { Response } from "express";
import { ReportsService } from "./reports.service.js";
import { CurrentUser, Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
import { UserRole } from "../../../generated/prisma/client.js";

@Controller("reports")
@ApiTags("Reports")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get("dashboard")
  @Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION)
  @ApiOperation({ summary: "Dashboard summary stats — admin sees all, managers/calibrators see scoped data" })
  @ApiQuery({ name: "cycleId", type: String, required: false, description: "Filter by evaluation cycle" })
  @ApiResponse({ status: 200, description: "Dashboard data with KPIs, averages, and completion rate" })
  async getDashboard(
    @CurrentUser() user: AuthenticatedUser,
    @Query("cycleId") cycleId?: string,
  ) {
    const stats = await this.reportsService.getDashboard(cycleId, user);
    return { data: stats, message: "Dashboard retrieved" };
  }

  @Get("export/csv")
  @Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION)
  @ApiOperation({ summary: "Export evaluations as CSV — scoped to user's access" })
  @ApiQuery({ name: "cycleId", type: String, required: true })
  @ApiResponse({ status: 200, description: "CSV file download" })
  @ApiResponse({ status: 404, description: "Cycle not found" })
  async exportCsv(
    @CurrentUser() user: AuthenticatedUser,
    @Query("cycleId", ParseUUIDPipe) cycleId: string,
    @Res() res: Response,
  ) {
    const csv = await this.reportsService.generateCsvReport(cycleId, user);
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=evaluation-report-${cycleId}.csv`,
    );
    res.send(csv);
  }

  @Get("export/excel")
  @Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION)
  @ApiOperation({ summary: "Export evaluations as Excel — scoped to user's access" })
  @ApiQuery({ name: "cycleId", type: String, required: true })
  @ApiResponse({ status: 200, description: "Excel file download with Summary, Evaluations, and Department sheets" })
  @ApiResponse({ status: 404, description: "Cycle not found" })
  async exportExcel(
    @CurrentUser() user: AuthenticatedUser,
    @Query("cycleId", ParseUUIDPipe) cycleId: string,
    @Res() res: Response,
  ) {
    const buffer = await this.reportsService.generateExcelReport(cycleId, user);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=evaluation-report-${cycleId}.xlsx`,
    );
    res.send(buffer);
  }

  @Get("export/pdf")
  @Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION)
  @ApiOperation({ summary: "Export evaluations as branded PDF — scoped to user's access" })
  @ApiQuery({ name: "cycleId", type: String, required: true })
  @ApiResponse({ status: 200, description: "PDF file download with KPIs, charts, and evaluation tables" })
  @ApiResponse({ status: 404, description: "Cycle not found" })
  async exportPdf(
    @CurrentUser() user: AuthenticatedUser,
    @Query("cycleId", ParseUUIDPipe) cycleId: string,
    @Res() res: Response,
  ) {
    const buffer = await this.reportsService.generatePdfReport(cycleId, user);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=evaluation-report-${cycleId}.pdf`,
    );
    res.send(buffer);
  }
}
