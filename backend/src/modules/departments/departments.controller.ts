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
import { DepartmentsService } from "./departments.service.js";
import { CreateDepartmentDto, UpdateDepartmentDto } from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";

@Controller("departments")
@ApiTags("Departments")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create a department" })
  @ApiResponse({ status: 201, description: "Department created" })
  async create(@Body() dto: CreateDepartmentDto) {
    const dept = await this.departmentsService.create(dto);
    return { data: dept, message: "Department created" };
  }

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "List all departments" })
  @ApiResponse({ status: 200, description: "Departments list" })
  async findAll() {
    const depts = await this.departmentsService.findAll();
    return { data: depts, message: "Departments retrieved" };
  }

  @Get(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get department by ID" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const dept = await this.departmentsService.findOne(id);
    return { data: dept, message: "Department retrieved" };
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update a department" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateDepartmentDto,
  ) {
    const dept = await this.departmentsService.update(id, dto);
    return { data: dept, message: "Department updated" };
  }

  @Delete(":id")
  @Roles(UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete a department" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    await this.departmentsService.remove(id);
  }
}
