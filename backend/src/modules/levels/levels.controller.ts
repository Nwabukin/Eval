import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { LevelsService } from "./levels.service.js";
import { CreateLevelDto, UpdateLevelDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";

@Controller("levels")
@ApiTags("Levels")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create a level" })
  @ApiResponse({ status: 201, description: "Level created" })
  async create(@Body() dto: CreateLevelDto) {
    const level = await this.levelsService.create(dto);
    return { data: level, message: "Level created" };
  }

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "List all levels" })
  @ApiResponse({ status: 200, description: "Levels list" })
  async findAll() {
    const levels = await this.levelsService.findAll();
    return { data: levels, message: "Levels retrieved" };
  }

  @Get(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get level by ID" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const level = await this.levelsService.findOne(id);
    return { data: level, message: "Level retrieved" };
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update a level" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateLevelDto,
  ) {
    const level = await this.levelsService.update(id, dto);
    return { data: level, message: "Level updated" };
  }

  @Delete(":id")
  @Roles(UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete a level" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    await this.levelsService.remove(id);
  }
}
