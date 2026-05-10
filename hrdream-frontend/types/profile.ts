export type ProfileSummaryApi = {
    user_id: number;
    organization_id: number;
    upcoming_events_count: number;
    upcoming_tasks_count: number;
};


export type UpcomingEventApi = {
    id: number;
    title: string;
    event_date: string;
    event_time: string | null;
    category: string;
}


export type UpcomingTaskApi = {
    id: number;
    title: string;
    due_date: string | null;
    status:"todo" | "in_progress" | "done";
    priority:"low" | "medium" | "high";
};



export type UserSettingsApi = {
    theme: string;
    language: string;
    notifications_enabled: boolean;
}


export type PaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}