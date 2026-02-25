var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
const QUESTION_INCLUDE = {
    sheet: {
        select: {
            id: true,
            name: true,
            minScore: true,
            maxScore: true,
            cycle: { select: { id: true, name: true } },
            department: { select: { id: true, name: true } },
            level: { select: { id: true, name: true } },
        },
    },
};
let EvaluationQuestionsService = class EvaluationQuestionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async bulkCreate(dto) {
        return this.prisma.$transaction(dto.questions.map((q, idx) => this.prisma.evaluationQuestion.create({
            data: {
                text: q.text,
                category: q.category,
                weight: q.weight ?? 10,
                sortOrder: q.sortOrder ?? idx,
                sheetId: dto.sheetId,
            },
            include: QUESTION_INCLUDE,
        })));
    }
    async create(dto) {
        return this.prisma.evaluationQuestion.create({
            data: {
                text: dto.text,
                category: dto.category,
                weight: dto.weight ?? 10,
                sortOrder: dto.sortOrder ?? 0,
                sheetId: dto.sheetId,
            },
            include: QUESTION_INCLUDE,
        });
    }
    async findAll(query) {
        return this.prisma.evaluationQuestion.findMany({
            where: {
                ...(query.sheetId && { sheetId: query.sheetId }),
                ...(query.search && { text: { contains: query.search, mode: "insensitive" } }),
                ...((query.cycleId || query.departmentId || query.levelId) && {
                    sheet: {
                        ...(query.cycleId && { cycleId: query.cycleId }),
                        ...(query.departmentId && { departmentId: query.departmentId }),
                        ...(query.levelId && { levelId: query.levelId }),
                    },
                }),
            },
            include: QUESTION_INCLUDE,
            orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
        });
    }
    async findOne(id) {
        const question = await this.prisma.evaluationQuestion.findUnique({
            where: { id },
            include: QUESTION_INCLUDE,
        });
        if (!question)
            throw new NotFoundException("Question not found");
        return question;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.evaluationQuestion.update({
            where: { id },
            data: { ...dto },
            include: QUESTION_INCLUDE,
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.evaluationQuestion.delete({ where: { id } });
    }
};
EvaluationQuestionsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EvaluationQuestionsService);
export { EvaluationQuestionsService };
//# sourceMappingURL=evaluation-questions.service.js.map