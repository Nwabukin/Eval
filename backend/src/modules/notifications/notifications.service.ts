import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Resend } from "resend";

interface NotificationPayload {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);
  private readonly resend: Resend;
  private readonly fromEmail = "Performance Eval <onboarding@resend.dev>";

  constructor(private readonly configService: ConfigService) {
    this.resend = new Resend(
      this.configService.getOrThrow<string>("RESEND_API_KEY"),
    );
  }

  /**
   * Notifies all active employees that a new evaluation cycle has started
   * and they should begin their self-evaluation.
   */
  async notifyCycleStarted(
    employeeEmails: string[],
    cycleName: string,
    evaluationLink: string,
  ): Promise<void> {
    await Promise.all(
      employeeEmails.map((email: string) =>
        this.send({
          to: email,
          subject: `New Evaluation Cycle: ${cycleName}`,
          html: `
            <h2>Evaluation Cycle Started</h2>
            <p>A new performance evaluation cycle — <strong>${cycleName}</strong> — has begun.</p>
            <p>Please log in and complete your self-evaluation.</p>
            <p><a href="${evaluationLink}">Start Self-Evaluation</a></p>
          `,
        }),
      ),
    );
  }

  /**
   * Notifies the line manager that an employee submitted their self-evaluation.
   */
  async notifySelfEvaluationSubmitted(
    managerEmail: string,
    employeeName: string,
    evaluationLink: string,
  ): Promise<void> {
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

  /**
   * Notifies the calibration team that a line manager submitted their review.
   */
  async notifyManagerReviewSubmitted(
    calibrationEmails: string[],
    employeeName: string,
    departmentName: string,
    evaluationLink: string,
  ): Promise<void> {
    await Promise.all(
      calibrationEmails.map((email: string) =>
        this.send({
          to: email,
          subject: `Manager Review Complete: ${employeeName} (${departmentName})`,
          html: `
            <h2>Manager Review Submitted</h2>
            <p>The line manager review for <strong>${employeeName}</strong> in <strong>${departmentName}</strong> is complete.</p>
            <p>The evaluation is ready for calibration review.</p>
            <p><a href="${evaluationLink}">Perform Calibration</a></p>
          `,
        }),
      ),
    );
  }

  /**
   * Notifies the employee and line manager that the evaluation has been finalized.
   */
  async notifyEvaluationFinalized(
    employeeEmail: string,
    managerEmail: string,
    employeeName: string,
    reportLink: string,
  ): Promise<void> {
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

  private async send(payload: NotificationPayload): Promise<void> {
    try {
      await this.resend.emails.send({
        from: this.fromEmail,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
      });
      this.logger.log(`Email sent to ${payload.to}: ${payload.subject}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${payload.to}`, error);
    }
  }
}
