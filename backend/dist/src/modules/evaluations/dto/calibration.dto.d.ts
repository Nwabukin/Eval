import { CalibrationMode } from "../../../../generated/prisma/client.js";
export declare class SetCalibrationModeDto {
    readonly mode: CalibrationMode;
}
export declare class DirectFinalScoreItemDto {
    readonly questionId: string;
    readonly finalScore: number;
}
export declare class SaveDirectCalibrationDto {
    readonly answers: DirectFinalScoreItemDto[];
}
export declare class IndividualScoreItemDto {
    readonly questionId: string;
    readonly score: number;
}
export declare class SaveIndividualCalibrationDto {
    readonly answers: IndividualScoreItemDto[];
}
