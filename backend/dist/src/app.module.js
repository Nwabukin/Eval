var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { ThrottlerModule } from "@nestjs/throttler";
import { appConfigValidationSchema } from "./config/app.config.js";
import { DatabaseModule } from "./database/database.module.js";
import { HttpExceptionFilter } from "./common/filters/index.js";
import { TransformInterceptor } from "./common/interceptors/index.js";
import { AuthModule } from "./modules/auth/auth.module.js";
import { UsersModule } from "./modules/users/users.module.js";
import { DepartmentsModule } from "./modules/departments/departments.module.js";
import { LevelsModule } from "./modules/levels/levels.module.js";
import { EvaluationCyclesModule } from "./modules/evaluation-cycles/evaluation-cycles.module.js";
import { EvaluationSheetsModule } from "./modules/evaluation-sheets/evaluation-sheets.module.js";
import { EvaluationQuestionsModule } from "./modules/evaluation-questions/evaluation-questions.module.js";
import { EvaluationsModule } from "./modules/evaluations/evaluations.module.js";
import { NotificationsModule } from "./modules/notifications/notifications.module.js";
import { ReportsModule } from "./modules/reports/reports.module.js";
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: appConfigValidationSchema,
            }),
            ThrottlerModule.forRoot([{ ttl: 60000, limit: 60 }]),
            DatabaseModule,
            AuthModule,
            UsersModule,
            DepartmentsModule,
            LevelsModule,
            EvaluationCyclesModule,
            EvaluationSheetsModule,
            EvaluationQuestionsModule,
            EvaluationsModule,
            NotificationsModule,
            ReportsModule,
        ],
        providers: [
            { provide: APP_FILTER, useClass: HttpExceptionFilter },
            { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map