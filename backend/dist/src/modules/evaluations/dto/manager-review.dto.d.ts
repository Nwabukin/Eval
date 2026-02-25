export declare class ManagerScoreItemDto {
    readonly questionId: string;
    readonly score: number;
    readonly remarks?: string;
}
export declare class SaveManagerReviewDto {
    readonly answers: ManagerScoreItemDto[];
}
