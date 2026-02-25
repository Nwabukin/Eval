import { Module } from "@nestjs/common";
import { EvaluationCyclesController } from "./evaluation-cycles.controller.js";
import { EvaluationCyclesService } from "./evaluation-cycles.service.js";
import { NotificationsModule } from "../notifications/notifications.module.js";

@Module({
  imports: [NotificationsModule],
  controllers: [EvaluationCyclesController],
  providers: [EvaluationCyclesService],
  exports: [EvaluationCyclesService],
})
export class EvaluationCyclesModule {}
