import React, { useEffect ,useState} from 'react';
import DashboardLeft from "./Left/page";
import DashboardRight from "./Right/index";
import type { DashboardOverview } from "@/types/dashboard";
import {apiGet} from "@/lib/api";



export default function Dashboard() {
    const [overview, setOverview] = useState<DashboardOverview | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const run = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const data = await apiGet<DashboardOverview>("/api/v1/dashboard/overview")
                setOverview(data)
            } catch (err) {
                const message = err instanceof Error ? err.message : "Failed to load dashboard";
                setError(message);
            } finally {
                setLoading(false);
            }
        }
        void run();
    }, []);

    if (loading) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen space-y-6 w-7/12 max-sm:w-full">
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Loading dashboard...</p>
            </div>
        );
    }

    if (error || !overview) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen space-y-6 w-7/12 max-sm:w-full">
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">{error ?? "Unable to load dashboard."}</p>
            </div>
        );
    }

    return (
        <div className=" bg-white flex w-full max-sm:flex-col">
            <DashboardLeft overview={overview} />
            <DashboardRight announcements={overview.announcements} />
        </div>
    );
}