
export type RatingApi = {
    id: number;
    label: string;
    score: number;
    max_score: number;
    sort_order: number;

};

export type ReportApi = {
    id: number;
    title: string;
    summary: string;
    created_at: string;
};

export type PaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}