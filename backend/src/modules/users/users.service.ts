import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
import { AuthService } from "../auth/auth.service.js";
import {
  normalizePagination,
  buildPaginationMeta,
} from "../../common/utils/index.js";
import { UserRole } from "../../../generated/prisma/client.js";
import type { CreateUserDto, UpdateUserDto, AssignUserDto, QueryUsersDto, BulkCreateUsersDto } from "./dto/index.js";
import type { PaginationMeta } from "../../common/interfaces/index.js";

/** Fields safe to return in API responses — excludes password */
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
} as const;

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Creates multiple users at once. Skips users whose emails already exist
   * and returns a summary of created vs skipped.
   */
  async bulkCreate(dto: BulkCreateUsersDto): Promise<{
    created: unknown[];
    skipped: { email: string; reason: string }[];
  }> {
    const existingEmails = new Set(
      (
        await this.prisma.user.findMany({
          where: { email: { in: dto.users.map((u) => u.email) } },
          select: { email: true },
        })
      ).map((u: { email: string }) => u.email),
    );

    const created: unknown[] = [];
    const skipped: { email: string; reason: string }[] = [];

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

  /**
   * Creates a new user with a hashed password.
   *
   * @throws ConflictException if email already exists
   */
  async create(dto: CreateUserDto) {
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

  /**
   * Lists users with optional role/department/level/search filters and pagination.
   * Excludes deactivated users by default unless includeInactive is true.
   */
  async findAll(query: QueryUsersDto): Promise<{
    data: unknown[];
    meta: PaginationMeta;
  }> {
    const { page, limit, skip } = normalizePagination(query);

    const where: Record<string, unknown> = {
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

  /**
   * Finds a single user by ID.
   *
   * @throws NotFoundException if user does not exist
   */
  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: USER_SELECT,
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  /**
   * Updates user fields. If password is provided, it is hashed before saving.
   */
  async update(id: string, dto: UpdateUserDto) {
    await this.findOne(id);

    const data: Record<string, unknown> = { ...dto };
    if (dto.password) {
      data["password"] = await this.authService.hashPassword(dto.password);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: USER_SELECT,
    });
  }

  /**
   * Soft-deletes a user by setting isActive to false.
   */
  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  }

  /**
   * Assigns a user to a department, level, and/or line manager.
   */
  async assign(id: string, dto: AssignUserDto) {
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
}
