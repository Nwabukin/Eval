import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
import type { CreateSheetDto, UpdateSheetDto, QuerySheetsDto, BulkCreateSheetsDto } from "./dto/index.js";

const SHEET_INCLUDE = {
  cycle: { select: { id: true, name: true } },
  department: { select: { id: true, name: true } },
  level: { select: { id: true, name: true } },
  _count: { select: { questions: true } },
} as const;

@Injectable()
export class EvaluationSheetsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates multiple sheets at once, all scoped to the same cycle.
   * Uses a transaction for atomicity.
   */
  async bulkCreate(dto: BulkCreateSheetsDto) {
    return this.prisma.$transaction(
      dto.sheets.map((s, idx) =>
        this.prisma.evaluationSheet.create({
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
        }),
      ),
    );
  }

  /**
   * Creates a single evaluation sheet scoped to cycle + department + level.
   * Validates that minScore < maxScore.
   */
  async create(dto: CreateSheetDto) {
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

  /** Lists sheets with optional cycle/department/level filters. */
  async findAll(query: QuerySheetsDto) {
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

  /** Gets a single sheet by ID with its relations. */
  async findOne(id: string) {
    const sheet = await this.prisma.evaluationSheet.findUnique({
      where: { id },
      include: {
        ...SHEET_INCLUDE,
        questions: { orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }] },
      },
    });
    if (!sheet) throw new NotFoundException("Evaluation sheet not found");
    return sheet;
  }

  /** Updates a sheet's properties. */
  async update(id: string, dto: UpdateSheetDto) {
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

  /** Deletes a sheet and cascades to its questions. */
  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.prisma.evaluationSheet.delete({ where: { id } });
  }

  private validateScoreRange(min: number, max: number): void {
    if (min >= max) {
      throw new BadRequestException(`minScore (${min}) must be less than maxScore (${max})`);
    }
  }
}
