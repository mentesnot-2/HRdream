import React from "react";
import MetricsCard from "./MetricsCard";
import DepartmentChart from "./DepartmentChart";
import SummaryCard from "./SummaryCard";
import { metrics,departments,employeeData,qualityWorkflowData,qualityWorkflowLabels,summaryCards } from "@/app/data/dashboardData";

const DashboardLeft: React.FC = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen space-y-6 w-7/12 max-sm:w-full">
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((metric) => (
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
                <DepartmentChart labels={departments} data={employeeData} />
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Total Company Expenses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {summaryCards.map((card) => (
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
                <DepartmentChart labels={qualityWorkflowLabels} data={qualityWorkflowData} />
            </div>
        </div>
    );
};

export default DashboardLeft;
