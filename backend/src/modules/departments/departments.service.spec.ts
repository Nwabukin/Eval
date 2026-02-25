import { Test, TestingModule } from "@nestjs/testing";
import { ConflictException, NotFoundException } from "@nestjs/common";
import { DepartmentsService } from "./departments.service.js";
import { PrismaService } from "../../database/prisma.service.js";

const dept = { id: "d1", name: "Engineering", createdAt: new Date(), updatedAt: new Date() };

describe("DepartmentsService", () => {
  let service: DepartmentsService;

  const prisma = {
    department: {
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
      providers: [DepartmentsService, { provide: PrismaService, useValue: prisma }],
    }).compile();
    service = mod.get(DepartmentsService);
  });

  describe("create", () => {
    it("creates a department when name is unique", async () => {
      prisma.department.findUnique.mockResolvedValue(null);
      prisma.department.create.mockResolvedValue(dept);

      const result = await service.create({ name: "Engineering" });
      expect(result).toEqual(dept);
      expect(prisma.department.create).toHaveBeenCalledWith({ data: { name: "Engineering" } });
    });

    it("throws ConflictException on duplicate name", async () => {
      prisma.department.findUnique.mockResolvedValue(dept);
      await expect(service.create({ name: "Engineering" })).rejects.toThrow(ConflictException);
    });
  });

  describe("findAll", () => {
    it("returns departments ordered by name", async () => {
      prisma.department.findMany.mockResolvedValue([dept]);
      const result = await service.findAll();
      expect(result).toEqual([dept]);
      expect(prisma.department.findMany).toHaveBeenCalledWith({ orderBy: { name: "asc" } });
    });
  });

  describe("findOne", () => {
    it("returns a department by id", async () => {
      prisma.department.findUnique.mockResolvedValue(dept);
      expect(await service.findOne("d1")).toEqual(dept);
    });

    it("throws NotFoundException when not found", async () => {
      prisma.department.findUnique.mockResolvedValue(null);
      await expect(service.findOne("missing")).rejects.toThrow(NotFoundException);
    });
  });

  describe("update", () => {
    it("updates a department", async () => {
      prisma.department.findUnique.mockResolvedValue(dept);
      const updated = { ...dept, name: "Eng v2" };
      prisma.department.update.mockResolvedValue(updated);

      expect(await service.update("d1", { name: "Eng v2" })).toEqual(updated);
    });
  });

  describe("remove", () => {
    it("deletes a department with no references", async () => {
      prisma.department.findUnique.mockResolvedValue(dept);
      prisma.user.count.mockResolvedValue(0);
      prisma.evaluationSheet.count.mockResolvedValue(0);
      prisma.department.delete.mockResolvedValue(dept);

      await service.remove("d1");
      expect(prisma.department.delete).toHaveBeenCalledWith({ where: { id: "d1" } });
    });

    it("throws ConflictException when users still reference it", async () => {
      prisma.department.findUnique.mockResolvedValue(dept);
      prisma.user.count.mockResolvedValue(3);

      await expect(service.remove("d1")).rejects.toThrow(ConflictException);
    });

    it("throws ConflictException when sheets still reference it", async () => {
      prisma.department.findUnique.mockResolvedValue(dept);
      prisma.user.count.mockResolvedValue(0);
      prisma.evaluationSheet.count.mockResolvedValue(2);

      await expect(service.remove("d1")).rejects.toThrow(ConflictException);
    });
  });
});
