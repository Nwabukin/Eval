import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service.js";
import {
  EvaluationStatus,
  CalibrationMode,
  CycleStatus,
  UserRole,
} from "../../../generated/prisma/client.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
import type { PaginationMeta } from "../../common/interfaces/index.js";
import {
  normalizePagination,
  buildPaginationMeta,
} from "../../common/utils/index.js";
import { NotificationsService } from "../notifications/notifications.service.js";
import type {
  SaveSelfEvaluationDto,
  SaveManagerReviewDto,
  SaveDirectCalibrationDto,
  SaveIndividualCalibrationDto,
  QueryEvaluationsDto,
} from "./dto/index.js";

const EVALUATION_INCLUDE = {
  employee: { select: { id: true, firstName: true, lastName: true, email: true, departmentId: true } },
  cycle: { select: { id: true, name: true } },
  answers: {
    include: {
      question: {
        select: {
          id: true,
          text: true,
          category: true,
          weight: true,
          sortOrder: true,
          sheet: {
            select: { id: true, name: true, weight: true, minScore: true, maxScore: true, sortOrder: true },
          },
        },
      },
      calibrationIndividualScores: {
        include: { calibrator: { select: { id: true, firstName: true, lastName: true } } },
      },
    },
    orderBy: [
      { question: { sheet: { sortOrder: "asc" as const } } },
      { question: { sortOrder: "asc" as const } },
    ] as { question: { sheet?: { sortOrder: "asc" }; sortOrder?: "asc" } }[],
  },
};

@Injectable()
export class EvaluationsService {
  private readonly logger = new Logger(EvaluationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
    private readonly configService: ConfigService,
  ) {}

  // ─── Admin Endpoints ─────────────────────────────────────

  /**
   * Lists all evaluations with optional filters, search, and pagination.
   * Admin-only — used for the admin evaluation overview screen.
   */
  async findAll(query: QueryEvaluationsDto): Promise<{
    data: unknown[];
    meta: PaginationMeta;
  }> {
    const { page, limit, skip } = normalizePagination(query);

    const where: Record<string, unknown> = {
      ...(query.cycleId && { cycleId: query.cycleId }),
      ...(query.status && { status: query.status }),
      ...(query.departmentId && { employee: { departmentId: query.departmentId } }),
    };

    if (query.search) {
      where["employee"] = {
        ...(typeof where["employee"] === "object" ? (where["employee"] as Record<string, unknown>) : {}),
        OR: [
          { firstName: { contains: query.search, mode: "insensitive" } },
          { lastName: { contains: query.search, mode: "insensitive" } },
          { email: { contains: query.search, mode: "insensitive" } },
        ],
      };
    }

    const [evaluations, total] = await Promise.all([
      this.prisma.evaluation.findMany({
        where,
        include: EVALUATION_INCLUDE,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.evaluation.count({ where }),
    ]);

    return { data: evaluations, meta: buildPaginationMeta(total, page, limit) };
  }

  // ─── Employee Endpoints ──────────────────────────────────

  /**
   * Gets or creates the employee's evaluation for the active cycle.
   * Finds all sheets matching the employee's dept/level, then creates
   * answer rows for every question across all sheets.
   */
  async getMyEvaluation(user: AuthenticatedUser) {
    const activeCycle = await this.getActiveCycle();

    let evaluation = await this.prisma.evaluation.findUnique({
      where: { employeeId_cycleId: { employeeId: user.id, cycleId: activeCycle.id } },
      include: EVALUATION_INCLUDE,
    });

    if (!evaluation) {
      const employee = await this.prisma.user.findUniqueOrThrow({
        where: { id: user.id },
      });

      if (!employee.departmentId || !employee.levelId) {
        throw new BadRequestException("You must be assigned to a department and level");
      }

      const questions = await this.prisma.evaluationQuestion.findMany({
        where: {
          sheet: {
            cycleId: activeCycle.id,
            departmentId: employee.departmentId,
            levelId: employee.levelId,
          },
        },
      });

      evaluation = await this.prisma.evaluation.create({
        data: {
          employeeId: user.id,
          cycleId: activeCycle.id,
          answers: {
            create: questions.map((q: { id: string }) => ({ questionId: q.id })),
          },
        },
        include: EVALUATION_INCLUDE,
      });
    }

    return evaluation;
  }

  /** Saves self scores/remarks as a draft without submitting. */
  async saveSelfEvaluation(evalId: string, userId: string, dto: SaveSelfEvaluationDto) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertOwner(evaluation.employeeId, userId);
    this.assertStatus(evaluation, EvaluationStatus.DRAFT);

    await this.validateScoreRanges(dto.answers.map((a) => ({ questionId: a.questionId, score: a.score })));

    await Promise.all(
      dto.answers.map((a) =>
        this.prisma.evaluationAnswer.update({
          where: { evaluationId_questionId: { evaluationId: evalId, questionId: a.questionId } },
          data: { selfScore: a.score, selfRemarks: a.remarks },
        }),
      ),
    );

    return this.prisma.evaluation.findUniqueOrThrow({
      where: { id: evalId },
      include: EVALUATION_INCLUDE,
    });
  }

  /** Submits self-evaluation — locks employee inputs, transitions to SUBMITTED_TO_MANAGER. */
  async submitSelfEvaluation(evalId: string, userId: string) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertOwner(evaluation.employeeId, userId);
    this.assertStatus(evaluation, EvaluationStatus.DRAFT);

    const updated = await this.prisma.evaluation.update({
      where: { id: evalId },
      data: {
        status: EvaluationStatus.SUBMITTED_TO_MANAGER,
        submittedAt: new Date(),
      },
      include: EVALUATION_INCLUDE,
    });

    this.notifyManagerOfSelfSubmission(updated.employeeId, evalId).catch(
      (err: unknown) => this.logger.error("Failed to notify manager of self-evaluation submission", err),
    );

    return updated;
  }

  // ─── Line Manager Endpoints ──────────────────────────────

  /** Lists evaluations pending manager review for the manager's department. */
  async getPendingReviews(managerId: string) {
    const manager = await this.prisma.user.findUniqueOrThrow({ where: { id: managerId } });

    return this.prisma.evaluation.findMany({
      where: {
        status: EvaluationStatus.SUBMITTED_TO_MANAGER,
        employee: {
          lineManagerId: managerId,
          ...(manager.departmentId && { departmentId: manager.departmentId }),
        },
      },
      include: EVALUATION_INCLUDE,
      orderBy: { submittedAt: "asc" },
    });
  }

  /**
   * Lists all evaluations for a manager's direct reports across all statuses.
   * Used for the line manager "All evaluations" view.
   */
  async getManagerEvaluations(managerId: string) {
    const manager = await this.prisma.user.findUniqueOrThrow({ where: { id: managerId } });

    return this.prisma.evaluation.findMany({
      where: {
        employee: {
          lineManagerId: managerId,
          ...(manager.departmentId && { departmentId: manager.departmentId }),
        },
      },
      include: EVALUATION_INCLUDE,
      orderBy: { createdAt: "desc" },
    });
  }

  /** Saves manager scores/remarks without submitting. */
  async saveManagerReview(evalId: string, managerId: string, dto: SaveManagerReviewDto) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_MANAGER);
    await this.assertManager(evaluation.employeeId, managerId);

    await this.validateScoreRanges(dto.answers.map((a) => ({ questionId: a.questionId, score: a.score })));

    await Promise.all(
      dto.answers.map((a) =>
        this.prisma.evaluationAnswer.update({
          where: { evaluationId_questionId: { evaluationId: evalId, questionId: a.questionId } },
          data: { managerScore: a.score, managerRemarks: a.remarks },
        }),
      ),
    );

    return this.prisma.evaluation.findUniqueOrThrow({
      where: { id: evalId },
      include: EVALUATION_INCLUDE,
    });
  }

  /** Submits manager review — locks manager inputs, transitions to SUBMITTED_TO_CALIBRATION. */
  async submitManagerReview(evalId: string, managerId: string) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_MANAGER);
    await this.assertManager(evaluation.employeeId, managerId);

    const updated = await this.prisma.evaluation.update({
      where: { id: evalId },
      data: {
        status: EvaluationStatus.SUBMITTED_TO_CALIBRATION,
        managerSubmittedAt: new Date(),
      },
      include: EVALUATION_INCLUDE,
    });

    this.notifyCalibrationTeamOfManagerSubmission(
      updated.cycleId,
      updated.employeeId,
      evalId,
    ).catch((err: unknown) =>
      this.logger.error("Failed to notify calibration team of manager submission", err),
    );

    return updated;
  }

  // ─── Calibration Endpoints ───────────────────────────────

  /** Lists evaluations pending calibration (only for assigned cycle members). */
  async getPendingCalibrations(calibratorId: string) {
    const memberships = await this.prisma.cycleCalibrationMember.findMany({
      where: { userId: calibratorId },
      select: { cycleId: true },
    });
    const cycleIds = memberships.map((m: { cycleId: string }) => m.cycleId);

    return this.prisma.evaluation.findMany({
      where: {
        status: EvaluationStatus.SUBMITTED_TO_CALIBRATION,
        cycleId: { in: cycleIds },
      },
      include: EVALUATION_INCLUDE,
      orderBy: { managerSubmittedAt: "asc" },
    });
  }

  /** Sets the calibration mode (INDIVIDUAL_AGGREGATE or DIRECT_TEAM) for an evaluation. */
  async setCalibrationMode(evalId: string, calibratorId: string, mode: CalibrationMode) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_CALIBRATION);
    await this.assertCalibrator(evaluation.cycleId, calibratorId);

    return this.prisma.evaluation.update({
      where: { id: evalId },
      data: { calibrationMode: mode },
      include: EVALUATION_INCLUDE,
    });
  }

  /** Saves direct team final scores (DIRECT_TEAM mode). */
  async saveDirectCalibration(evalId: string, calibratorId: string, dto: SaveDirectCalibrationDto) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_CALIBRATION);
    this.assertCalibrationMode(evaluation.calibrationMode, CalibrationMode.DIRECT_TEAM);
    await this.assertCalibrator(evaluation.cycleId, calibratorId);

    await this.validateScoreRanges(dto.answers.map((a) => ({ questionId: a.questionId, score: a.finalScore })));

    await Promise.all(
      dto.answers.map((a) =>
        this.prisma.evaluationAnswer.update({
          where: { evaluationId_questionId: { evaluationId: evalId, questionId: a.questionId } },
          data: { finalScore: a.finalScore },
        }),
      ),
    );

    return this.prisma.evaluation.findUniqueOrThrow({
      where: { id: evalId },
      include: EVALUATION_INCLUDE,
    });
  }

  /** Saves current calibrator's individual scores (INDIVIDUAL_AGGREGATE mode). */
  async saveIndividualCalibration(
    evalId: string,
    calibratorId: string,
    dto: SaveIndividualCalibrationDto,
  ) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_CALIBRATION);
    this.assertCalibrationMode(evaluation.calibrationMode, CalibrationMode.INDIVIDUAL_AGGREGATE);
    await this.assertCalibrator(evaluation.cycleId, calibratorId);

    await this.validateScoreRanges(dto.answers.map((a) => ({ questionId: a.questionId, score: a.score })));

    for (const item of dto.answers) {
      const answer = await this.prisma.evaluationAnswer.findUniqueOrThrow({
        where: { evaluationId_questionId: { evaluationId: evalId, questionId: item.questionId } },
      });

      await this.prisma.calibrationIndividualScore.upsert({
        where: { answerId_calibratorId: { answerId: answer.id, calibratorId } },
        create: { answerId: answer.id, calibratorId, score: item.score },
        update: { score: item.score, scoredAt: new Date() },
      });
    }

    return this.prisma.evaluation.findUniqueOrThrow({
      where: { id: evalId },
      include: EVALUATION_INCLUDE,
    });
  }

  /** Returns all individual calibration scores and computed aggregates. */
  async getCalibrationScores(evalId: string, calibratorId: string) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    await this.assertCalibrator(evaluation.cycleId, calibratorId);

    const answers = await this.prisma.evaluationAnswer.findMany({
      where: { evaluationId: evalId },
      include: {
        question: {
          select: {
            id: true,
            text: true,
            sheet: { select: { id: true, name: true, minScore: true, maxScore: true } },
          },
        },
        calibrationIndividualScores: {
          include: { calibrator: { select: { id: true, firstName: true, lastName: true } } },
        },
      },
    });

    return answers.map((a: typeof answers[number]) => {
      const scores = a.calibrationIndividualScores.map((s: { score: number }) => s.score);
      const aggregate = scores.length > 0
        ? Math.round(scores.reduce((sum: number, s: number) => sum + s, 0) / scores.length)
        : null;

      return {
        questionId: a.questionId,
        questionText: a.question.text,
        sheet: a.question.sheet,
        individualScores: a.calibrationIndividualScores,
        aggregate,
      };
    });
  }

  /**
   * Finalizes an evaluation — computes aggregates if INDIVIDUAL_AGGREGATE mode,
   * locks all scores, transitions to FINALIZED.
   */
  async finalize(evalId: string, calibratorId: string) {
    const evaluation = await this.getEvaluationOrThrow(evalId);
    this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_CALIBRATION);
    await this.assertCalibrator(evaluation.cycleId, calibratorId);

    if (evaluation.calibrationMode === CalibrationMode.INDIVIDUAL_AGGREGATE) {
      const answers = await this.prisma.evaluationAnswer.findMany({
        where: { evaluationId: evalId },
        include: { calibrationIndividualScores: true },
      });

      await Promise.all(
        answers.map((a: typeof answers[number]) => {
          const scores = a.calibrationIndividualScores.map((s: { score: number }) => s.score);
          if (scores.length === 0) {
            throw new BadRequestException(
              `No individual scores submitted for question — cannot finalize`,
            );
          }
          const aggregate = Math.round(
            scores.reduce((sum: number, s: number) => sum + s, 0) / scores.length,
          );
          return this.prisma.evaluationAnswer.update({
            where: { id: a.id },
            data: { finalScore: aggregate },
          });
        }),
      );
    }

    const finalized = await this.prisma.evaluation.update({
      where: { id: evalId },
      data: {
        status: EvaluationStatus.FINALIZED,
        finalizedAt: new Date(),
      },
      include: EVALUATION_INCLUDE,
    });

    this.notifyFinalization(finalized.employeeId, evalId).catch((err: unknown) =>
      this.logger.error("Failed to send finalization notifications", err),
    );

    return finalized;
  }

  // ─── Shared ──────────────────────────────────────────────

  /**
   * Gets evaluation detail with role-based visibility.
   * Employees can only see their own; managers only their direct reports';
   * calibrators only evaluations from their assigned cycles; admins see all.
   */
  async getEvaluationDetail(evalId: string, user: AuthenticatedUser) {
    const evaluation = await this.prisma.evaluation.findUniqueOrThrow({
      where: { id: evalId },
      include: EVALUATION_INCLUDE,
    });

    switch (user.role) {
      case UserRole.ADMIN:
        break;

      case UserRole.EMPLOYEE:
        if (evaluation.employeeId !== user.id) {
          throw new ForbiddenException("You can only view your own evaluation");
        }
        break;

      case UserRole.LINE_MANAGER: {
        const employee = await this.prisma.user.findUniqueOrThrow({
          where: { id: evaluation.employeeId },
        });
        if (employee.lineManagerId !== user.id) {
          throw new ForbiddenException("You can only view your direct reports' evaluations");
        }
        break;
      }

      case UserRole.CALIBRATION: {
        await this.assertCalibrator(evaluation.cycleId, user.id);
        break;
      }

      default:
        throw new ForbiddenException("Insufficient permissions");
    }

    return evaluation;
  }

  // ─── Private Helpers ─────────────────────────────────────

  private async getActiveCycle() {
    const cycle = await this.prisma.evaluationCycle.findFirst({
      where: { status: CycleStatus.OPEN },
      orderBy: { createdAt: "desc" },
    });
    if (!cycle) throw new NotFoundException("No active evaluation cycle");
    return cycle;
  }

  private async getEvaluationOrThrow(id: string) {
    const evaluation = await this.prisma.evaluation.findUnique({ where: { id } });
    if (!evaluation) throw new NotFoundException("Evaluation not found");
    return evaluation;
  }

  /**
   * Batch-validates that each score falls within its question's sheet score range.
   * Fetches all referenced questions in one query for efficiency.
   */
  private async validateScoreRanges(items: { questionId: string; score: number }[]): Promise<void> {
    if (items.length === 0) return;

    const questionIds = [...new Set(items.map((i) => i.questionId))];
    const questions = await this.prisma.evaluationQuestion.findMany({
      where: { id: { in: questionIds } },
      select: { id: true, sheet: { select: { minScore: true, maxScore: true } } },
    });

    const questionMap = new Map<string, { minScore: number; maxScore: number }>(
      questions.map((q: { id: string; sheet: { minScore: number; maxScore: number } }) => [q.id, q.sheet]),
    );

    for (const item of items) {
      const sheet = questionMap.get(item.questionId);
      if (!sheet) {
        throw new BadRequestException(`Question ${item.questionId} not found`);
      }
      if (item.score < sheet.minScore || item.score > sheet.maxScore) {
        throw new BadRequestException(
          `Score ${item.score} out of range [${sheet.minScore}-${sheet.maxScore}] for question ${item.questionId}`,
        );
      }
    }
  }

  private assertOwner(employeeId: string, userId: string): void {
    if (employeeId !== userId) {
      throw new ForbiddenException("You can only modify your own evaluation");
    }
  }

  private assertStatus(
    evaluation: { status: EvaluationStatus },
    expected: EvaluationStatus,
  ): void {
    if (evaluation.status !== expected) {
      throw new BadRequestException(
        `Evaluation status must be ${expected}, currently ${evaluation.status}`,
      );
    }
  }

  private assertCalibrationMode(
    current: CalibrationMode | null,
    expected: CalibrationMode,
  ): void {
    if (current !== expected) {
      throw new BadRequestException(
        `Calibration mode must be set to ${expected} first`,
      );
    }
  }

  private async assertManager(employeeId: string, managerId: string): Promise<void> {
    const employee = await this.prisma.user.findUniqueOrThrow({
      where: { id: employeeId },
    });
    if (employee.lineManagerId !== managerId) {
      throw new ForbiddenException("You are not this employee's line manager");
    }
  }

  private async assertCalibrator(cycleId: string, userId: string): Promise<void> {
    const membership = await this.prisma.cycleCalibrationMember.findUnique({
      where: { cycleId_userId: { cycleId, userId } },
    });
    if (!membership) {
      throw new ForbiddenException("You are not assigned to calibrate this cycle");
    }
  }

  // ─── Notification Helpers ─────────────────────────────────

  private get frontendUrl(): string {
    return this.configService.getOrThrow<string>("FRONTEND_URL");
  }

  private async notifyManagerOfSelfSubmission(employeeId: string, evalId: string): Promise<void> {
    const employee = await this.prisma.user.findUniqueOrThrow({
      where: { id: employeeId },
      include: { lineManager: { select: { email: true } } },
    });

    if (!employee.lineManager) return;

    await this.notificationsService.notifySelfEvaluationSubmitted(
      employee.lineManager.email,
      `${employee.firstName} ${employee.lastName}`,
      `${this.frontendUrl}/evaluations/${evalId}/review`,
    );
  }

  private async notifyCalibrationTeamOfManagerSubmission(
    cycleId: string,
    employeeId: string,
    evalId: string,
  ): Promise<void> {
    const [members, employee] = await Promise.all([
      this.prisma.cycleCalibrationMember.findMany({
        where: { cycleId },
        include: { user: { select: { email: true } } },
      }),
      this.prisma.user.findUniqueOrThrow({
        where: { id: employeeId },
        include: { department: { select: { name: true } } },
      }),
    ]);

    if (members.length === 0) return;

    const emails = members.map((m: (typeof members)[number]) => m.user.email);
    await this.notificationsService.notifyManagerReviewSubmitted(
      emails,
      `${employee.firstName} ${employee.lastName}`,
      employee.department?.name ?? "Unknown",
      `${this.frontendUrl}/evaluations/${evalId}/calibrate`,
    );
  }

  private async notifyFinalization(employeeId: string, evalId: string): Promise<void> {
    const employee = await this.prisma.user.findUniqueOrThrow({
      where: { id: employeeId },
      include: { lineManager: { select: { email: true } } },
    });

    if (!employee.lineManager) return;

    await this.notificationsService.notifyEvaluationFinalized(
      employee.email,
      employee.lineManager.email,
      `${employee.firstName} ${employee.lastName}`,
      `${this.frontendUrl}/evaluations/${evalId}`,
    );
  }
}
