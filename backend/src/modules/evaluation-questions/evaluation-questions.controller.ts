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
import { EvaluationQuestionsService } from "./evaluation-questions.service.js";
import { CreateQuestionDto, UpdateQuestionDto, QueryQuestionsDto, BulkCreateQuestionsDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";

@Controller("evaluation-questions")
@ApiTags("Evaluation Questions")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class EvaluationQuestionsController {
  constructor(private readonly questionsService: EvaluationQuestionsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create an evaluation question belonging to a sheet" })
  async create(@Body() dto: CreateQuestionDto) {
    const question = await this.questionsService.create(dto);
    return { data: question, message: "Question created" };
  }

  @Post("bulk")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create multiple questions at once for a sheet" })
  async bulkCreate(@Body() dto: BulkCreateQuestionsDto) {
    const questions = await this.questionsService.bulkCreate(dto);
    return { data: questions, message: `${questions.length} questions created` };
  }

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "List questions with optional sheet/cycle/dept/level filters" })
  async findAll(@Query() query: QueryQuestionsDto) {
    const questions = await this.questionsService.findAll(query);
    return { data: questions, message: "Questions retrieved" };
  }

  @Get(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get question by ID" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const question = await this.questionsService.findOne(id);
    return { data: question, message: "Question retrieved" };
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update question text, category, weight, or order" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateQuestionDto,
  ) {
    const question = await this.questionsService.update(id, dto);
    return { data: question, message: "Question updated" };
  }

  @Delete(":id")
  @Roles(UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete a question" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    await this.questionsService.remove(id);
  }
}
