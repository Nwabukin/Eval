import { PrismaService } from "../../database/prisma.service.js";
import type { CreateQuestionDto, UpdateQuestionDto, QueryQuestionsDto, BulkCreateQuestionsDto } from "./dto/index.js";
export declare class EvaluationQuestionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    bulkCreate(dto: BulkCreateQuestionsDto): Promise<({
        sheet: {
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        weight: number;
        sortOrder: number;
        text: string;
        category: string | null;
        sheetId: string;
    })[]>;
    create(dto: CreateQuestionDto): Promise<{
        sheet: {
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        weight: number;
        sortOrder: number;
        text: string;
        category: string | null;
        sheetId: string;
    }>;
    findAll(query: QueryQuestionsDto): Promise<({
        sheet: {
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        weight: number;
        sortOrder: number;
        text: string;
        category: string | null;
        sheetId: string;
    })[]>;
    findOne(id: string): Promise<{
        sheet: {
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        weight: number;
        sortOrder: number;
        text: string;
        category: string | null;
        sheetId: string;
    }>;
    update(id: string, dto: UpdateQuestionDto): Promise<{
        sheet: {
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        weight: number;
        sortOrder: number;
        text: string;
        category: string | null;
        sheetId: string;
    }>;
    remove(id: string): Promise<void>;
}
