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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { UsersService } from "./users.service.js";
import {
  CreateUserDto,
  UpdateUserDto,
  AssignUserDto,
  QueryUsersDto,
  BulkCreateUsersDto,
} from "./dto/index.js";
import { Roles } from "../../common/decorators/index.js";
import { RolesGuard } from "../../common/guards/index.js";
import { UserRole } from "../../../generated/prisma/client.js";

@Controller("users")
@ApiTags("Users")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create a new user (admin only)" })
  @ApiResponse({ status: 201, description: "User created" })
  @ApiResponse({ status: 409, description: "Email already in use" })
  async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return { data: user, message: "User created successfully" };
  }

  @Post("bulk")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Import multiple users at once — skips existing emails" })
  @ApiResponse({ status: 201, description: "Bulk import result" })
  async bulkCreate(@Body() dto: BulkCreateUsersDto) {
    const result = await this.usersService.bulkCreate(dto);
    return {
      data: result,
      message: `${result.created.length} created, ${result.skipped.length} skipped`,
    };
  }

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "List users with filters and pagination" })
  @ApiResponse({ status: 200, description: "Users list" })
  async findAll(@Query() query: QueryUsersDto) {
    const result = await this.usersService.findAll(query);
    return { data: result.data, message: "Users retrieved", meta: result.meta };
  }

  @Get(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get user by ID" })
  @ApiResponse({ status: 200, description: "User found" })
  @ApiResponse({ status: 404, description: "User not found" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const user = await this.usersService.findOne(id);
    return { data: user, message: "User retrieved" };
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update user details" })
  @ApiResponse({ status: 200, description: "User updated" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(id, dto);
    return { data: user, message: "User updated successfully" };
  }

  @Delete(":id")
  @Roles(UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Soft-delete a user" })
  @ApiResponse({ status: 204, description: "User deactivated" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    await this.usersService.remove(id);
  }

  @Post(":id/assign")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Assign user to department, level, or line manager" })
  @ApiResponse({ status: 200, description: "User assigned" })
  async assign(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: AssignUserDto,
  ) {
    const user = await this.usersService.assign(id, dto);
    return { data: user, message: "User assignment updated" };
  }
}
