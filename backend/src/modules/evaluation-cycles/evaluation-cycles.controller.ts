import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { EvaluationCyclesService } from "./evaluation-cycles.service.js";
import { CreateCycleDto, UpdateCycleDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole, CycleStatus } from "../../../generated/prisma/client.js";

@Controller("evaluation-cycles")
@ApiTags("Evaluation Cycles")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class EvaluationCyclesController {
  constructor(private readonly cyclesService: EvaluationCyclesService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create evaluation cycle with optional calibration panel" })
  @ApiResponse({ status: 201, description: "Cycle created" })
  async create(@Body() dto: CreateCycleDto) {
    const cycle = await this.cyclesService.create(dto);
    return { data: cycle, message: "Evaluation cycle created" };
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION, UserRole.EMPLOYEE)
  @ApiOperation({ summary: "List evaluation cycles" })
  @ApiQuery({ name: "status", enum: CycleStatus, required: false })
  async findAll(@Query("status") status?: CycleStatus) {
    const cycles = await this.cyclesService.findAll(status);
    return { data: cycles, message: "Evaluation cycles retrieved" };
  }

  @Get(":id")
  @Roles(UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION, UserRole.EMPLOYEE)
  @ApiOperation({ summary: "Get cycle detail with calibration members" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const cycle = await this.cyclesService.findOne(id);
    return { data: cycle, message: "Evaluation cycle retrieved" };
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update cycle and/or replace calibration panel" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateCycleDto,
  ) {
    const cycle = await this.cyclesService.update(id, dto);
    return { data: cycle, message: "Evaluation cycle updated" };
  }

  @Post(":id/close")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Close an evaluation cycle" })
  async close(@Param("id", ParseUUIDPipe) id: string) {
    const cycle = await this.cyclesService.close(id);
    return { data: cycle, message: "Evaluation cycle closed" };
  }
}
