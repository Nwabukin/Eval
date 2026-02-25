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
            weight: number;
            minScore: number;
            maxScore: number;
            sortOrder: number;
            createdAt: Date;
            updatedAt: Date;
            cycleId: string;
            departmentId: string;
            levelId: string;
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
            weight: number;
            minScore: number;
            maxScore: number;
            sortOrder: number;
            createdAt: Date;
            updatedAt: Date;
            cycleId: string;
            departmentId: string;
            levelId: string;
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
            weight: number;
            minScore: number;
            maxScore: number;
            sortOrder: number;
            createdAt: Date;
            updatedAt: Date;
            cycleId: string;
            departmentId: string;
            levelId: string;
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
            weight: number;
            minScore: number;
            maxScore: number;
            sortOrder: number;
            createdAt: Date;
            updatedAt: Date;
            cycleId: string;
            departmentId: string;
            levelId: string;
        };
        message: string;
    }>;
    remove(id: string): Promise<void>;
}
