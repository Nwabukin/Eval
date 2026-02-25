import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service.js";
import { CycleStatus, UserRole } from "../../../generated/prisma/client.js";
import { NotificationsService } from "../notifications/notifications.service.js";
import type { CreateCycleDto, UpdateCycleDto } from "./dto/index.js";

const CYCLE_INCLUDE = {
  calibrationMembers: {
    include: {
      user: { select: { id: true, firstName: true, lastName: true, email: true } },
    },
  },
} as const;

@Injectable()
export class EvaluationCyclesService {
  private readonly logger = new Logger(EvaluationCyclesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Creates a new evaluation cycle, optionally assigns calibration team members,
   * and notifies all active employees that the cycle has started.
   *
   * @throws BadRequestException if endDate <= startDate or dates overlap an existing OPEN cycle
   */
  async create(dto: CreateCycleDto) {
    this.validateDates(dto.startDate, dto.endDate);
    await this.assertNoOverlap(dto.startDate, dto.endDate);

    const cycle = await this.prisma.evaluationCycle.create({
      data: {
        name: dto.name,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        calibrationMembers: dto.calibrationMemberIds?.length
          ? {
              create: dto.calibrationMemberIds.map((userId: string) => ({ userId })),
            }
          : undefined,
      },
      include: CYCLE_INCLUDE,
    });

    // Notify all active employees asynchronously — don't block the response
    this.notifyEmployeesOfNewCycle(cycle.name).catch((err: unknown) =>
      this.logger.error("Failed to send cycle start notifications", err),
    );

    return cycle;
  }

  private async notifyEmployeesOfNewCycle(cycleName: string): Promise<void> {
    const employees = await this.prisma.user.findMany({
      where: { role: UserRole.EMPLOYEE, isActive: true },
      select: { email: true },
    });

    const emails = employees.map((e: { email: string }) => e.email);
    if (emails.length === 0) return;

    const frontendUrl = this.configService.getOrThrow<string>("FRONTEND_URL");
    await this.notificationsService.notifyCycleStarted(
      emails,
      cycleName,
      `${frontendUrl}/evaluations`,
    );
  }

  async findAll(status?: CycleStatus) {
    return this.prisma.evaluationCycle.findMany({
      where: status ? { status } : undefined,
      include: CYCLE_INCLUDE,
      orderBy: { createdAt: "desc" },
    });
  }

  async findOne(id: string) {
    const cycle = await this.prisma.evaluationCycle.findUnique({
      where: { id },
      include: CYCLE_INCLUDE,
    });
    if (!cycle) throw new NotFoundException("Evaluation cycle not found");
    return cycle;
  }

  /**
   * Updates cycle details and optionally replaces the calibration panel.
   * Replaces the full member list when calibrationMemberIds is provided.
   *
   * @throws BadRequestException if endDate <= startDate or dates overlap another OPEN cycle
   */
  async update(id: string, dto: UpdateCycleDto) {
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
          data: dto.calibrationMemberIds.map((userId: string) => ({
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

  /**
   * Closes a cycle — no further evaluations can be submitted.
   */
  async close(id: string) {
    await this.findOne(id);
    return this.prisma.evaluationCycle.update({
      where: { id },
      data: { status: CycleStatus.CLOSED },
      include: CYCLE_INCLUDE,
    });
  }

  // ─── Private Helpers ────────────────────────────────────

  private validateDates(startDate: string | Date, endDate: string | Date): void {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end <= start) {
      throw new BadRequestException("End date must be after start date");
    }
  }

  /**
   * Ensures no existing OPEN cycle overlaps the given date range.
   * @param excludeId - Cycle ID to exclude (for update operations)
   */
  private async assertNoOverlap(
    startDate: string | Date,
    endDate: string | Date,
    excludeId?: string,
  ): Promise<void> {
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
      throw new BadRequestException(
        `Date range overlaps with existing open cycle "${overlapping.name}" (${overlapping.startDate.toISOString().split("T")[0]} — ${overlapping.endDate.toISOString().split("T")[0]})`,
      );
    }
  }
}
