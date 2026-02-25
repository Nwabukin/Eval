import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EvaluationCyclesService } from "./evaluation-cycles.service.js";
import { PrismaService } from "../../database/prisma.service.js";
import { NotificationsService } from "../notifications/notifications.service.js";

const cycle = {
  id: "c1",
  name: "Q1 2026",
  startDate: new Date("2026-01-01"),
  endDate: new Date("2026-03-31"),
  status: "OPEN",
  createdAt: new Date(),
  updatedAt: new Date(),
  calibrationMembers: [],
};

describe("EvaluationCyclesService", () => {
  let service: EvaluationCyclesService;

  const prisma = {
    evaluationCycle: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    cycleCalibrationMember: {
      deleteMany: jest.fn(),
      createMany: jest.fn(),
    },
    user: {
      findMany: jest.fn(),
    },
  };

  const notifications = {
    notifyCycleStarted: jest.fn().mockResolvedValue(undefined),
  };

  const config = {
    getOrThrow: jest.fn().mockReturnValue("http://localhost:3001"),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluationCyclesService,
        { provide: PrismaService, useValue: prisma },
        { provide: NotificationsService, useValue: notifications },
        { provide: ConfigService, useValue: config },
      ],
    }).compile();
    service = mod.get(EvaluationCyclesService);
  });

  describe("create", () => {
    it("creates a cycle with calibration members", async () => {
      prisma.evaluationCycle.findFirst.mockResolvedValue(null);
      prisma.evaluationCycle.create.mockResolvedValue(cycle);
      prisma.user.findMany.mockResolvedValue([]);

      const result = await service.create({
        name: "Q1 2026",
        startDate: "2026-01-01",
        endDate: "2026-03-31",
        calibrationMemberIds: ["u1"],
      });
      expect(result).toEqual(cycle);
    });

    it("throws BadRequestException when endDate <= startDate", async () => {
      await expect(
        service.create({ name: "Bad", startDate: "2026-03-31", endDate: "2026-01-01" }),
      ).rejects.toThrow(BadRequestException);
    });

    it("throws BadRequestException on overlapping OPEN cycle", async () => {
      prisma.evaluationCycle.findFirst.mockResolvedValue(cycle);

      await expect(
        service.create({ name: "Overlap", startDate: "2026-02-01", endDate: "2026-04-30" }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe("findAll", () => {
    it("returns all cycles", async () => {
      prisma.evaluationCycle.findMany.mockResolvedValue([cycle]);
      expect(await service.findAll()).toEqual([cycle]);
    });

    it("filters by status", async () => {
      prisma.evaluationCycle.findMany.mockResolvedValue([cycle]);
      await service.findAll("OPEN" as any);
      expect(prisma.evaluationCycle.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { status: "OPEN" } }),
      );
    });
  });

  describe("findOne", () => {
    it("returns a cycle by id", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      expect(await service.findOne("c1")).toEqual(cycle);
    });

    it("throws NotFoundException when not found", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(null);
      await expect(service.findOne("missing")).rejects.toThrow(NotFoundException);
    });
  });

  describe("update", () => {
    it("updates cycle details", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      prisma.evaluationCycle.update.mockResolvedValue({ ...cycle, name: "Q1 Updated" });

      const result = await service.update("c1", { name: "Q1 Updated" });
      expect(result.name).toBe("Q1 Updated");
    });

    it("throws BadRequestException when updating a closed cycle", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue({ ...cycle, status: "CLOSED" });
      await expect(service.update("c1", { name: "nope" })).rejects.toThrow(BadRequestException);
    });

    it("replaces calibration members when provided", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      prisma.cycleCalibrationMember.deleteMany.mockResolvedValue({ count: 0 });
      prisma.cycleCalibrationMember.createMany.mockResolvedValue({ count: 2 });
      prisma.evaluationCycle.update.mockResolvedValue(cycle);

      await service.update("c1", { calibrationMemberIds: ["u1", "u2"] });
      expect(prisma.cycleCalibrationMember.deleteMany).toHaveBeenCalled();
      expect(prisma.cycleCalibrationMember.createMany).toHaveBeenCalled();
    });
  });

  describe("close", () => {
    it("closes an open cycle", async () => {
      prisma.evaluationCycle.findUnique.mockResolvedValue(cycle);
      prisma.evaluationCycle.update.mockResolvedValue({ ...cycle, status: "CLOSED" });

      const result = await service.close("c1");
      expect(result.status).toBe("CLOSED");
    });
  });
});
