import { Module } from "@nestjs/common";
import { EvaluationsController } from "./evaluations.controller.js";
import { EvaluationsService } from "./evaluations.service.js";
import { NotificationsModule } from "../notifications/notifications.module.js";

@Module({
  imports: [NotificationsModule],
  controllers: [EvaluationsController],
  providers: [EvaluationsService],
  exports: [EvaluationsService],
})
export class EvaluationsModule {}
