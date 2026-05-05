import React from "react";
import MetricsCard from "./MetricsCard";
import DepartmentChart from "./DepartmentChart";
import SummaryCard from "./SummaryCard";
import type { DashboardOverview } from "@/types/dashboard";

type DashboardLeftProps = {
    overview: DashboardOverview;
};

const DashboardLeft: React.FC<DashboardLeftProps> = ({ overview }) => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen space-y-6 w-7/12 max-sm:w-full">
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {overview.metrics.map((metric) => (
                    <MetricsCard
                        key={metric.id}
                        id={metric.id}
                        label={metric.label}
                        value={metric.value}
                        description={metric.description}
                    />
                ))}
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Employees by department</h3>
                <DepartmentChart labels={overview.department_chart.labels} data={overview.department_chart.data} />
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Total Company Expenses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {overview.summary_cards.map((card) => (
                        <SummaryCard
                            key={card.id}
                            id={card.id}
                            label={card.label}
                            value={card.value}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quality of Workflow</h3>
                <DepartmentChart labels={overview.quality_workflow.labels} data={overview.quality_workflow.data} />
            </div>
        </div>
    );
};

export default DashboardLeft;
