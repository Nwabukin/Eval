import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { EvaluationSheetsService } from "./evaluation-sheets.service.js";
import { CreateSheetDto, UpdateSheetDto, QuerySheetsDto, BulkCreateSheetsDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";

@Controller("evaluation-sheets")
@ApiTags("Evaluation Sheets")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class EvaluationSheetsController {
  constructor(private readonly sheetsService: EvaluationSheetsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create an evaluation sheet scoped to cycle/dept/level" })
  async create(@Body() dto: CreateSheetDto) {
    const sheet = await this.sheetsService.create(dto);
    return { data: sheet, message: "Sheet created" };
  }

  @Post("bulk")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create multiple sheets at once for a cycle" })
  async bulkCreate(@Body() dto: BulkCreateSheetsDto) {
    const sheets = await this.sheetsService.bulkCreate(dto);
    return { data: sheets, message: `${sheets.length} sheets created` };
  }

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "List sheets with optional cycle/dept/level filters" })
  async findAll(@Query() query: QuerySheetsDto) {
    const sheets = await this.sheetsService.findAll(query);
    return { data: sheets, message: "Sheets retrieved" };
  }

  @Get(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get sheet by ID with its questions" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const sheet = await this.sheetsService.findOne(id);
    return { data: sheet, message: "Sheet retrieved" };
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update sheet properties" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateSheetDto,
  ) {
    const sheet = await this.sheetsService.update(id, dto);
    return { data: sheet, message: "Sheet updated" };
  }

  @Delete(":id")
  @Roles(UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete a sheet and its questions (cascade)" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    await this.sheetsService.remove(id);
  }
}
