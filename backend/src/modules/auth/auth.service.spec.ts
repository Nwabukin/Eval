import { Test, TestingModule } from "@nestjs/testing";
import { UnauthorizedException, BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "./auth.service.js";
import { PrismaService } from "../../database/prisma.service.js";

jest.mock("bcrypt", () => ({
  __esModule: true,
  default: {
    compare: jest.fn(),
    hash: jest.fn(),
  },
}));
import bcrypt from "bcrypt";
const mockBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;

const user = {
  id: "u1",
  email: "test@eval.local",
  password: "$2b$12$hashedpassword",
  firstName: "Test",
  lastName: "User",
  role: "EMPLOYEE",
  isActive: true,
  departmentId: "d1",
  levelId: "l1",
  lineManagerId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("AuthService", () => {
  let service: AuthService;

  const prisma = {
    user: {
      findUnique: jest.fn(),
      findUniqueOrThrow: jest.fn(),
      update: jest.fn(),
    },
    revokedToken: {
      findUnique: jest.fn(),
      create: jest.fn(),
      deleteMany: jest.fn(),
    },
  };

  const jwtService = {
    sign: jest.fn().mockReturnValue("mock-token"),
    verify: jest.fn(),
  };

  const configService = {
    getOrThrow: jest.fn((key: string) => {
      const map: Record<string, string> = {
        JWT_SECRET: "jwt-secret",
        JWT_REFRESH_SECRET: "jwt-refresh-secret",
        JWT_EXPIRES_IN: "15m",
        JWT_REFRESH_EXPIRES_IN: "7d",
      };
      return map[key] ?? "";
    }),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: prisma },
        { provide: JwtService, useValue: jwtService },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();
    service = mod.get(AuthService);
  });

  describe("login", () => {
    it("returns token pair on valid credentials", async () => {
      prisma.user.findUnique.mockResolvedValue(user);
      (mockBcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.login({ email: user.email, password: "pass" });
      expect(result).toHaveProperty("accessToken");
      expect(result).toHaveProperty("refreshToken");
      expect(jwtService.sign).toHaveBeenCalledTimes(2);
    });

    it("throws UnauthorizedException for unknown email", async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      await expect(service.login({ email: "x@y.com", password: "p" })).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it("throws UnauthorizedException for inactive user", async () => {
      prisma.user.findUnique.mockResolvedValue({ ...user, isActive: false });
      await expect(service.login({ email: user.email, password: "p" })).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it("throws UnauthorizedException for wrong password", async () => {
      prisma.user.findUnique.mockResolvedValue(user);
      (mockBcrypt.compare as jest.Mock).mockResolvedValue(false);
      await expect(service.login({ email: user.email, password: "wrong" })).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  describe("refreshTokens", () => {
    it("returns new token pair on valid refresh token", async () => {
      prisma.revokedToken.findUnique.mockResolvedValue(null);
      jwtService.verify.mockReturnValue({ sub: user.id, email: user.email, role: user.role, departmentId: user.departmentId });
      prisma.user.findUnique.mockResolvedValue(user);

      const result = await service.refreshTokens("valid-refresh");
      expect(result).toHaveProperty("accessToken");
      expect(result).toHaveProperty("refreshToken");
    });

    it("throws UnauthorizedException for revoked token", async () => {
      prisma.revokedToken.findUnique.mockResolvedValue({ token: "revoked" });
      await expect(service.refreshTokens("revoked")).rejects.toThrow(UnauthorizedException);
    });

    it("throws UnauthorizedException when user is inactive", async () => {
      prisma.revokedToken.findUnique.mockResolvedValue(null);
      jwtService.verify.mockReturnValue({ sub: user.id });
      prisma.user.findUnique.mockResolvedValue({ ...user, isActive: false });
      await expect(service.refreshTokens("token")).rejects.toThrow(UnauthorizedException);
    });
  });

  describe("getProfile", () => {
    it("returns user profile", async () => {
      const profile = { ...user };
      prisma.user.findUniqueOrThrow.mockResolvedValue(profile);
      expect(await service.getProfile("u1")).toEqual(profile);
    });
  });

  describe("logout", () => {
    it("revokes the refresh token", async () => {
      jwtService.verify.mockReturnValue({ sub: user.id, exp: Math.floor(Date.now() / 1000) + 3600 });
      prisma.revokedToken.create.mockResolvedValue({});
      prisma.revokedToken.deleteMany.mockResolvedValue({ count: 0 });

      await service.logout("u1", "refresh-token");
      expect(prisma.revokedToken.create).toHaveBeenCalled();
    });

    it("handles invalid token gracefully during logout", async () => {
      jwtService.verify.mockImplementation(() => { throw new Error("bad token"); });
      prisma.revokedToken.deleteMany.mockResolvedValue({ count: 0 });
      await expect(service.logout("u1", "expired-token")).resolves.not.toThrow();
    });
  });

  describe("changePassword", () => {
    it("changes password when current password is correct", async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue(user);
      (mockBcrypt.compare as jest.Mock).mockResolvedValue(true);
      (mockBcrypt.hash as jest.Mock).mockResolvedValue("$2b$12$newhash");
      prisma.user.update.mockResolvedValue(user);

      await service.changePassword("u1", { currentPassword: "old", newPassword: "new" });
      expect(prisma.user.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: { password: "$2b$12$newhash" } }),
      );
    });

    it("throws BadRequestException when current password is wrong", async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue(user);
      (mockBcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        service.changePassword("u1", { currentPassword: "wrong", newPassword: "new" }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe("hashPassword", () => {
    it("hashes a password with bcrypt", async () => {
      (mockBcrypt.hash as jest.Mock).mockResolvedValue("$2b$12$hashed");
      expect(await service.hashPassword("plain")).toBe("$2b$12$hashed");
    });
  });
});
