import { PrismaService } from "../../database/prisma.service.js";
import type { CreateLevelDto, UpdateLevelDto } from "./dto/index.js";
export declare class LevelsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateLevelDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateLevelDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<void>;
}
