import { UsersService } from "./users.service.js";
import { CreateUserDto, UpdateUserDto, AssignUserDto, QueryUsersDto, BulkCreateUsersDto } from "./dto/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            departmentId: string | null;
            levelId: string | null;
            lineManagerId: string | null;
            level: {
                id: string;
                name: string;
            } | null;
            department: {
                id: string;
                name: string;
            } | null;
            lineManager: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            } | null;
        };
        message: string;
    }>;
    bulkCreate(dto: BulkCreateUsersDto): Promise<{
        data: {
            created: unknown[];
            skipped: {
                email: string;
                reason: string;
            }[];
        };
        message: string;
    }>;
    findAll(query: QueryUsersDto): Promise<{
        data: unknown[];
        message: string;
        meta: import("../../common/interfaces/api-response.interface.js").PaginationMeta;
    }>;
    findOne(id: string): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            departmentId: string | null;
            levelId: string | null;
            lineManagerId: string | null;
            level: {
                id: string;
                name: string;
            } | null;
            department: {
                id: string;
                name: string;
            } | null;
            lineManager: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            } | null;
        };
        message: string;
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            departmentId: string | null;
            levelId: string | null;
            lineManagerId: string | null;
            level: {
                id: string;
                name: string;
            } | null;
            department: {
                id: string;
                name: string;
            } | null;
            lineManager: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            } | null;
        };
        message: string;
    }>;
    remove(id: string): Promise<void>;
    assign(id: string, dto: AssignUserDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            departmentId: string | null;
            levelId: string | null;
            lineManagerId: string | null;
            level: {
                id: string;
                name: string;
            } | null;
            department: {
                id: string;
                name: string;
            } | null;
            lineManager: {
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            } | null;
        };
        message: string;
    }>;
}
