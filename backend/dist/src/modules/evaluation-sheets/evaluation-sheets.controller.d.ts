import { EvaluationSheetsService } from "./evaluation-sheets.service.js";
import { CreateSheetDto, UpdateSheetDto, QuerySheetsDto, BulkCreateSheetsDto } from "./dto/index.js";
export declare class EvaluationSheetsController {
    private readonly sheetsService;
    constructor(sheetsService: EvaluationSheetsService);
    create(dto: CreateSheetDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    bulkCreate(dto: BulkCreateSheetsDto): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    findAll(query: QuerySheetsDto): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        data: {
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
        };
        message: string;
    }>;
    update(id: string, dto: UpdateSheetDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    remove(id: string): Promise<void>;
}
