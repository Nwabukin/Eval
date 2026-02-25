var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
const SHEET_INCLUDE = {
    cycle: { select: { id: true, name: true } },
    department: { select: { id: true, name: true } },
    level: { select: { id: true, name: true } },
    _count: { select: { questions: true } },
};
let EvaluationSheetsService = class EvaluationSheetsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async bulkCreate(dto) {
        return this.prisma.$transaction(dto.sheets.map((s, idx) => this.prisma.evaluationSheet.create({
            data: {
                name: s.name,
                weight: s.weight ?? 100,
                minScore: s.minScore ?? 1,
                maxScore: s.maxScore ?? 10,
                sortOrder: s.sortOrder ?? idx,
                cycleId: dto.cycleId,
                departmentId: s.departmentId,
                levelId: s.levelId,
            },
            include: SHEET_INCLUDE,
        })));
    }
    async create(dto) {
        this.validateScoreRange(dto.minScore ?? 1, dto.maxScore ?? 10);
        return this.prisma.evaluationSheet.create({
            data: {
                name: dto.name,
                weight: dto.weight ?? 100,
                minScore: dto.minScore ?? 1,
                maxScore: dto.maxScore ?? 10,
                sortOrder: dto.sortOrder ?? 0,
                cycleId: dto.cycleId,
                departmentId: dto.departmentId,
                levelId: dto.levelId,
            },
            include: SHEET_INCLUDE,
        });
    }
    async findAll(query) {
        return this.prisma.evaluationSheet.findMany({
            where: {
                ...(query.cycleId && { cycleId: query.cycleId }),
                ...(query.departmentId && { departmentId: query.departmentId }),
                ...(query.levelId && { levelId: query.levelId }),
            },
            include: SHEET_INCLUDE,
            orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
        });
    }
    async findOne(id) {
        const sheet = await this.prisma.evaluationSheet.findUnique({
            where: { id },
            include: {
                ...SHEET_INCLUDE,
                questions: { orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }] },
            },
        });
        if (!sheet)
            throw new NotFoundException("Evaluation sheet not found");
        return sheet;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.minScore != null || dto.maxScore != null) {
            const existing = await this.prisma.evaluationSheet.findUniqueOrThrow({ where: { id } });
            this.validateScoreRange(dto.minScore ?? existing.minScore, dto.maxScore ?? existing.maxScore);
        }
        return this.prisma.evaluationSheet.update({
            where: { id },
            data: { ...dto },
            include: SHEET_INCLUDE,
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.evaluationSheet.delete({ where: { id } });
    }
    validateScoreRange(min, max) {
        if (min >= max) {
            throw new BadRequestException(`minScore (${min}) must be less than maxScore (${max})`);
        }
    }
};
EvaluationSheetsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EvaluationSheetsService);
export { EvaluationSheetsService };
//# sourceMappingURL=evaluation-sheets.service.js.map