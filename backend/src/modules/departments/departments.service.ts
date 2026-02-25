import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
import type { CreateDepartmentDto, UpdateDepartmentDto } from "./dto/index.js";

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDepartmentDto) {
    const existing = await this.prisma.department.findUnique({
      where: { name: dto.name },
    });
    if (existing) {
      throw new ConflictException("Department name already exists");
    }

    return this.prisma.department.create({ data: { name: dto.name } });
  }

  async findAll() {
    return this.prisma.department.findMany({ orderBy: { name: "asc" } });
  }

  async findOne(id: string) {
    const dept = await this.prisma.department.findUnique({ where: { id } });
    if (!dept) throw new NotFoundException("Department not found");
    return dept;
  }

  async update(id: string, dto: UpdateDepartmentDto) {
    await this.findOne(id);
    return this.prisma.department.update({ where: { id }, data: { ...dto } });
  }

  /**
   * Deletes a department. Fails gracefully if users or questions still reference it.
   *
   * @throws ConflictException if the department is still in use
   */
  async remove(id: string): Promise<void> {
    await this.findOne(id);

    const usageCount = await this.prisma.user.count({ where: { departmentId: id } });
    if (usageCount > 0) {
      throw new ConflictException(
        `Cannot delete department — ${usageCount} user(s) are still assigned to it`,
      );
    }

    const sheetCount = await this.prisma.evaluationSheet.count({ where: { departmentId: id } });
    if (sheetCount > 0) {
      throw new ConflictException(
        `Cannot delete department — ${sheetCount} evaluation sheet(s) reference it`,
      );
    }

    await this.prisma.department.delete({ where: { id } });
  }
}
