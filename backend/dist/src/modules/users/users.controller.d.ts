import { UsersService } from "./users.service.js";
import { CreateUserDto, UpdateUserDto, AssignUserDto, QueryUsersDto, BulkCreateUsersDto } from "./dto/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<{
        data: {
            level: {
                id: string;
                name: string;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            department: {
                id: string;
                name: string;
            } | null;
            departmentId: string | null;
            levelId: string | null;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            lineManagerId: string | null;
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
            level: {
                id: string;
                name: string;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            department: {
                id: string;
                name: string;
            } | null;
            departmentId: string | null;
            levelId: string | null;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            lineManagerId: string | null;
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
            level: {
                id: string;
                name: string;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            department: {
                id: string;
                name: string;
            } | null;
            departmentId: string | null;
            levelId: string | null;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            lineManagerId: string | null;
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
            level: {
                id: string;
                name: string;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            department: {
                id: string;
                name: string;
            } | null;
            departmentId: string | null;
            levelId: string | null;
            email: string;
            firstName: string;
            lastName: string;
            role: UserRole;
            isActive: boolean;
            lineManagerId: string | null;
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
