import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
import type { CreateLevelDto, UpdateLevelDto } from "./dto/index.js";

@Injectable()
export class LevelsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLevelDto) {
    const existing = await this.prisma.level.findUnique({
      where: { name: dto.name },
    });
    if (existing) {
      throw new ConflictException("Level name already exists");
    }

    return this.prisma.level.create({ data: { name: dto.name } });
  }

  async findAll() {
    return this.prisma.level.findMany({ orderBy: { name: "asc" } });
  }

  async findOne(id: string) {
    const level = await this.prisma.level.findUnique({ where: { id } });
    if (!level) throw new NotFoundException("Level not found");
    return level;
  }

  async update(id: string, dto: UpdateLevelDto) {
    await this.findOne(id);
    return this.prisma.level.update({ where: { id }, data: { ...dto } });
  }

  /**
   * Deletes a level. Fails gracefully if users or questions still reference it.
   *
   * @throws ConflictException if the level is still in use
   */
  async remove(id: string): Promise<void> {
    await this.findOne(id);

    const usageCount = await this.prisma.user.count({ where: { levelId: id } });
    if (usageCount > 0) {
      throw new ConflictException(
        `Cannot delete level — ${usageCount} user(s) are still assigned to it`,
      );
    }

    const sheetCount = await this.prisma.evaluationSheet.count({ where: { levelId: id } });
    if (sheetCount > 0) {
      throw new ConflictException(
        `Cannot delete level — ${sheetCount} evaluation sheet(s) reference it`,
      );
    }

    await this.prisma.level.delete({ where: { id } });
  }
}
