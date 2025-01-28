"use client";
import React, { useState } from "react";
import RatingTable from "./RatingRow";
import { reports } from "@/data/reports";

interface Report {
    id: number;
    name: string;
    role: string;
    score: number;
    scoreColor: string;
    avatarUrl: string;
}


const LatestReports: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="p-4 rounded-lg w-full pb-0">
            <h2 className="text-lg font-semibold mb-4">Latest reports</h2>
            <div>
                {reports.map((report) => (
                    <div key={report.id} className="border-b last:border-none">
                        <div
                            className="flex justify-between items-center py-3"

                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                    onClick={() => toggleExpand(report.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                <img
                                    src={report.avatarUrl}
                                    alt={report.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h3 className="font-medium text-sm">{report.name}</h3>
                                    <p className="text-xs text-gray-500">{report.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className={`w-2.5 h-2.5 rounded-full ${report.scoreColor}`}
                                ></span>
                                <span className="text-sm font-medium text-gray-600">
                                    {report.score}
                                </span>
                            </div>
                        </div>
                        {expandedId === report.id && (
                            <RatingTable />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestReports;
