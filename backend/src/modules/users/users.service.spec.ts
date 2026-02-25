import { Test, TestingModule } from "@nestjs/testing";
import { ConflictException, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service.js";
import { PrismaService } from "../../database/prisma.service.js";
import { AuthService } from "../auth/auth.service.js";

const userRecord = {
  id: "u1",
  email: "alice@eval.local",
  firstName: "Alice",
  lastName: "Smith",
  role: "EMPLOYEE",
  isActive: true,
  departmentId: "d1",
  levelId: "l1",
  lineManagerId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  department: { id: "d1", name: "Engineering" },
  level: { id: "l1", name: "Senior" },
  lineManager: null,
};

describe("UsersService", () => {
  let service: UsersService;

  const prisma = {
    user: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      count: jest.fn(),
    },
  };

  const authService = {
    hashPassword: jest.fn().mockResolvedValue("$2b$12$hashed"),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: prisma },
        { provide: AuthService, useValue: authService },
      ],
    }).compile();
    service = mod.get(UsersService);
  });

  describe("create", () => {
    it("creates a user with hashed password", async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.create.mockResolvedValue(userRecord);

      const result = await service.create({
        email: "alice@eval.local",
        password: "Pass@123",
        firstName: "Alice",
        lastName: "Smith",
        role: "EMPLOYEE" as any,
      });
      expect(result).toEqual(userRecord);
      expect(authService.hashPassword).toHaveBeenCalledWith("Pass@123");
    });

    it("throws ConflictException on duplicate email", async () => {
      prisma.user.findUnique.mockResolvedValue(userRecord);
      await expect(
        service.create({ email: "alice@eval.local", password: "p", firstName: "A", lastName: "S", role: "EMPLOYEE" as any }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe("bulkCreate", () => {
    it("creates new users and skips existing emails", async () => {
      prisma.user.findMany.mockResolvedValue([{ email: "alice@eval.local" }]);
      prisma.user.create.mockResolvedValue({ ...userRecord, id: "u2", email: "bob@eval.local" });

      const result = await service.bulkCreate({
        users: [
          { email: "alice@eval.local", password: "p", firstName: "A", lastName: "S", role: "EMPLOYEE" as any },
          { email: "bob@eval.local", password: "p", firstName: "B", lastName: "J", role: "EMPLOYEE" as any },
        ],
      });
      expect(result.created).toHaveLength(1);
      expect(result.skipped).toHaveLength(1);
      expect(result.skipped[0]!.email).toBe("alice@eval.local");
    });
  });

  describe("findAll", () => {
    it("returns paginated users", async () => {
      prisma.user.findMany.mockResolvedValue([userRecord]);
      prisma.user.count.mockResolvedValue(1);

      const result = await service.findAll({ page: 1, limit: 20 });
      expect(result.data).toHaveLength(1);
      expect(result.meta).toEqual({ page: 1, limit: 20, total: 1, totalPages: 1 });
    });

    it("applies search filter", async () => {
      prisma.user.findMany.mockResolvedValue([]);
      prisma.user.count.mockResolvedValue(0);

      await service.findAll({ search: "alice" });
      const call = prisma.user.findMany.mock.calls[0]![0] as { where: Record<string, unknown> };
      expect(call.where).toHaveProperty("OR");
    });
  });

  describe("findOne", () => {
    it("returns a user by id", async () => {
      prisma.user.findUnique.mockResolvedValue(userRecord);
      expect(await service.findOne("u1")).toEqual(userRecord);
    });

    it("throws NotFoundException when not found", async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      await expect(service.findOne("missing")).rejects.toThrow(NotFoundException);
    });
  });

  describe("update", () => {
    it("updates user fields", async () => {
      prisma.user.findUnique.mockResolvedValue(userRecord);
      const updated = { ...userRecord, firstName: "Alicia" };
      prisma.user.update.mockResolvedValue(updated);

      expect(await service.update("u1", { firstName: "Alicia" })).toEqual(updated);
    });

    it("hashes password when included in update", async () => {
      prisma.user.findUnique.mockResolvedValue(userRecord);
      prisma.user.update.mockResolvedValue(userRecord);

      await service.update("u1", { password: "NewPass@123" });
      expect(authService.hashPassword).toHaveBeenCalledWith("NewPass@123");
    });
  });

  describe("remove", () => {
    it("soft-deletes a user", async () => {
      prisma.user.findUnique.mockResolvedValue(userRecord);
      prisma.user.update.mockResolvedValue({ ...userRecord, isActive: false });

      await service.remove("u1");
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: "u1" },
        data: { isActive: false },
      });
    });
  });

  describe("assign", () => {
    it("assigns department, level, and manager", async () => {
      prisma.user.findUnique.mockResolvedValue(userRecord);
      prisma.user.update.mockResolvedValue(userRecord);

      await service.assign("u1", { departmentId: "d2", levelId: "l2", lineManagerId: "m1" });
      expect(prisma.user.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ departmentId: "d2", levelId: "l2", lineManagerId: "m1" }),
        }),
      );
    });
  });
});
