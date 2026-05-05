export type DashboardCard = {
    id:number;
    label:string;
    value:string;
    description:string;
}


export type DashboardOverview = {
    metrics:DashboardCard[];
    summary_cards: DashboardCard[];
    department_cahrt: {
        labels:string[];
        data:number[];
    };
    quality_workflow: {
        labels:string[];
        data:number[];
    };
    announcements: {
        id:number;
        title:string;
        created_at:string;
    }

}