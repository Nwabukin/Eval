import { ConfigService } from "@nestjs/config";
export declare class NotificationsService {
    private readonly configService;
    private readonly logger;
    private readonly resend;
    private readonly fromEmail;
    constructor(configService: ConfigService);
    notifyCycleStarted(employeeEmails: string[], cycleName: string, evaluationLink: string): Promise<void>;
    notifySelfEvaluationSubmitted(managerEmail: string, employeeName: string, evaluationLink: string): Promise<void>;
    notifyManagerReviewSubmitted(calibrationEmails: string[], employeeName: string, departmentName: string, evaluationLink: string): Promise<void>;
    notifyEvaluationFinalized(employeeEmail: string, managerEmail: string, employeeName: string, reportLink: string): Promise<void>;
    private send;
}
