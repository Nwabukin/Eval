import { Test, TestingModule } from "@nestjs/testing";
import { ConflictException, NotFoundException } from "@nestjs/common";
import { LevelsService } from "./levels.service.js";
import { PrismaService } from "../../database/prisma.service.js";

const level = { id: "l1", name: "Senior", createdAt: new Date(), updatedAt: new Date() };

describe("LevelsService", () => {
  let service: LevelsService;

  const prisma = {
    level: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    user: { count: jest.fn() },
    evaluationSheet: { count: jest.fn() },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [LevelsService, { provide: PrismaService, useValue: prisma }],
    }).compile();
    service = mod.get(LevelsService);
  });

  describe("create", () => {
    it("creates a level when name is unique", async () => {
      prisma.level.findUnique.mockResolvedValue(null);
      prisma.level.create.mockResolvedValue(level);

      expect(await service.create({ name: "Senior" })).toEqual(level);
    });

    it("throws ConflictException on duplicate name", async () => {
      prisma.level.findUnique.mockResolvedValue(level);
      await expect(service.create({ name: "Senior" })).rejects.toThrow(ConflictException);
    });
  });

  describe("findAll", () => {
    it("returns levels ordered by name", async () => {
      prisma.level.findMany.mockResolvedValue([level]);
      expect(await service.findAll()).toEqual([level]);
    });
  });

  describe("findOne", () => {
    it("returns a level by id", async () => {
      prisma.level.findUnique.mockResolvedValue(level);
      expect(await service.findOne("l1")).toEqual(level);
    });

    it("throws NotFoundException when not found", async () => {
      prisma.level.findUnique.mockResolvedValue(null);
      await expect(service.findOne("missing")).rejects.toThrow(NotFoundException);
    });
  });

  describe("update", () => {
    it("updates a level", async () => {
      prisma.level.findUnique.mockResolvedValue(level);
      const updated = { ...level, name: "Lead" };
      prisma.level.update.mockResolvedValue(updated);
      expect(await service.update("l1", { name: "Lead" })).toEqual(updated);
    });
  });

  describe("remove", () => {
    it("deletes a level with no references", async () => {
      prisma.level.findUnique.mockResolvedValue(level);
      prisma.user.count.mockResolvedValue(0);
      prisma.evaluationSheet.count.mockResolvedValue(0);
      prisma.level.delete.mockResolvedValue(level);

      await service.remove("l1");
      expect(prisma.level.delete).toHaveBeenCalledWith({ where: { id: "l1" } });
    });

    it("throws ConflictException when users are assigned", async () => {
      prisma.level.findUnique.mockResolvedValue(level);
      prisma.user.count.mockResolvedValue(5);
      await expect(service.remove("l1")).rejects.toThrow(ConflictException);
    });

    it("throws ConflictException when sheets reference it", async () => {
      prisma.level.findUnique.mockResolvedValue(level);
      prisma.user.count.mockResolvedValue(0);
      prisma.evaluationSheet.count.mockResolvedValue(1);
      await expect(service.remove("l1")).rejects.toThrow(ConflictException);
    });
  });
});
