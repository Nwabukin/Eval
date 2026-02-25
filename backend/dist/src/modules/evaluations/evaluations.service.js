var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EvaluationsService_1;
import { Injectable, NotFoundException, ForbiddenException, BadRequestException, Logger, } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service.js";
import { EvaluationStatus, CalibrationMode, CycleStatus, UserRole, } from "../../../generated/prisma/client.js";
import { normalizePagination, buildPaginationMeta, } from "../../common/utils/index.js";
import { NotificationsService } from "../notifications/notifications.service.js";
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
            { question: { sheet: { sortOrder: "asc" } } },
            { question: { sortOrder: "asc" } },
        ],
    },
};
let EvaluationsService = EvaluationsService_1 = class EvaluationsService {
    prisma;
    notificationsService;
    configService;
    logger = new Logger(EvaluationsService_1.name);
    constructor(prisma, notificationsService, configService) {
        this.prisma = prisma;
        this.notificationsService = notificationsService;
        this.configService = configService;
    }
    async findAll(query) {
        const { page, limit, skip } = normalizePagination(query);
        const where = {
            ...(query.cycleId && { cycleId: query.cycleId }),
            ...(query.status && { status: query.status }),
            ...(query.departmentId && { employee: { departmentId: query.departmentId } }),
        };
        if (query.search) {
            where["employee"] = {
                ...(typeof where["employee"] === "object" ? where["employee"] : {}),
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
    async getMyEvaluation(user) {
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
                        create: questions.map((q) => ({ questionId: q.id })),
                    },
                },
                include: EVALUATION_INCLUDE,
            });
        }
        return evaluation;
    }
    async saveSelfEvaluation(evalId, userId, dto) {
        const evaluation = await this.getEvaluationOrThrow(evalId);
        this.assertOwner(evaluation.employeeId, userId);
        this.assertStatus(evaluation, EvaluationStatus.DRAFT);
        await this.validateScoreRanges(dto.answers.map((a) => ({ questionId: a.questionId, score: a.score })));
        await Promise.all(dto.answers.map((a) => this.prisma.evaluationAnswer.update({
            where: { evaluationId_questionId: { evaluationId: evalId, questionId: a.questionId } },
            data: { selfScore: a.score, selfRemarks: a.remarks },
        })));
        return this.prisma.evaluation.findUniqueOrThrow({
            where: { id: evalId },
            include: EVALUATION_INCLUDE,
        });
    }
    async submitSelfEvaluation(evalId, userId) {
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
        this.notifyManagerOfSelfSubmission(updated.employeeId, evalId).catch((err) => this.logger.error("Failed to notify manager of self-evaluation submission", err));
        return updated;
    }
    async getPendingReviews(managerId) {
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
    async getManagerEvaluations(managerId) {
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
    async saveManagerReview(evalId, managerId, dto) {
        const evaluation = await this.getEvaluationOrThrow(evalId);
        this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_MANAGER);
        await this.assertManager(evaluation.employeeId, managerId);
        await this.validateScoreRanges(dto.answers.map((a) => ({ questionId: a.questionId, score: a.score })));
        await Promise.all(dto.answers.map((a) => this.prisma.evaluationAnswer.update({
            where: { evaluationId_questionId: { evaluationId: evalId, questionId: a.questionId } },
            data: { managerScore: a.score, managerRemarks: a.remarks },
        })));
        return this.prisma.evaluation.findUniqueOrThrow({
            where: { id: evalId },
            include: EVALUATION_INCLUDE,
        });
    }
    async submitManagerReview(evalId, managerId) {
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
        this.notifyCalibrationTeamOfManagerSubmission(updated.cycleId, updated.employeeId, evalId).catch((err) => this.logger.error("Failed to notify calibration team of manager submission", err));
        return updated;
    }
    async getPendingCalibrations(calibratorId) {
        const memberships = await this.prisma.cycleCalibrationMember.findMany({
            where: { userId: calibratorId },
            select: { cycleId: true },
        });
        const cycleIds = memberships.map((m) => m.cycleId);
        return this.prisma.evaluation.findMany({
            where: {
                status: EvaluationStatus.SUBMITTED_TO_CALIBRATION,
                cycleId: { in: cycleIds },
            },
            include: EVALUATION_INCLUDE,
            orderBy: { managerSubmittedAt: "asc" },
        });
    }
    async setCalibrationMode(evalId, calibratorId, mode) {
        const evaluation = await this.getEvaluationOrThrow(evalId);
        this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_CALIBRATION);
        await this.assertCalibrator(evaluation.cycleId, calibratorId);
        return this.prisma.evaluation.update({
            where: { id: evalId },
            data: { calibrationMode: mode },
            include: EVALUATION_INCLUDE,
        });
    }
    async saveDirectCalibration(evalId, calibratorId, dto) {
        const evaluation = await this.getEvaluationOrThrow(evalId);
        this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_CALIBRATION);
        this.assertCalibrationMode(evaluation.calibrationMode, CalibrationMode.DIRECT_TEAM);
        await this.assertCalibrator(evaluation.cycleId, calibratorId);
        await this.validateScoreRanges(dto.answers.map((a) => ({ questionId: a.questionId, score: a.finalScore })));
        await Promise.all(dto.answers.map((a) => this.prisma.evaluationAnswer.update({
            where: { evaluationId_questionId: { evaluationId: evalId, questionId: a.questionId } },
            data: { finalScore: a.finalScore },
        })));
        return this.prisma.evaluation.findUniqueOrThrow({
            where: { id: evalId },
            include: EVALUATION_INCLUDE,
        });
    }
    async saveIndividualCalibration(evalId, calibratorId, dto) {
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
    async getCalibrationScores(evalId, calibratorId) {
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
        return answers.map((a) => {
            const scores = a.calibrationIndividualScores.map((s) => s.score);
            const aggregate = scores.length > 0
                ? Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length)
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
    async finalize(evalId, calibratorId) {
        const evaluation = await this.getEvaluationOrThrow(evalId);
        this.assertStatus(evaluation, EvaluationStatus.SUBMITTED_TO_CALIBRATION);
        await this.assertCalibrator(evaluation.cycleId, calibratorId);
        if (evaluation.calibrationMode === CalibrationMode.INDIVIDUAL_AGGREGATE) {
            const answers = await this.prisma.evaluationAnswer.findMany({
                where: { evaluationId: evalId },
                include: { calibrationIndividualScores: true },
            });
            await Promise.all(answers.map((a) => {
                const scores = a.calibrationIndividualScores.map((s) => s.score);
                if (scores.length === 0) {
                    throw new BadRequestException(`No individual scores submitted for question — cannot finalize`);
                }
                const aggregate = Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length);
                return this.prisma.evaluationAnswer.update({
                    where: { id: a.id },
                    data: { finalScore: aggregate },
                });
            }));
        }
        const finalized = await this.prisma.evaluation.update({
            where: { id: evalId },
            data: {
                status: EvaluationStatus.FINALIZED,
                finalizedAt: new Date(),
            },
            include: EVALUATION_INCLUDE,
        });
        this.notifyFinalization(finalized.employeeId, evalId).catch((err) => this.logger.error("Failed to send finalization notifications", err));
        return finalized;
    }
    async getEvaluationDetail(evalId, user) {
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
    async getActiveCycle() {
        const cycle = await this.prisma.evaluationCycle.findFirst({
            where: { status: CycleStatus.OPEN },
            orderBy: { createdAt: "desc" },
        });
        if (!cycle)
            throw new NotFoundException("No active evaluation cycle");
        return cycle;
    }
    async getEvaluationOrThrow(id) {
        const evaluation = await this.prisma.evaluation.findUnique({ where: { id } });
        if (!evaluation)
            throw new NotFoundException("Evaluation not found");
        return evaluation;
    }
    async validateScoreRanges(items) {
        if (items.length === 0)
            return;
        const questionIds = [...new Set(items.map((i) => i.questionId))];
        const questions = await this.prisma.evaluationQuestion.findMany({
            where: { id: { in: questionIds } },
            select: { id: true, sheet: { select: { minScore: true, maxScore: true } } },
        });
        const questionMap = new Map(questions.map((q) => [q.id, q.sheet]));
        for (const item of items) {
            const sheet = questionMap.get(item.questionId);
            if (!sheet) {
                throw new BadRequestException(`Question ${item.questionId} not found`);
            }
            if (item.score < sheet.minScore || item.score > sheet.maxScore) {
                throw new BadRequestException(`Score ${item.score} out of range [${sheet.minScore}-${sheet.maxScore}] for question ${item.questionId}`);
            }
        }
    }
    assertOwner(employeeId, userId) {
        if (employeeId !== userId) {
            throw new ForbiddenException("You can only modify your own evaluation");
        }
    }
    assertStatus(evaluation, expected) {
        if (evaluation.status !== expected) {
            throw new BadRequestException(`Evaluation status must be ${expected}, currently ${evaluation.status}`);
        }
    }
    assertCalibrationMode(current, expected) {
        if (current !== expected) {
            throw new BadRequestException(`Calibration mode must be set to ${expected} first`);
        }
    }
    async assertManager(employeeId, managerId) {
        const employee = await this.prisma.user.findUniqueOrThrow({
            where: { id: employeeId },
        });
        if (employee.lineManagerId !== managerId) {
            throw new ForbiddenException("You are not this employee's line manager");
        }
    }
    async assertCalibrator(cycleId, userId) {
        const membership = await this.prisma.cycleCalibrationMember.findUnique({
            where: { cycleId_userId: { cycleId, userId } },
        });
        if (!membership) {
            throw new ForbiddenException("You are not assigned to calibrate this cycle");
        }
    }
    get frontendUrl() {
        return this.configService.getOrThrow("FRONTEND_URL");
    }
    async notifyManagerOfSelfSubmission(employeeId, evalId) {
        const employee = await this.prisma.user.findUniqueOrThrow({
            where: { id: employeeId },
            include: { lineManager: { select: { email: true } } },
        });
        if (!employee.lineManager)
            return;
        await this.notificationsService.notifySelfEvaluationSubmitted(employee.lineManager.email, `${employee.firstName} ${employee.lastName}`, `${this.frontendUrl}/evaluations/${evalId}/review`);
    }
    async notifyCalibrationTeamOfManagerSubmission(cycleId, employeeId, evalId) {
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
        if (members.length === 0)
            return;
        const emails = members.map((m) => m.user.email);
        await this.notificationsService.notifyManagerReviewSubmitted(emails, `${employee.firstName} ${employee.lastName}`, employee.department?.name ?? "Unknown", `${this.frontendUrl}/evaluations/${evalId}/calibrate`);
    }
    async notifyFinalization(employeeId, evalId) {
        const employee = await this.prisma.user.findUniqueOrThrow({
            where: { id: employeeId },
            include: { lineManager: { select: { email: true } } },
        });
        if (!employee.lineManager)
            return;
        await this.notificationsService.notifyEvaluationFinalized(employee.email, employee.lineManager.email, `${employee.firstName} ${employee.lastName}`, `${this.frontendUrl}/evaluations/${evalId}`);
    }
};
EvaluationsService = EvaluationsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        NotificationsService,
        ConfigService])
], EvaluationsService);
export { EvaluationsService };
//# sourceMappingURL=evaluations.service.js.map