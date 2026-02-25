declare class BulkQuestionItem {
    readonly text: string;
    readonly category?: string;
    readonly weight?: number;
    readonly sortOrder?: number;
}
export declare class BulkCreateQuestionsDto {
    readonly sheetId: string;
    readonly questions: BulkQuestionItem[];
}
export {};
