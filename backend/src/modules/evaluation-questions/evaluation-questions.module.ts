import { Module } from "@nestjs/common";
import { EvaluationQuestionsController } from "./evaluation-questions.controller.js";
import { EvaluationQuestionsService } from "./evaluation-questions.service.js";

@Module({
  controllers: [EvaluationQuestionsController],
  providers: [EvaluationQuestionsService],
  exports: [EvaluationQuestionsService],
})
export class EvaluationQuestionsModule {}
