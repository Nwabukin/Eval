var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationsService_1;
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Resend } from "resend";
let NotificationsService = NotificationsService_1 = class NotificationsService {
    configService;
    logger = new Logger(NotificationsService_1.name);
    resend;
    fromEmail = "Performance Eval <onboarding@resend.dev>";
    constructor(configService) {
        this.configService = configService;
        this.resend = new Resend(this.configService.getOrThrow("RESEND_API_KEY"));
    }
    async notifyCycleStarted(employeeEmails, cycleName, evaluationLink) {
        await Promise.all(employeeEmails.map((email) => this.send({
            to: email,
            subject: `New Evaluation Cycle: ${cycleName}`,
            html: `
            <h2>Evaluation Cycle Started</h2>
            <p>A new performance evaluation cycle — <strong>${cycleName}</strong> — has begun.</p>
            <p>Please log in and complete your self-evaluation.</p>
            <p><a href="${evaluationLink}">Start Self-Evaluation</a></p>
          `,
        })));
    }
    async notifySelfEvaluationSubmitted(managerEmail, employeeName, evaluationLink) {
        await this.send({
            to: managerEmail,
            subject: `Self-Evaluation Submitted: ${employeeName}`,
            html: `
        <h2>Self-Evaluation Submitted</h2>
        <p><strong>${employeeName}</strong> has submitted their self-evaluation and it is ready for your review.</p>
        <p><a href="${evaluationLink}">Review Evaluation</a></p>
      `,
        });
    }
    async notifyManagerReviewSubmitted(calibrationEmails, employeeName, departmentName, evaluationLink) {
        await Promise.all(calibrationEmails.map((email) => this.send({
            to: email,
            subject: `Manager Review Complete: ${employeeName} (${departmentName})`,
            html: `
            <h2>Manager Review Submitted</h2>
            <p>The line manager review for <strong>${employeeName}</strong> in <strong>${departmentName}</strong> is complete.</p>
            <p>The evaluation is ready for calibration review.</p>
            <p><a href="${evaluationLink}">Perform Calibration</a></p>
          `,
        })));
    }
    async notifyEvaluationFinalized(employeeEmail, managerEmail, employeeName, reportLink) {
        const html = `
      <h2>Evaluation Finalized</h2>
      <p>The performance evaluation for <strong>${employeeName}</strong> has been finalized.</p>
      <p>The final report is now available for viewing.</p>
      <p><a href="${reportLink}">View Report</a></p>
    `;
        await Promise.all([
            this.send({ to: employeeEmail, subject: `Your Evaluation is Complete`, html }),
            this.send({ to: managerEmail, subject: `Evaluation Finalized: ${employeeName}`, html }),
        ]);
    }
    async send(payload) {
        try {
            await this.resend.emails.send({
                from: this.fromEmail,
                to: payload.to,
                subject: payload.subject,
                html: payload.html,
            });
            this.logger.log(`Email sent to ${payload.to}: ${payload.subject}`);
        }
        catch (error) {
            this.logger.error(`Failed to send email to ${payload.to}`, error);
        }
    }
};
NotificationsService = NotificationsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], NotificationsService);
export { NotificationsService };
//# sourceMappingURL=notifications.service.js.map