import { Test, TestingModule } from "@nestjs/testing";
import { NotFoundException } from "@nestjs/common";
import { EvaluationQuestionsService } from "./evaluation-questions.service.js";
import { PrismaService } from "../../database/prisma.service.js";

const question = {
  id: "q1",
  text: "Demonstrates teamwork",
  category: "TEAMWORK",
  weight: 10,
  sortOrder: 0,
  sheetId: "s1",
  createdAt: new Date(),
  updatedAt: new Date(),
  sheet: {
    id: "s1",
    name: "GENERAL",
    minScore: 1,
    maxScore: 10,
    cycle: { id: "c1", name: "Q1 2026" },
    department: { id: "d1", name: "Engineering" },
    level: { id: "l1", name: "Senior" },
  },
};

describe("EvaluationQuestionsService", () => {
  let service: EvaluationQuestionsService;

  const prisma = {
    evaluationQuestion: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluationQuestionsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();
    service = mod.get(EvaluationQuestionsService);
  });

  describe("create", () => {
    it("creates a question belonging to a sheet", async () => {
      prisma.evaluationQuestion.create.mockResolvedValue(question);
      const result = await service.create({ text: "Demonstrates teamwork", sheetId: "s1" });
      expect(result).toEqual(question);
    });
  });

  describe("bulkCreate", () => {
    it("creates multiple questions in a transaction", async () => {
      prisma.$transaction.mockResolvedValue([question]);
      const result = await service.bulkCreate({
        sheetId: "s1",
        questions: [{ text: "Demonstrates teamwork" }],
      });
      expect(result).toHaveLength(1);
    });
  });

  describe("findAll", () => {
    it("returns questions with optional filters", async () => {
      prisma.evaluationQuestion.findMany.mockResolvedValue([question]);
      expect(await service.findAll({ sheetId: "s1" })).toEqual([question]);
    });

    it("filters through sheet relations", async () => {
      prisma.evaluationQuestion.findMany.mockResolvedValue([]);
      await service.findAll({ cycleId: "c1", departmentId: "d1" });
      const call = prisma.evaluationQuestion.findMany.mock.calls[0]![0] as { where: Record<string, unknown> };
      expect(call.where).toHaveProperty("sheet");
    });
  });

  describe("findOne", () => {
    it("returns a question by id", async () => {
      prisma.evaluationQuestion.findUnique.mockResolvedValue(question);
      expect(await service.findOne("q1")).toEqual(question);
    });

    it("throws NotFoundException when not found", async () => {
      prisma.evaluationQuestion.findUnique.mockResolvedValue(null);
      await expect(service.findOne("missing")).rejects.toThrow(NotFoundException);
    });
  });

  describe("update", () => {
    it("updates question properties", async () => {
      prisma.evaluationQuestion.findUnique.mockResolvedValue(question);
      prisma.evaluationQuestion.update.mockResolvedValue({ ...question, text: "Updated" });
      expect((await service.update("q1", { text: "Updated" })).text).toBe("Updated");
    });
  });

  describe("remove", () => {
    it("deletes a question", async () => {
      prisma.evaluationQuestion.findUnique.mockResolvedValue(question);
      prisma.evaluationQuestion.delete.mockResolvedValue(question);
      await service.remove("q1");
      expect(prisma.evaluationQuestion.delete).toHaveBeenCalledWith({ where: { id: "q1" } });
    });
  });
});
