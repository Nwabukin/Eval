import { EvaluationsService } from "./evaluations.service.js";
import { SaveSelfEvaluationDto, SaveManagerReviewDto, SetCalibrationModeDto, SaveDirectCalibrationDto, SaveIndividualCalibrationDto, QueryEvaluationsDto } from "./dto/index.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
export declare class EvaluationsController {
    private readonly evaluationsService;
    constructor(evaluationsService: EvaluationsService);
    findAll(query: QueryEvaluationsDto): Promise<{
        data: unknown[];
        message: string;
        meta: import("../../common/interfaces/api-response.interface.js").PaginationMeta;
    }>;
    getMyEvaluation(user: AuthenticatedUser): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    saveSelf(id: string, user: AuthenticatedUser, dto: SaveSelfEvaluationDto): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    submitSelf(id: string, user: AuthenticatedUser): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    getPendingReviews(user: AuthenticatedUser): Promise<{
        data: ({
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        })[];
        message: string;
    }>;
    getManagerAll(user: AuthenticatedUser): Promise<{
        data: ({
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        })[];
        message: string;
    }>;
    saveManagerReview(id: string, user: AuthenticatedUser, dto: SaveManagerReviewDto): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    submitManager(id: string, user: AuthenticatedUser): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    getPendingCalibrations(user: AuthenticatedUser): Promise<{
        data: ({
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        })[];
        message: string;
    }>;
    setCalibrationMode(id: string, user: AuthenticatedUser, dto: SetCalibrationModeDto): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    saveDirectCalibration(id: string, user: AuthenticatedUser, dto: SaveDirectCalibrationDto): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    saveIndividualCalibration(id: string, user: AuthenticatedUser, dto: SaveIndividualCalibrationDto): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    getCalibrationScores(id: string, user: AuthenticatedUser): Promise<{
        data: {
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
        }[];
        message: string;
    }>;
    finalize(id: string, user: AuthenticatedUser): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
    getDetail(id: string, user: AuthenticatedUser): Promise<{
        data: {
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
            status: import("../../../generated/prisma/enums.js").EvaluationStatus;
            calibrationMode: import("../../../generated/prisma/enums.js").CalibrationMode | null;
            submittedAt: Date | null;
            managerSubmittedAt: Date | null;
            finalizedAt: Date | null;
            employeeId: string;
        };
        message: string;
    }>;
}
