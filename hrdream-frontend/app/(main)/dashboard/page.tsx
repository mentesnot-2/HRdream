import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";


const Dashboard = dynamic(() => import('@/components/dashboard/page'), {
    loading: () => <Spinner />,
})

export default function DashboardPage() {
    return (
        <Dashboard />
    )
}