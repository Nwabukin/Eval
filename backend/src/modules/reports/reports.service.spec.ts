import { Test, TestingModule } from "@nestjs/testing";
import { NotFoundException } from "@nestjs/common";
import { ReportsService } from "./reports.service.js";
import { PrismaService } from "../../database/prisma.service.js";

const cycle = {
  id: "c1",
  name: "Q1 2026",
  startDate: new Date("2026-01-01"),
  endDate: new Date("2026-03-31"),
  status: "OPEN",
};

const reportEvaluation = {
  status: "FINALIZED",
  employee: {
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@eval.local",
    department: { name: "Engineering" },
    level: { name: "Senior" },
  },
  answers: [
    {
      selfScore: 7,
      selfRemarks: "Solid",
      managerScore: 8,
      managerRemarks: "Good",
      finalScore: 8,
      question: {
        text: "Demonstrates teamwork",
        weight: 10,
        sheet: { name: "GENERAL", weight: 100, minScore: 1, maxScore: 10 },
      },
    },
  ],
};

describe("ReportsService", () => {
  let service: ReportsService;

  const prisma = {
    evaluationCycle: { findUnique: jest.fn() },
    evaluation: {
      findMany: jest.fn(),
      groupBy: jest.fn(),
      count: jest.fn(),
    },
    evaluationAnswer: { aggregate: jest.fn() },
    user: { count: jest.fn() },
    department: { count: jest.fn() },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();
    service = mod.get(ReportsService);
  });

  describe("getDashboard", () => {
    it("returns dashboard stats", async () => {
      prisma.evaluation.groupBy.mockResolvedValue([
        { status: "DRAFT", _count: { id: 3 } },
        { status: "FINALIZED", _count: { id: 5 } },
      ]);
      prisma.user.count.mockResolvedValue(20);
      prisma.department.count.mockResolvedValue(5);
      prisma.evaluationAnswer.aggregate.mockResolvedValue({
        _avg: { selfScore: 7.2, managerScore: 7.5, finalScore: 7.8 },
      });

      const result = await service.getDashboard();
      expect(result.evaluations.draft).toBe(3);
      expect(result.evaluations.finalized).toBe(5);
      expect(result.totalEmployees).toBe(20);
      expect(result.averages.self).toBe(7.2);
    });

    it("handles zero employees", async () => {
      prisma.evaluation.groupBy.mockResolvedValue([]);
      prisma.user.count.mockResolvedValue(0);
      prisma.department.count.mockResolvedValue(0);
      prisma.evaluationAnswer.aggregate.mockResolvedValue({
        _avg: { selfScore: null, managerScore: null, finalScore: null },
      });

      const result = await service.getDashboard();
      expect(result.completionRate).toBe(0);
      expect(result.averages.final).toBe(0);
    });
  });

  describe("generateCsvReport", () => {
    it("generates a valid CSV string", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      prisma.evaluation.findMany.mockResolvedValue([reportEvaluation]);

      const csv = await service.generateCsvReport("c1");
      expect(typeof csv).toBe("string");
      expect(csv).toContain("Employee");
      expect(csv).toContain("Alice Smith");
      expect(csv).toContain("Demonstrates teamwork");
    });

    it("throws NotFoundException for invalid cycle", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(null);
      await expect(service.generateCsvReport("bad")).rejects.toThrow(NotFoundException);
    });
  });

  describe("generateExcelReport", () => {
    it("returns a Buffer", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      prisma.evaluation.findMany.mockResolvedValue([reportEvaluation]);

      const buffer = await service.generateExcelReport("c1");
      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(0);
    });
  });

  describe("generatePdfReport", () => {
    it("returns a Buffer", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      prisma.evaluation.findMany.mockResolvedValue([reportEvaluation]);

      const buffer = await service.generatePdfReport("c1");
      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(0);
    });

    it("handles empty evaluations", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      prisma.evaluation.findMany.mockResolvedValue([]);

      const buffer = await service.generatePdfReport("c1");
      expect(buffer).toBeInstanceOf(Buffer);
    });
  });
});
