import { PrismaService } from "../../database/prisma.service.js";
import { AuthService } from "../auth/auth.service.js";
import { UserRole } from "../../../generated/prisma/client.js";
import type { CreateUserDto, UpdateUserDto, AssignUserDto, QueryUsersDto, BulkCreateUsersDto } from "./dto/index.js";
import type { PaginationMeta } from "../../common/interfaces/index.js";
export declare class UsersService {
    private readonly prisma;
    private readonly authService;
    constructor(prisma: PrismaService, authService: AuthService);
    bulkCreate(dto: BulkCreateUsersDto): Promise<{
        created: unknown[];
        skipped: {
            email: string;
            reason: string;
        }[];
    }>;
    create(dto: CreateUserDto): Promise<{
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
    }>;
    findAll(query: QueryUsersDto): Promise<{
        data: unknown[];
        meta: PaginationMeta;
    }>;
    findOne(id: string): Promise<{
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
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
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
    }>;
    remove(id: string): Promise<void>;
    assign(id: string, dto: AssignUserDto): Promise<{
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
    }>;
}
