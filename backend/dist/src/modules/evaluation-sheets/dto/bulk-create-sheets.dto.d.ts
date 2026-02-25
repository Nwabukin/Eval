declare class BulkSheetItem {
    readonly name: string;
    readonly weight?: number;
    readonly minScore?: number;
    readonly maxScore?: number;
    readonly sortOrder?: number;
    readonly departmentId: string;
    readonly levelId: string;
}
export declare class BulkCreateSheetsDto {
    readonly cycleId: string;
    readonly sheets: BulkSheetItem[];
}
export {};
