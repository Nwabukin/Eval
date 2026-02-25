import { PrismaService } from "../../database/prisma.service.js";
import type { CreateQuestionDto, UpdateQuestionDto, QueryQuestionsDto, BulkCreateQuestionsDto } from "./dto/index.js";
export declare class EvaluationQuestionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    bulkCreate(dto: BulkCreateQuestionsDto): Promise<({
        sheet: {
            level: {
                id: string;
                name: string;
            };
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        weight: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        category: string | null;
        sheetId: string;
    })[]>;
    create(dto: CreateQuestionDto): Promise<{
        sheet: {
            level: {
                id: string;
                name: string;
            };
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        weight: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        category: string | null;
        sheetId: string;
    }>;
    findAll(query: QueryQuestionsDto): Promise<({
        sheet: {
            level: {
                id: string;
                name: string;
            };
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        weight: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        category: string | null;
        sheetId: string;
    })[]>;
    findOne(id: string): Promise<{
        sheet: {
            level: {
                id: string;
                name: string;
            };
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        weight: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        category: string | null;
        sheetId: string;
    }>;
    update(id: string, dto: UpdateQuestionDto): Promise<{
        sheet: {
            level: {
                id: string;
                name: string;
            };
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
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
        weight: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        category: string | null;
        sheetId: string;
    }>;
    remove(id: string): Promise<void>;
}
