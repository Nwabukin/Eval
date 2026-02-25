import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { EvaluationSheetsService } from "./evaluation-sheets.service.js";
import { PrismaService } from "../../database/prisma.service.js";

const sheet = {
  id: "s1",
  name: "GENERAL",
  weight: 100,
  minScore: 1,
  maxScore: 10,
  sortOrder: 0,
  cycleId: "c1",
  departmentId: "d1",
  levelId: "l1",
  createdAt: new Date(),
  updatedAt: new Date(),
  cycle: { id: "c1", name: "Q1 2026" },
  department: { id: "d1", name: "Engineering" },
  level: { id: "l1", name: "Senior" },
  _count: { questions: 5 },
};

describe("EvaluationSheetsService", () => {
  let service: EvaluationSheetsService;

  const prisma = {
    evaluationSheet: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findUniqueOrThrow: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluationSheetsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();
    service = mod.get(EvaluationSheetsService);
  });

  describe("create", () => {
    it("creates a sheet with default score range", async () => {
      prisma.evaluationSheet.create.mockResolvedValue(sheet);

      const result = await service.create({
        name: "GENERAL",
        cycleId: "c1",
        departmentId: "d1",
        levelId: "l1",
      });
      expect(result).toEqual(sheet);
    });

    it("throws BadRequestException when minScore >= maxScore", async () => {
      await expect(
        service.create({ name: "Bad", cycleId: "c1", departmentId: "d1", levelId: "l1", minScore: 10, maxScore: 5 }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe("bulkCreate", () => {
    it("creates multiple sheets in a transaction", async () => {
      prisma.$transaction.mockResolvedValue([sheet, { ...sheet, id: "s2", name: "TECHNICAL" }]);

      const result = await service.bulkCreate({
        cycleId: "c1",
        sheets: [
          { name: "GENERAL", departmentId: "d1", levelId: "l1" },
          { name: "TECHNICAL", departmentId: "d1", levelId: "l1" },
        ],
      });
      expect(result).toHaveLength(2);
    });
  });

  describe("findAll", () => {
    it("returns sheets with optional filters", async () => {
      prisma.evaluationSheet.findMany.mockResolvedValue([sheet]);
      const result = await service.findAll({ cycleId: "c1" });
      expect(result).toEqual([sheet]);
    });
  });

  describe("findOne", () => {
    it("returns a sheet by id with questions", async () => {
      prisma.evaluationSheet.findUnique.mockResolvedValue({ ...sheet, questions: [] });
      expect(await service.findOne("s1")).toBeDefined();
    });

    it("throws NotFoundException when not found", async () => {
      prisma.evaluationSheet.findUnique.mockResolvedValue(null);
      await expect(service.findOne("missing")).rejects.toThrow(NotFoundException);
    });
  });

  describe("update", () => {
    it("updates sheet properties", async () => {
      prisma.evaluationSheet.findUnique.mockResolvedValue({ ...sheet, questions: [] });
      prisma.evaluationSheet.update.mockResolvedValue({ ...sheet, name: "GENERAL v2" });
      expect((await service.update("s1", { name: "GENERAL v2" })).name).toBe("GENERAL v2");
    });

    it("validates score range on update", async () => {
      prisma.evaluationSheet.findUnique.mockResolvedValue({ ...sheet, questions: [] });
      prisma.evaluationSheet.findUniqueOrThrow.mockResolvedValue(sheet);

      await expect(
        service.update("s1", { minScore: 10, maxScore: 5 }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe("remove", () => {
    it("deletes a sheet", async () => {
      prisma.evaluationSheet.findUnique.mockResolvedValue({ ...sheet, questions: [] });
      prisma.evaluationSheet.delete.mockResolvedValue(sheet);
      await service.remove("s1");
      expect(prisma.evaluationSheet.delete).toHaveBeenCalledWith({ where: { id: "s1" } });
    });
  });
});
