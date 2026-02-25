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
import { EvaluationQuestionsService } from "./evaluation-questions.service.js";
import { CreateQuestionDto, UpdateQuestionDto, QueryQuestionsDto, BulkCreateQuestionsDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
let EvaluationQuestionsController = class EvaluationQuestionsController {
    questionsService;
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    async create(dto) {
        const question = await this.questionsService.create(dto);
        return { data: question, message: "Question created" };
    }
    async bulkCreate(dto) {
        const questions = await this.questionsService.bulkCreate(dto);
        return { data: questions, message: `${questions.length} questions created` };
    }
    async findAll(query) {
        const questions = await this.questionsService.findAll(query);
        return { data: questions, message: "Questions retrieved" };
    }
    async findOne(id) {
        const question = await this.questionsService.findOne(id);
        return { data: question, message: "Question retrieved" };
    }
    async update(id, dto) {
        const question = await this.questionsService.update(id, dto);
        return { data: question, message: "Question updated" };
    }
    async remove(id) {
        await this.questionsService.remove(id);
    }
};
__decorate([
    Post(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create an evaluation question belonging to a sheet" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateQuestionDto]),
    __metadata("design:returntype", Promise)
], EvaluationQuestionsController.prototype, "create", null);
__decorate([
    Post("bulk"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Create multiple questions at once for a sheet" }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BulkCreateQuestionsDto]),
    __metadata("design:returntype", Promise)
], EvaluationQuestionsController.prototype, "bulkCreate", null);
__decorate([
    Get(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "List questions with optional sheet/cycle/dept/level filters" }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QueryQuestionsDto]),
    __metadata("design:returntype", Promise)
], EvaluationQuestionsController.prototype, "findAll", null);
__decorate([
    Get(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Get question by ID" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationQuestionsController.prototype, "findOne", null);
__decorate([
    Patch(":id"),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: "Update question text, category, weight, or order" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateQuestionDto]),
    __metadata("design:returntype", Promise)
], EvaluationQuestionsController.prototype, "update", null);
__decorate([
    Delete(":id"),
    Roles(UserRole.ADMIN),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiOperation({ summary: "Delete a question" }),
    __param(0, Param("id", ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationQuestionsController.prototype, "remove", null);
EvaluationQuestionsController = __decorate([
    Controller("evaluation-questions"),
    ApiTags("Evaluation Questions"),
    ApiBearerAuth(),
    UseGuards(AuthGuard("jwt"), RolesGuard),
    __metadata("design:paramtypes", [EvaluationQuestionsService])
], EvaluationQuestionsController);
export { EvaluationQuestionsController };
//# sourceMappingURL=evaluation-questions.controller.js.map