import { Test, TestingModule } from "@nestjs/testing";
import {
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EvaluationsService } from "./evaluations.service.js";
import { PrismaService } from "../../database/prisma.service.js";
import { NotificationsService } from "../notifications/notifications.service.js";

const activeCycle = {
  id: "c1",
  name: "Q1 2026",
  status: "OPEN",
  startDate: new Date("2026-01-01"),
  endDate: new Date("2026-03-31"),
};

const employee = {
  id: "emp1",
  email: "alice@eval.local",
  firstName: "Alice",
  lastName: "Smith",
  role: "EMPLOYEE",
  isActive: true,
  departmentId: "d1",
  levelId: "l1",
  lineManagerId: "mgr1",
  lineManager: { email: "mgr@eval.local" },
  department: { name: "Engineering" },
};

const evaluation = {
  id: "ev1",
  employeeId: "emp1",
  cycleId: "c1",
  status: "DRAFT" as const,
  calibrationMode: null,
  submittedAt: null,
  managerSubmittedAt: null,
  finalizedAt: null,
  employee: { id: "emp1", firstName: "Alice", lastName: "Smith", email: "alice@eval.local", departmentId: "d1" },
  cycle: { id: "c1", name: "Q1 2026" },
  answers: [],
};

const answer = {
  id: "a1",
  evaluationId: "ev1",
  questionId: "q1",
  selfScore: null,
  selfRemarks: null,
  managerScore: null,
  managerRemarks: null,
  finalScore: null,
};

const questionWithSheet = {
  id: "q1",
  sheet: { minScore: 1, maxScore: 10 },
};

describe("EvaluationsService", () => {
  let service: EvaluationsService;

  const prisma = {
    evaluationCycle: { findFirst: jest.fn() },
    evaluation: {
      findUnique: jest.fn(),
      findUniqueOrThrow: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      count: jest.fn(),
    },
    evaluationAnswer: {
      update: jest.fn(),
      findMany: jest.fn(),
      findUniqueOrThrow: jest.fn(),
    },
    evaluationQuestion: { findMany: jest.fn() },
    user: { findUniqueOrThrow: jest.fn() },
    cycleCalibrationMember: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
    calibrationIndividualScore: { upsert: jest.fn() },
  };

  const notifications = {
    notifySelfEvaluationSubmitted: jest.fn().mockResolvedValue(undefined),
    notifyManagerReviewSubmitted: jest.fn().mockResolvedValue(undefined),
    notifyEvaluationFinalized: jest.fn().mockResolvedValue(undefined),
  };

  const config = {
    getOrThrow: jest.fn().mockReturnValue("http://localhost:3001"),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluationsService,
        { provide: PrismaService, useValue: prisma },
        { provide: NotificationsService, useValue: notifications },
        { provide: ConfigService, useValue: config },
      ],
    }).compile();
    service = mod.get(EvaluationsService);
  });

  // ── Admin ────────────────────────────────────────────────

  describe("findAll", () => {
    it("returns paginated evaluations", async () => {
      prisma.evaluation.findMany.mockResolvedValue([evaluation]);
      prisma.evaluation.count.mockResolvedValue(1);

      const result = await service.findAll({ page: 1, limit: 20 });
      expect(result.data).toHaveLength(1);
      expect(result.meta.total).toBe(1);
    });
  });

  // ── Employee ─────────────────────────────────────────────

  describe("getMyEvaluation", () => {
    it("returns existing evaluation", async () => {
      prisma.evaluationCycle.findFirst.mockResolvedValue(activeCycle);
      prisma.evaluation.findUnique.mockResolvedValue(evaluation);

      const result = await service.getMyEvaluation({ id: "emp1", email: "a@e.com", role: "EMPLOYEE" as any, departmentId: "d1" });
      expect(result.id).toBe("ev1");
    });

    it("creates new evaluation if none exists", async () => {
      prisma.evaluationCycle.findFirst.mockResolvedValue(activeCycle);
      prisma.evaluation.findUnique.mockResolvedValue(null);
      prisma.user.findUniqueOrThrow.mockResolvedValue(employee);
      prisma.evaluationQuestion.findMany.mockResolvedValue([{ id: "q1" }]);
      prisma.evaluation.create.mockResolvedValue(evaluation);

      const result = await service.getMyEvaluation({ id: "emp1", email: "a@e.com", role: "EMPLOYEE" as any, departmentId: "d1" });
      expect(result).toEqual(evaluation);
    });

    it("throws NotFoundException when no active cycle", async () => {
      prisma.evaluationCycle.findFirst.mockResolvedValue(null);
      await expect(
        service.getMyEvaluation({ id: "emp1", email: "a@e.com", role: "EMPLOYEE" as any, departmentId: "d1" }),
      ).rejects.toThrow(NotFoundException);
    });

    it("throws BadRequestException when employee has no department/level", async () => {
      prisma.evaluationCycle.findFirst.mockResolvedValue(activeCycle);
      prisma.evaluation.findUnique.mockResolvedValue(null);
      prisma.user.findUniqueOrThrow.mockResolvedValue({ ...employee, departmentId: null, levelId: null });

      await expect(
        service.getMyEvaluation({ id: "emp1", email: "a@e.com", role: "EMPLOYEE" as any, departmentId: null }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe("saveSelfEvaluation", () => {
    it("saves self scores as draft", async () => {
      prisma.evaluation.findUnique.mockResolvedValue(evaluation);
      prisma.evaluationQuestion.findMany.mockResolvedValue([questionWithSheet]);
      prisma.evaluationAnswer.update.mockResolvedValue(answer);
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);

      const result = await service.saveSelfEvaluation("ev1", "emp1", {
        answers: [{ questionId: "q1", score: 7, remarks: "Good" }],
      });
      expect(result).toBeDefined();
    });

    it("throws ForbiddenException when not the owner", async () => {
      prisma.evaluation.findUnique.mockResolvedValue(evaluation);
      await expect(
        service.saveSelfEvaluation("ev1", "other-user", { answers: [] }),
      ).rejects.toThrow(ForbiddenException);
    });

    it("throws BadRequestException when status is not DRAFT", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({ ...evaluation, status: "SUBMITTED_TO_MANAGER" });
      await expect(
        service.saveSelfEvaluation("ev1", "emp1", { answers: [] }),
      ).rejects.toThrow(BadRequestException);
    });

    it("throws BadRequestException when score is out of range", async () => {
      prisma.evaluation.findUnique.mockResolvedValue(evaluation);
      prisma.evaluationQuestion.findMany.mockResolvedValue([questionWithSheet]);

      await expect(
        service.saveSelfEvaluation("ev1", "emp1", {
          answers: [{ questionId: "q1", score: 15 }],
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe("submitSelfEvaluation", () => {
    it("transitions to SUBMITTED_TO_MANAGER", async () => {
      prisma.evaluation.findUnique.mockResolvedValue(evaluation);
      const submitted = { ...evaluation, status: "SUBMITTED_TO_MANAGER", submittedAt: new Date() };
      prisma.evaluation.update.mockResolvedValue(submitted);
      prisma.user.findUniqueOrThrow.mockResolvedValue(employee);

      const result = await service.submitSelfEvaluation("ev1", "emp1");
      expect(result.status).toBe("SUBMITTED_TO_MANAGER");
    });

    it("rejects non-owner", async () => {
      prisma.evaluation.findUnique.mockResolvedValue(evaluation);
      await expect(service.submitSelfEvaluation("ev1", "other")).rejects.toThrow(ForbiddenException);
    });
  });

  // ── Line Manager ─────────────────────────────────────────

  describe("getPendingReviews", () => {
    it("returns evaluations pending manager review", async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({ id: "mgr1", departmentId: "d1" });
      prisma.evaluation.findMany.mockResolvedValue([
        { ...evaluation, status: "SUBMITTED_TO_MANAGER" },
      ]);

      const result = await service.getPendingReviews("mgr1");
      expect(result).toHaveLength(1);
    });
  });

  describe("saveManagerReview", () => {
    it("saves manager scores", async () => {
      const submitted = { ...evaluation, status: "SUBMITTED_TO_MANAGER" };
      prisma.evaluation.findUnique.mockResolvedValue(submitted);
      prisma.user.findUniqueOrThrow.mockResolvedValue({ ...employee, lineManagerId: "mgr1" });
      prisma.evaluationQuestion.findMany.mockResolvedValue([questionWithSheet]);
      prisma.evaluationAnswer.update.mockResolvedValue(answer);
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(submitted);

      const result = await service.saveManagerReview("ev1", "mgr1", {
        answers: [{ questionId: "q1", score: 8 }],
      });
      expect(result).toBeDefined();
    });

    it("throws ForbiddenException when not the line manager", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({ ...evaluation, status: "SUBMITTED_TO_MANAGER" });
      prisma.user.findUniqueOrThrow.mockResolvedValue({ ...employee, lineManagerId: "other-mgr" });

      await expect(
        service.saveManagerReview("ev1", "mgr1", { answers: [] }),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe("submitManagerReview", () => {
    it("transitions to SUBMITTED_TO_CALIBRATION", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({ ...evaluation, status: "SUBMITTED_TO_MANAGER" });
      prisma.user.findUniqueOrThrow.mockResolvedValue({ ...employee, lineManagerId: "mgr1" });
      const updated = { ...evaluation, status: "SUBMITTED_TO_CALIBRATION", managerSubmittedAt: new Date(), cycleId: "c1", employeeId: "emp1" };
      prisma.evaluation.update.mockResolvedValue(updated);
      prisma.cycleCalibrationMember.findMany.mockResolvedValue([]);

      const result = await service.submitManagerReview("ev1", "mgr1");
      expect(result.status).toBe("SUBMITTED_TO_CALIBRATION");
    });
  });

  // ── Calibration ──────────────────────────────────────────

  describe("getPendingCalibrations", () => {
    it("returns evaluations for assigned cycles", async () => {
      prisma.cycleCalibrationMember.findMany.mockResolvedValue([{ cycleId: "c1" }]);
      prisma.evaluation.findMany.mockResolvedValue([
        { ...evaluation, status: "SUBMITTED_TO_CALIBRATION" },
      ]);
      const result = await service.getPendingCalibrations("cal1");
      expect(result).toHaveLength(1);
    });
  });

  describe("setCalibrationMode", () => {
    it("sets calibration mode on a submitted evaluation", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
      });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      prisma.evaluation.update.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
        calibrationMode: "DIRECT_TEAM",
      });

      const result = await service.setCalibrationMode("ev1", "cal1", "DIRECT_TEAM" as any);
      expect(result.calibrationMode).toBe("DIRECT_TEAM");
    });
  });

  describe("saveDirectCalibration", () => {
    it("saves final scores in DIRECT_TEAM mode", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
        calibrationMode: "DIRECT_TEAM",
      });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      prisma.evaluationQuestion.findMany.mockResolvedValue([questionWithSheet]);
      prisma.evaluationAnswer.update.mockResolvedValue(answer);
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);

      const result = await service.saveDirectCalibration("ev1", "cal1", {
        answers: [{ questionId: "q1", finalScore: 8 }],
      });
      expect(result).toBeDefined();
    });

    it("throws when mode is not DIRECT_TEAM", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
        calibrationMode: "INDIVIDUAL_AGGREGATE",
      });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });

      await expect(
        service.saveDirectCalibration("ev1", "cal1", { answers: [] }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe("saveIndividualCalibration", () => {
    it("upserts individual calibrator scores", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
        calibrationMode: "INDIVIDUAL_AGGREGATE",
      });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      prisma.evaluationQuestion.findMany.mockResolvedValue([questionWithSheet]);
      prisma.evaluationAnswer.findUniqueOrThrow.mockResolvedValue(answer);
      prisma.calibrationIndividualScore.upsert.mockResolvedValue({});
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);

      const result = await service.saveIndividualCalibration("ev1", "cal1", {
        answers: [{ questionId: "q1", score: 7 }],
      });
      expect(result).toBeDefined();
    });
  });

  describe("getCalibrationScores", () => {
    it("returns scores with aggregates", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({ ...evaluation, status: "SUBMITTED_TO_CALIBRATION", cycleId: "c1" });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      prisma.evaluationAnswer.findMany.mockResolvedValue([
        {
          questionId: "q1",
          question: { id: "q1", text: "Teamwork", sheet: { id: "s1", name: "GENERAL", minScore: 1, maxScore: 10 } },
          calibrationIndividualScores: [
            { score: 7, calibrator: { id: "cal1", firstName: "Cal", lastName: "One" } },
            { score: 9, calibrator: { id: "cal2", firstName: "Cal", lastName: "Two" } },
          ],
        },
      ]);

      const result = await service.getCalibrationScores("ev1", "cal1");
      expect(result).toHaveLength(1);
      expect(result[0]!.aggregate).toBe(8); // avg of 7 and 9
    });
  });

  describe("finalize", () => {
    it("finalizes with DIRECT_TEAM mode", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
        calibrationMode: "DIRECT_TEAM",
      });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      const finalized = {
        ...evaluation,
        status: "FINALIZED",
        finalizedAt: new Date(),
        employeeId: "emp1",
      };
      prisma.evaluation.update.mockResolvedValue(finalized);
      prisma.user.findUniqueOrThrow.mockResolvedValue(employee);

      const result = await service.finalize("ev1", "cal1");
      expect(result.status).toBe("FINALIZED");
    });

    it("computes aggregates when INDIVIDUAL_AGGREGATE mode", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
        calibrationMode: "INDIVIDUAL_AGGREGATE",
      });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      prisma.evaluationAnswer.findMany.mockResolvedValue([
        {
          id: "a1",
          calibrationIndividualScores: [{ score: 6 }, { score: 8 }],
        },
      ]);
      prisma.evaluationAnswer.update.mockResolvedValue({});
      const finalized = { ...evaluation, status: "FINALIZED", finalizedAt: new Date(), employeeId: "emp1" };
      prisma.evaluation.update.mockResolvedValue(finalized);
      prisma.user.findUniqueOrThrow.mockResolvedValue(employee);

      const result = await service.finalize("ev1", "cal1");
      expect(result.status).toBe("FINALIZED");
      expect(prisma.evaluationAnswer.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: { finalScore: 7 } }),
      );
    });

    it("throws when no individual scores exist for INDIVIDUAL_AGGREGATE", async () => {
      prisma.evaluation.findUnique.mockResolvedValue({
        ...evaluation,
        status: "SUBMITTED_TO_CALIBRATION",
        calibrationMode: "INDIVIDUAL_AGGREGATE",
      });
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      prisma.evaluationAnswer.findMany.mockResolvedValue([
        { id: "a1", calibrationIndividualScores: [] },
      ]);

      await expect(service.finalize("ev1", "cal1")).rejects.toThrow(BadRequestException);
    });
  });

  // ── Shared ───────────────────────────────────────────────

  describe("getEvaluationDetail", () => {
    it("allows admin to view any evaluation", async () => {
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);
      const result = await service.getEvaluationDetail("ev1", {
        id: "admin1", email: "admin@e.com", role: "ADMIN" as any, departmentId: null,
      });
      expect(result).toBeDefined();
    });

    it("allows employee to view their own evaluation", async () => {
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);
      const result = await service.getEvaluationDetail("ev1", {
        id: "emp1", email: "a@e.com", role: "EMPLOYEE" as any, departmentId: "d1",
      });
      expect(result).toBeDefined();
    });

    it("throws ForbiddenException when employee views another's evaluation", async () => {
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);
      await expect(
        service.getEvaluationDetail("ev1", {
          id: "other", email: "o@e.com", role: "EMPLOYEE" as any, departmentId: "d1",
        }),
      ).rejects.toThrow(ForbiddenException);
    });

    it("allows line manager to view direct report's evaluation", async () => {
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);
      prisma.user.findUniqueOrThrow.mockResolvedValue({ ...employee, lineManagerId: "mgr1" });
      const result = await service.getEvaluationDetail("ev1", {
        id: "mgr1", email: "m@e.com", role: "LINE_MANAGER" as any, departmentId: "d1",
      });
      expect(result).toBeDefined();
    });

    it("throws ForbiddenException when manager views non-report's evaluation", async () => {
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);
      prisma.user.findUniqueOrThrow.mockResolvedValue({ ...employee, lineManagerId: "other-mgr" });
      await expect(
        service.getEvaluationDetail("ev1", {
          id: "mgr1", email: "m@e.com", role: "LINE_MANAGER" as any, departmentId: "d1",
        }),
      ).rejects.toThrow(ForbiddenException);
    });

    it("allows calibrator assigned to the cycle", async () => {
      prisma.evaluation.findUniqueOrThrow.mockResolvedValue(evaluation);
      prisma.cycleCalibrationMember.findUnique.mockResolvedValue({ id: "m1" });
      const result = await service.getEvaluationDetail("ev1", {
        id: "cal1", email: "c@e.com", role: "CALIBRATION" as any, departmentId: null,
      });
      expect(result).toBeDefined();
    });
  });
});
