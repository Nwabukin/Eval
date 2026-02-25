import { EvaluationQuestionsService } from "./evaluation-questions.service.js";
import { CreateQuestionDto, UpdateQuestionDto, QueryQuestionsDto, BulkCreateQuestionsDto } from "./dto/index.js";
export declare class EvaluationQuestionsController {
    private readonly questionsService;
    constructor(questionsService: EvaluationQuestionsService);
    create(dto: CreateQuestionDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    bulkCreate(dto: BulkCreateQuestionsDto): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    findAll(query: QueryQuestionsDto): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        data: {
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
        };
        message: string;
    }>;
    update(id: string, dto: UpdateQuestionDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    remove(id: string): Promise<void>;
}
