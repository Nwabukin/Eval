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
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        departmentId: string;
        levelId: string;
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
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        departmentId: string;
        levelId: string;
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
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        departmentId: string;
        levelId: string;
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
            weight: number;
            sortOrder: number;
            createdAt: Date;
            updatedAt: Date;
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
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        departmentId: string;
        levelId: string;
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
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        departmentId: string;
        levelId: string;
    }>;
    remove(id: string): Promise<void>;
    private validateScoreRange;
}
