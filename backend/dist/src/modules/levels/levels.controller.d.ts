import { LevelsService } from "./levels.service.js";
import { CreateLevelDto, UpdateLevelDto } from "./dto/index.js";
export declare class LevelsController {
    private readonly levelsService;
    constructor(levelsService: LevelsService);
    create(dto: CreateLevelDto): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        message: string;
    }>;
    findAll(): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        message: string;
    }>;
    update(id: string, dto: UpdateLevelDto): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        message: string;
    }>;
    remove(id: string): Promise<void>;
}
