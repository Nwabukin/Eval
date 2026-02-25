import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
import type { CreateQuestionDto, UpdateQuestionDto, QueryQuestionsDto, BulkCreateQuestionsDto } from "./dto/index.js";

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
} as const;

@Injectable()
export class EvaluationQuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates multiple questions at once, all belonging to the same sheet.
   * Uses a transaction for atomicity.
   */
  async bulkCreate(dto: BulkCreateQuestionsDto) {
    return this.prisma.$transaction(
      dto.questions.map((q, idx) =>
        this.prisma.evaluationQuestion.create({
          data: {
            text: q.text,
            category: q.category,
            weight: q.weight ?? 10,
            sortOrder: q.sortOrder ?? idx,
            sheetId: dto.sheetId,
          },
          include: QUESTION_INCLUDE,
        }),
      ),
    );
  }

  /** Creates a single question belonging to a sheet. */
  async create(dto: CreateQuestionDto) {
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

  /** Lists questions with optional filters. Cycle/dept/level filter through the sheet relation. */
  async findAll(query: QueryQuestionsDto) {
    return this.prisma.evaluationQuestion.findMany({
      where: {
        ...(query.sheetId && { sheetId: query.sheetId }),
        ...(query.search && { text: { contains: query.search, mode: "insensitive" as const } }),
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

  /** Gets a single question by ID. */
  async findOne(id: string) {
    const question = await this.prisma.evaluationQuestion.findUnique({
      where: { id },
      include: QUESTION_INCLUDE,
    });
    if (!question) throw new NotFoundException("Question not found");
    return question;
  }

  /** Updates question text, category, weight, or sort order. */
  async update(id: string, dto: UpdateQuestionDto) {
    await this.findOne(id);
    return this.prisma.evaluationQuestion.update({
      where: { id },
      data: { ...dto },
      include: QUESTION_INCLUDE,
    });
  }

  /** Deletes a question. */
  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.prisma.evaluationQuestion.delete({ where: { id } });
  }
}
