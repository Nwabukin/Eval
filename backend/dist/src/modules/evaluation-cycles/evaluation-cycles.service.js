var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EvaluationCyclesService_1;
import { Injectable, NotFoundException, BadRequestException, Logger, } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service.js";
import { CycleStatus, UserRole } from "../../../generated/prisma/client.js";
import { NotificationsService } from "../notifications/notifications.service.js";
const CYCLE_INCLUDE = {
    calibrationMembers: {
        include: {
            user: { select: { id: true, firstName: true, lastName: true, email: true } },
        },
    },
};
let EvaluationCyclesService = EvaluationCyclesService_1 = class EvaluationCyclesService {
    prisma;
    notificationsService;
    configService;
    logger = new Logger(EvaluationCyclesService_1.name);
    constructor(prisma, notificationsService, configService) {
        this.prisma = prisma;
        this.notificationsService = notificationsService;
        this.configService = configService;
    }
    async create(dto) {
        this.validateDates(dto.startDate, dto.endDate);
        await this.assertNoOverlap(dto.startDate, dto.endDate);
        const cycle = await this.prisma.evaluationCycle.create({
            data: {
                name: dto.name,
                startDate: new Date(dto.startDate),
                endDate: new Date(dto.endDate),
                calibrationMembers: dto.calibrationMemberIds?.length
                    ? {
                        create: dto.calibrationMemberIds.map((userId) => ({ userId })),
                    }
                    : undefined,
            },
            include: CYCLE_INCLUDE,
        });
        this.notifyEmployeesOfNewCycle(cycle.name).catch((err) => this.logger.error("Failed to send cycle start notifications", err));
        return cycle;
    }
    async notifyEmployeesOfNewCycle(cycleName) {
        const employees = await this.prisma.user.findMany({
            where: { role: UserRole.EMPLOYEE, isActive: true },
            select: { email: true },
        });
        const emails = employees.map((e) => e.email);
        if (emails.length === 0)
            return;
        const frontendUrl = this.configService.getOrThrow("FRONTEND_URL");
        await this.notificationsService.notifyCycleStarted(emails, cycleName, `${frontendUrl}/evaluations`);
    }
    async findAll(status) {
        return this.prisma.evaluationCycle.findMany({
            where: status ? { status } : undefined,
            include: CYCLE_INCLUDE,
            orderBy: { createdAt: "desc" },
        });
    }
    async findOne(id) {
        const cycle = await this.prisma.evaluationCycle.findUnique({
            where: { id },
            include: CYCLE_INCLUDE,
        });
        if (!cycle)
            throw new NotFoundException("Evaluation cycle not found");
        return cycle;
    }
    async update(id, dto) {
        const cycle = await this.findOne(id);
        if (cycle.status === CycleStatus.CLOSED) {
            throw new BadRequestException("Cannot update a closed cycle");
        }
        const effectiveStart = dto.startDate ?? cycle.startDate.toISOString();
        const effectiveEnd = dto.endDate ?? cycle.endDate.toISOString();
        if (dto.startDate || dto.endDate) {
            this.validateDates(effectiveStart, effectiveEnd);
            await this.assertNoOverlap(effectiveStart, effectiveEnd, id);
        }
        if (dto.calibrationMemberIds !== undefined) {
            await this.prisma.cycleCalibrationMember.deleteMany({ where: { cycleId: id } });
            if (dto.calibrationMemberIds.length > 0) {
                await this.prisma.cycleCalibrationMember.createMany({
                    data: dto.calibrationMemberIds.map((userId) => ({
                        cycleId: id,
                        userId,
                    })),
                });
            }
        }
        return this.prisma.evaluationCycle.update({
            where: { id },
            data: {
                ...(dto.name && { name: dto.name }),
                ...(dto.startDate && { startDate: new Date(dto.startDate) }),
                ...(dto.endDate && { endDate: new Date(dto.endDate) }),
            },
            include: CYCLE_INCLUDE,
        });
    }
    async close(id) {
        await this.findOne(id);
        return this.prisma.evaluationCycle.update({
            where: { id },
            data: { status: CycleStatus.CLOSED },
            include: CYCLE_INCLUDE,
        });
    }
    validateDates(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (end <= start) {
            throw new BadRequestException("End date must be after start date");
        }
    }
    async assertNoOverlap(startDate, endDate, excludeId) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const overlapping = await this.prisma.evaluationCycle.findFirst({
            where: {
                status: CycleStatus.OPEN,
                startDate: { lt: end },
                endDate: { gt: start },
                ...(excludeId && { id: { not: excludeId } }),
            },
        });
        if (overlapping) {
            throw new BadRequestException(`Date range overlaps with existing open cycle "${overlapping.name}" (${overlapping.startDate.toISOString().split("T")[0]} — ${overlapping.endDate.toISOString().split("T")[0]})`);
        }
    }
};
EvaluationCyclesService = EvaluationCyclesService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        NotificationsService,
        ConfigService])
], EvaluationCyclesService);
export { EvaluationCyclesService };
//# sourceMappingURL=evaluation-cycles.service.js.map