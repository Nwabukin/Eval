var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, ConflictException, } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
let LevelsService = class LevelsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const existing = await this.prisma.level.findUnique({
            where: { name: dto.name },
        });
        if (existing) {
            throw new ConflictException("Level name already exists");
        }
        return this.prisma.level.create({ data: { name: dto.name } });
    }
    async findAll() {
        return this.prisma.level.findMany({ orderBy: { name: "asc" } });
    }
    async findOne(id) {
        const level = await this.prisma.level.findUnique({ where: { id } });
        if (!level)
            throw new NotFoundException("Level not found");
        return level;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.level.update({ where: { id }, data: { ...dto } });
    }
    async remove(id) {
        await this.findOne(id);
        const usageCount = await this.prisma.user.count({ where: { levelId: id } });
        if (usageCount > 0) {
            throw new ConflictException(`Cannot delete level — ${usageCount} user(s) are still assigned to it`);
        }
        const sheetCount = await this.prisma.evaluationSheet.count({ where: { levelId: id } });
        if (sheetCount > 0) {
            throw new ConflictException(`Cannot delete level — ${sheetCount} evaluation sheet(s) reference it`);
        }
        await this.prisma.level.delete({ where: { id } });
    }
};
LevelsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], LevelsService);
export { LevelsService };
//# sourceMappingURL=levels.service.js.map