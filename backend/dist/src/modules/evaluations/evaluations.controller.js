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
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { EvaluationsService } from "./evaluations.service.js";
import { SaveSelfEvaluationDto, SaveManagerReviewDto, SetCalibrationModeDto, SaveDirectCalibrationDto, SaveIndividualCalibrationDto, QueryEvaluationsDto, } from "./dto/index.js";
import { CurrentUser, Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
let EvaluationsController = class EvaluationsController {
    evaluationsService;
    constructor(evaluationsService) {
        this.evaluationsService = evaluationsService;
    }
    async findAll(query) {
        const result = await this.evaluationsService.findAll(query);
        return { data: result.data, message: "Evaluations retrieved", meta: result.meta };
    }
    async getMyEvaluation(user) {
        const evaluation = await this.evaluationsService.getMyEvaluation(user);
        return { data: evaluation, message: "Evaluation retrieved" };
    }
    async saveSelf(id, user, dto) {
        const evaluation = await this.evaluationsService.saveSelfEvaluation(id, user.id, dto);
        return { data: evaluation, message: "Self-evaluation saved" };
    }
    async submitSelf(id, user) {
        const evaluation = await this.evaluationsService.submitSelfEvaluation(id, user.id);
        return { data: evaluation, message: "Self-evaluation submitted" };
    }
    async getPendingReviews(user) {
        const evaluations = await this.evaluationsService.getPendingReviews(user.id);
        return { data: evaluations, message: "Pending reviews retrieved" };
    }
    async getManagerAll(user) {
        const evaluations = await this.evaluationsService.getManagerEvaluations(user.id);
        return { data: evaluations, message: "Manager evaluations retrieved" };
    }
    async saveManagerReview(id, user, dto) {
        const evaluation = await this.evaluationsService.saveManagerReview(id, user.id, dto);
        return { data: evaluation, message: "Manager review saved" };
    }
    async submitManager(id, user) {
        const evaluation = await this.evaluationsService.submitManagerReview(id, user.id);
        return { data: evaluation, message: "Manager review submitted" };
    }
    async getPendingCalibrations(user) {
        const evaluations = await this.evaluationsService.getPendingCalibrations(user.id);
        return { data: evaluations, message: "Pending calibrations retrieved" };
    }
    async setCalibrationMode(id, user, dto) {
        const evaluation = await this.evaluationsService.setCalibrationMode(id, user.id, dto.mode);
        return { data: evaluation, message: "Calibration mode set" };
    }
    async saveDirectCalibration(id, user, dto) {
        const evaluation = await this.evaluationsService.saveDirectCalibration(id, user.id, dto);
        return { data: evaluation, message: "Direct calibration scores saved" };
    }
    async saveIndividualCalibration(id, user, dto) {
        const evaluation = await this.evaluationsService.saveIndividualCalibration(id, user.id, dto);
        return { data: evaluation, message: "Individual calibration scores saved" };
    }
    async getCalibrationScores(id, user) {
        const scores = await this.evaluationsService.getCalibrationScores(id, user.id);
        return { data: scores, message: "Calibration scores retrieved" };
    }
    async finalize(id, user) {
        const evaluation = await this.evaluationsService.finalize(id, user.id);
        return { data: evaluation, message: "Evaluation finalized" };
    }
    async getDetail(id, user) {
        const evaluation = await this.evaluationsService.getEvaluationDetail(id, user);
        return { data: evaluation, message: "Evaluation retrieved" };
    }
};
__decorate([
    Get(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "List all evaluations with filters and pagination (admin)" }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QueryEvaluationsDto]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "findAll", null);
__decorate([
    Get("my"),
    Roles(UserRole.EMPLOYEE),
    ApiOperation({ summary: "Get or create my evaluation for the active cycle" }),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "getMyEvaluation", null);
__decorate([
    Patch(":id/self"),
    Roles(UserRole.EMPLOYEE),
    ApiOperation({ summary: "Save self scores and remarks (draft)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, SaveSelfEvaluationDto]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "saveSelf", null);
__decorate([
    Post(":id/submit-self"),
    Roles(UserRole.EMPLOYEE),
    ApiOperation({ summary: "Submit self-evaluation (locks, moves to line manager)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "submitSelf", null);
__decorate([
    Get("pending-review"),
    Roles(UserRole.LINE_MANAGER),
    ApiOperation({ summary: "List evaluations pending manager review" }),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "getPendingReviews", null);
__decorate([
    Get("manager/all"),
    Roles(UserRole.LINE_MANAGER),
    ApiOperation({ summary: "List all evaluations for a line manager's direct reports" }),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "getManagerAll", null);
__decorate([
    Patch(":id/manager"),
    Roles(UserRole.LINE_MANAGER),
    ApiOperation({ summary: "Save manager scores and remarks" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, SaveManagerReviewDto]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "saveManagerReview", null);
__decorate([
    Post(":id/submit-manager"),
    Roles(UserRole.LINE_MANAGER),
    ApiOperation({ summary: "Submit manager review (locks, moves to calibration)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "submitManager", null);
__decorate([
    Get("pending-calibration"),
    Roles(UserRole.CALIBRATION),
    ApiOperation({ summary: "List evaluations pending calibration (assigned cycles only)" }),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "getPendingCalibrations", null);
__decorate([
    Patch(":id/calibration-mode"),
    Roles(UserRole.CALIBRATION),
    ApiOperation({ summary: "Set calibration mode (INDIVIDUAL_AGGREGATE or DIRECT_TEAM)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, SetCalibrationModeDto]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "setCalibrationMode", null);
__decorate([
    Patch(":id/calibration"),
    Roles(UserRole.CALIBRATION),
    ApiOperation({ summary: "Save direct team final scores (DIRECT_TEAM mode)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, SaveDirectCalibrationDto]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "saveDirectCalibration", null);
__decorate([
    Patch(":id/calibration-individual"),
    Roles(UserRole.CALIBRATION),
    ApiOperation({ summary: "Save your individual calibration scores (INDIVIDUAL_AGGREGATE mode)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, SaveIndividualCalibrationDto]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "saveIndividualCalibration", null);
__decorate([
    Get(":id/calibration-scores"),
    Roles(UserRole.CALIBRATION),
    ApiOperation({ summary: "View all individual scores and computed aggregates" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "getCalibrationScores", null);
__decorate([
    Post(":id/finalize"),
    Roles(UserRole.CALIBRATION),
    ApiOperation({ summary: "Finalize evaluation (computes aggregate if needed, locks all)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "finalize", null);
__decorate([
    Get(":id"),
    ApiOperation({ summary: "Get evaluation detail (role-scoped)" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EvaluationsController.prototype, "getDetail", null);
EvaluationsController = __decorate([
    Controller("evaluations"),
    ApiTags("Evaluations"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [EvaluationsService])
], EvaluationsController);
export { EvaluationsController };
//# sourceMappingURL=evaluations.controller.js.map