import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service.js";
import { CycleStatus } from "../../../generated/prisma/client.js";
import { NotificationsService } from "../notifications/notifications.service.js";
import type { CreateCycleDto, UpdateCycleDto } from "./dto/index.js";
export declare class EvaluationCyclesService {
    private readonly prisma;
    private readonly notificationsService;
    private readonly configService;
    private readonly logger;
    constructor(prisma: PrismaService, notificationsService: NotificationsService, configService: ConfigService);
    create(dto: CreateCycleDto): Promise<{
        calibrationMembers: ({
            user: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            cycleId: string;
            userId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        startDate: Date;
        endDate: Date;
        status: CycleStatus;
    }>;
    private notifyEmployeesOfNewCycle;
    findAll(status?: CycleStatus): Promise<({
        calibrationMembers: ({
            user: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            cycleId: string;
            userId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        startDate: Date;
        endDate: Date;
        status: CycleStatus;
    })[]>;
    findOne(id: string): Promise<{
        calibrationMembers: ({
            user: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            cycleId: string;
            userId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        startDate: Date;
        endDate: Date;
        status: CycleStatus;
    }>;
    update(id: string, dto: UpdateCycleDto): Promise<{
        calibrationMembers: ({
            user: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            cycleId: string;
            userId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        startDate: Date;
        endDate: Date;
        status: CycleStatus;
    }>;
    close(id: string): Promise<{
        calibrationMembers: ({
            user: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            cycleId: string;
            userId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        startDate: Date;
        endDate: Date;
        status: CycleStatus;
    }>;
    private validateDates;
    private assertNoOverlap;
}
