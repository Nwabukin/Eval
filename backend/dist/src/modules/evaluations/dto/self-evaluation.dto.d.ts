export declare class SelfScoreItemDto {
    readonly questionId: string;
    readonly score: number;
    readonly remarks?: string;
}
export declare class SaveSelfEvaluationDto {
    readonly answers: SelfScoreItemDto[];
}
