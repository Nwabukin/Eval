import { Module } from "@nestjs/common";
import { EvaluationSheetsController } from "./evaluation-sheets.controller.js";
import { EvaluationSheetsService } from "./evaluation-sheets.service.js";

@Module({
  controllers: [EvaluationSheetsController],
  providers: [EvaluationSheetsService],
  exports: [EvaluationSheetsService],
})
export class EvaluationSheetsModule {}
