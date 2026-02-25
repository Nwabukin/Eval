import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service.js";
import { EvaluationStatus, CalibrationMode } from "../../../generated/prisma/client.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
import type { PaginationMeta } from "../../common/interfaces/index.js";
import { NotificationsService } from "../notifications/notifications.service.js";
import type { SaveSelfEvaluationDto, SaveManagerReviewDto, SaveDirectCalibrationDto, SaveIndividualCalibrationDto, QueryEvaluationsDto } from "./dto/index.js";
export declare class EvaluationsService {
    private readonly prisma;
    private readonly notificationsService;
    private readonly configService;
    private readonly logger;
    constructor(prisma: PrismaService, notificationsService: NotificationsService, configService: ConfigService);
    findAll(query: QueryEvaluationsDto): Promise<{
        data: unknown[];
        meta: PaginationMeta;
    }>;
    getMyEvaluation(user: AuthenticatedUser): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    saveSelfEvaluation(evalId: string, userId: string, dto: SaveSelfEvaluationDto): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    submitSelfEvaluation(evalId: string, userId: string): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    getPendingReviews(managerId: string): Promise<({
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    })[]>;
    getManagerEvaluations(managerId: string): Promise<({
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    })[]>;
    saveManagerReview(evalId: string, managerId: string, dto: SaveManagerReviewDto): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    submitManagerReview(evalId: string, managerId: string): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    getPendingCalibrations(calibratorId: string): Promise<({
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    })[]>;
    setCalibrationMode(evalId: string, calibratorId: string, mode: CalibrationMode): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    saveDirectCalibration(evalId: string, calibratorId: string, dto: SaveDirectCalibrationDto): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    saveIndividualCalibration(evalId: string, calibratorId: string, dto: SaveIndividualCalibrationDto): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    getCalibrationScores(evalId: string, calibratorId: string): Promise<{
        questionId: string;
        questionText: string;
        sheet: {
            id: string;
            name: string;
            minScore: number;
            maxScore: number;
        };
        individualScores: ({
            calibrator: {
                id: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            score: number;
            scoredAt: Date;
            answerId: string;
            calibratorId: string;
        })[];
        aggregate: number | null;
    }[]>;
    finalize(evalId: string, calibratorId: string): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    getEvaluationDetail(evalId: string, user: AuthenticatedUser): Promise<{
        cycle: {
            id: string;
            name: string;
        };
        answers: ({
            calibrationIndividualScores: ({
                calibrator: {
                    id: string;
                    firstName: string;
                    lastName: string;
                };
            } & {
                id: string;
                score: number;
                scoredAt: Date;
                answerId: string;
                calibratorId: string;
            })[];
            question: {
                id: string;
                weight: number;
                sortOrder: number;
                text: string;
                category: string | null;
                sheet: {
                    id: string;
                    name: string;
                    weight: number;
                    minScore: number;
                    maxScore: number;
                    sortOrder: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            selfScore: number | null;
            selfRemarks: string | null;
            managerScore: number | null;
            managerRemarks: string | null;
            finalScore: number | null;
            evaluationId: string;
            questionId: string;
        })[];
        employee: {
            id: string;
            departmentId: string | null;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        status: EvaluationStatus;
        calibrationMode: CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        employeeId: string;
    }>;
    private getActiveCycle;
    private getEvaluationOrThrow;
    private validateScoreRanges;
    private assertOwner;
    private assertStatus;
    private assertCalibrationMode;
    private assertManager;
    private assertCalibrator;
    private get frontendUrl();
    private notifyManagerOfSelfSubmission;
    private notifyCalibrationTeamOfManagerSubmission;
    private notifyFinalization;
}
