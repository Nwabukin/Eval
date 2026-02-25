import { PrismaService } from "../../database/prisma.service.js";
import type { CreateSheetDto, UpdateSheetDto, QuerySheetsDto, BulkCreateSheetsDto } from "./dto/index.js";
export declare class EvaluationSheetsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    bulkCreate(dto: BulkCreateSheetsDto): Promise<({
        level: {
            id: string;
            name: string;
        };
        cycle: {
            id: string;
            name: string;
        };
        department: {
            id: string;
            name: string;
        };
        _count: {
            questions: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        departmentId: string;
        levelId: string;
        cycleId: string;
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
    })[]>;
    create(dto: CreateSheetDto): Promise<{
        level: {
            id: string;
            name: string;
        };
        cycle: {
            id: string;
            name: string;
        };
        department: {
            id: string;
            name: string;
        };
        _count: {
            questions: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        departmentId: string;
        levelId: string;
        cycleId: string;
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
    }>;
    findAll(query: QuerySheetsDto): Promise<({
        level: {
            id: string;
            name: string;
        };
        cycle: {
            id: string;
            name: string;
        };
        department: {
            id: string;
            name: string;
        };
        _count: {
            questions: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        departmentId: string;
        levelId: string;
        cycleId: string;
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
    })[]>;
    findOne(id: string): Promise<{
        level: {
            id: string;
            name: string;
        };
        cycle: {
            id: string;
            name: string;
        };
        department: {
            id: string;
            name: string;
        };
        questions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            weight: number;
            sortOrder: number;
            text: string;
            category: string | null;
            sheetId: string;
        }[];
        _count: {
            questions: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        departmentId: string;
        levelId: string;
        cycleId: string;
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
    }>;
    update(id: string, dto: UpdateSheetDto): Promise<{
        level: {
            id: string;
            name: string;
        };
        cycle: {
            id: string;
            name: string;
        };
        department: {
            id: string;
            name: string;
        };
        _count: {
            questions: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        departmentId: string;
        levelId: string;
        cycleId: string;
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
    }>;
    remove(id: string): Promise<void>;
    private validateScoreRange;
}
