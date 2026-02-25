import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { EvaluationsService } from "./evaluations.service.js";
import {
  SaveSelfEvaluationDto,
  SaveManagerReviewDto,
  SetCalibrationModeDto,
  SaveDirectCalibrationDto,
  SaveIndividualCalibrationDto,
  QueryEvaluationsDto,
} from "./dto/index.js";
import { CurrentUser, Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
import { UserRole } from "../../../generated/prisma/client.js";

@Controller("evaluations")
@ApiTags("Evaluations")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  // ─── Admin ───────────────────────────────────────────────

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "List all evaluations with filters and pagination (admin)" })
  async findAll(@Query() query: QueryEvaluationsDto) {
    const result = await this.evaluationsService.findAll(query);
    return { data: result.data, message: "Evaluations retrieved", meta: result.meta };
  }

  // ─── Employee ────────────────────────────────────────────

  @Get("my")
  @Roles(UserRole.EMPLOYEE)
  @ApiOperation({ summary: "Get or create my evaluation for the active cycle" })
  async getMyEvaluation(@CurrentUser() user: AuthenticatedUser) {
    const evaluation = await this.evaluationsService.getMyEvaluation(user);
    return { data: evaluation, message: "Evaluation retrieved" };
  }

  @Patch(":id/self")
  @Roles(UserRole.EMPLOYEE)
  @ApiOperation({ summary: "Save self scores and remarks (draft)" })
  async saveSelf(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: SaveSelfEvaluationDto,
  ) {
    const evaluation = await this.evaluationsService.saveSelfEvaluation(id, user.id, dto);
    return { data: evaluation, message: "Self-evaluation saved" };
  }

  @Post(":id/submit-self")
  @Roles(UserRole.EMPLOYEE)
  @ApiOperation({ summary: "Submit self-evaluation (locks, moves to line manager)" })
  async submitSelf(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const evaluation = await this.evaluationsService.submitSelfEvaluation(id, user.id);
    return { data: evaluation, message: "Self-evaluation submitted" };
  }

  // ─── Line Manager ────────────────────────────────────────

  @Get("pending-review")
  @Roles(UserRole.LINE_MANAGER)
  @ApiOperation({ summary: "List evaluations pending manager review" })
  async getPendingReviews(@CurrentUser() user: AuthenticatedUser) {
    const evaluations = await this.evaluationsService.getPendingReviews(user.id);
    return { data: evaluations, message: "Pending reviews retrieved" };
  }

  @Get("manager/all")
  @Roles(UserRole.LINE_MANAGER)
  @ApiOperation({ summary: "List all evaluations for a line manager's direct reports" })
  async getManagerAll(@CurrentUser() user: AuthenticatedUser) {
    const evaluations = await this.evaluationsService.getManagerEvaluations(user.id);
    return { data: evaluations, message: "Manager evaluations retrieved" };
  }

  @Patch(":id/manager")
  @Roles(UserRole.LINE_MANAGER)
  @ApiOperation({ summary: "Save manager scores and remarks" })
  async saveManagerReview(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: SaveManagerReviewDto,
  ) {
    const evaluation = await this.evaluationsService.saveManagerReview(id, user.id, dto);
    return { data: evaluation, message: "Manager review saved" };
  }

  @Post(":id/submit-manager")
  @Roles(UserRole.LINE_MANAGER)
  @ApiOperation({ summary: "Submit manager review (locks, moves to calibration)" })
  async submitManager(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const evaluation = await this.evaluationsService.submitManagerReview(id, user.id);
    return { data: evaluation, message: "Manager review submitted" };
  }

  // ─── Calibration ─────────────────────────────────────────

  @Get("pending-calibration")
  @Roles(UserRole.CALIBRATION)
  @ApiOperation({ summary: "List evaluations pending calibration (assigned cycles only)" })
  async getPendingCalibrations(@CurrentUser() user: AuthenticatedUser) {
    const evaluations = await this.evaluationsService.getPendingCalibrations(user.id);
    return { data: evaluations, message: "Pending calibrations retrieved" };
  }

  @Patch(":id/calibration-mode")
  @Roles(UserRole.CALIBRATION)
  @ApiOperation({ summary: "Set calibration mode (INDIVIDUAL_AGGREGATE or DIRECT_TEAM)" })
  async setCalibrationMode(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: SetCalibrationModeDto,
  ) {
    const evaluation = await this.evaluationsService.setCalibrationMode(id, user.id, dto.mode);
    return { data: evaluation, message: "Calibration mode set" };
  }

  @Patch(":id/calibration")
  @Roles(UserRole.CALIBRATION)
  @ApiOperation({ summary: "Save direct team final scores (DIRECT_TEAM mode)" })
  async saveDirectCalibration(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: SaveDirectCalibrationDto,
  ) {
    const evaluation = await this.evaluationsService.saveDirectCalibration(id, user.id, dto);
    return { data: evaluation, message: "Direct calibration scores saved" };
  }

  @Patch(":id/calibration-individual")
  @Roles(UserRole.CALIBRATION)
  @ApiOperation({ summary: "Save your individual calibration scores (INDIVIDUAL_AGGREGATE mode)" })
  async saveIndividualCalibration(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: SaveIndividualCalibrationDto,
  ) {
    const evaluation = await this.evaluationsService.saveIndividualCalibration(id, user.id, dto);
    return { data: evaluation, message: "Individual calibration scores saved" };
  }

  @Get(":id/calibration-scores")
  @Roles(UserRole.CALIBRATION)
  @ApiOperation({ summary: "View all individual scores and computed aggregates" })
  async getCalibrationScores(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const scores = await this.evaluationsService.getCalibrationScores(id, user.id);
    return { data: scores, message: "Calibration scores retrieved" };
  }

  @Post(":id/finalize")
  @Roles(UserRole.CALIBRATION)
  @ApiOperation({ summary: "Finalize evaluation (computes aggregate if needed, locks all)" })
  async finalize(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const evaluation = await this.evaluationsService.finalize(id, user.id);
    return { data: evaluation, message: "Evaluation finalized" };
  }

  // ─── Shared ──────────────────────────────────────────────

  @Get(":id")
  @ApiOperation({ summary: "Get evaluation detail (role-scoped)" })
  async getDetail(
    @Param("id", ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const evaluation = await this.evaluationsService.getEvaluationDetail(id, user);
    return { data: evaluation, message: "Evaluation retrieved" };
  }
}
