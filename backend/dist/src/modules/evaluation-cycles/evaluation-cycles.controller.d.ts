import { EvaluationCyclesService } from "./evaluation-cycles.service.js";
import { CreateCycleDto, UpdateCycleDto } from "./dto/index.js";
import { CycleStatus } from "../../../generated/prisma/client.js";
export declare class EvaluationCyclesController {
    private readonly cyclesService;
    constructor(cyclesService: EvaluationCyclesService);
    create(dto: CreateCycleDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    findAll(status?: CycleStatus): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        data: {
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
        };
        message: string;
    }>;
    update(id: string, dto: UpdateCycleDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    close(id: string): Promise<{
        data: {
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
        };
        message: string;
    }>;
}
