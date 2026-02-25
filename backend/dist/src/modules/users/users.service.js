var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, ConflictException, BadRequestException, } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
import { AuthService } from "../auth/auth.service.js";
import { normalizePagination, buildPaginationMeta, } from "../../common/utils/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
const USER_SELECT = {
    id: true,
    email: true,
    firstName: true,
    lastName: true,
    role: true,
    isActive: true,
    departmentId: true,
    levelId: true,
    lineManagerId: true,
    createdAt: true,
    updatedAt: true,
    department: { select: { id: true, name: true } },
    level: { select: { id: true, name: true } },
    lineManager: { select: { id: true, firstName: true, lastName: true, email: true } },
};
let UsersService = class UsersService {
    prisma;
    authService;
    constructor(prisma, authService) {
        this.prisma = prisma;
        this.authService = authService;
    }
    async bulkCreate(dto) {
        const existingEmails = new Set((await this.prisma.user.findMany({
            where: { email: { in: dto.users.map((u) => u.email) } },
            select: { email: true },
        })).map((u) => u.email));
        const created = [];
        const skipped = [];
        for (const item of dto.users) {
            if (existingEmails.has(item.email)) {
                skipped.push({ email: item.email, reason: "Email already in use" });
                continue;
            }
            if (item.role === UserRole.EMPLOYEE && (!item.departmentId || !item.levelId)) {
                skipped.push({
                    email: item.email,
                    reason: "Employees must have both departmentId and levelId set",
                });
                continue;
            }
            const hashedPassword = await this.authService.hashPassword(item.password);
            const user = await this.prisma.user.create({
                data: {
                    email: item.email,
                    password: hashedPassword,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    role: item.role,
                    departmentId: item.departmentId,
                    levelId: item.levelId,
                    lineManagerId: item.lineManagerId,
                },
                select: USER_SELECT,
            });
            created.push(user);
        }
        return { created, skipped };
    }
    async create(dto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new ConflictException("Email already in use");
        }
        if (dto.role === UserRole.EMPLOYEE && (!dto.departmentId || !dto.levelId)) {
            throw new BadRequestException("Employees must be assigned to a department and level");
        }
        const hashedPassword = await this.authService.hashPassword(dto.password);
        return this.prisma.user.create({
            data: {
                email: dto.email,
                password: hashedPassword,
                firstName: dto.firstName,
                lastName: dto.lastName,
                role: dto.role,
                departmentId: dto.departmentId,
                levelId: dto.levelId,
                lineManagerId: dto.lineManagerId,
            },
            select: USER_SELECT,
        });
    }
    async findAll(query) {
        const { page, limit, skip } = normalizePagination(query);
        const where = {
            ...(query.role && { role: query.role }),
            ...(query.departmentId && { departmentId: query.departmentId }),
            ...(query.levelId && { levelId: query.levelId }),
            ...(!query.includeInactive && { isActive: true }),
        };
        if (query.search) {
            where["OR"] = [
                { firstName: { contains: query.search, mode: "insensitive" } },
                { lastName: { contains: query.search, mode: "insensitive" } },
                { email: { contains: query.search, mode: "insensitive" } },
            ];
        }
        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                select: USER_SELECT,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
            }),
            this.prisma.user.count({ where }),
        ]);
        return { data: users, meta: buildPaginationMeta(total, page, limit) };
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: USER_SELECT,
        });
        if (!user) {
            throw new NotFoundException("User not found");
        }
        return user;
    }
    async update(id, dto) {
        await this.findOne(id);
        const data = { ...dto };
        if (dto.password) {
            data["password"] = await this.authService.hashPassword(dto.password);
        }
        return this.prisma.user.update({
            where: { id },
            data,
            select: USER_SELECT,
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.user.update({
            where: { id },
            data: { isActive: false },
        });
    }
    async assign(id, dto) {
        await this.findOne(id);
        return this.prisma.user.update({
            where: { id },
            data: {
                ...(dto.departmentId !== undefined && { departmentId: dto.departmentId }),
                ...(dto.levelId !== undefined && { levelId: dto.levelId }),
                ...(dto.lineManagerId !== undefined && { lineManagerId: dto.lineManagerId }),
            },
            select: USER_SELECT,
        });
    }
};
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AuthService])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map