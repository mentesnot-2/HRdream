export type DepartmentApi = {
    id: number;
    name: string;
}


export type EmployeeApi = {
    id: number;
    full_name: string;
    role_title: string;
    location: string;
    avatar_url: string;
    department: string;
    department_name?: string;
}

export type PaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}