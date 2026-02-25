import { PrismaService } from "../../database/prisma.service.js";
import type { CreateDepartmentDto, UpdateDepartmentDto } from "./dto/index.js";
export declare class DepartmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateDepartmentDto): Promise<{
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
    update(id: string, dto: UpdateDepartmentDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<void>;
}
