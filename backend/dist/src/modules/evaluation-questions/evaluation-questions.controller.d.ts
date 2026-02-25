import { EvaluationQuestionsService } from "./evaluation-questions.service.js";
import { CreateQuestionDto, UpdateQuestionDto, QueryQuestionsDto, BulkCreateQuestionsDto } from "./dto/index.js";
export declare class EvaluationQuestionsController {
    private readonly questionsService;
    constructor(questionsService: EvaluationQuestionsService);
    create(dto: CreateQuestionDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    bulkCreate(dto: BulkCreateQuestionsDto): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    findAll(query: QueryQuestionsDto): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        data: {
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
        };
        message: string;
    }>;
    update(id: string, dto: UpdateQuestionDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    remove(id: string): Promise<void>;
}
