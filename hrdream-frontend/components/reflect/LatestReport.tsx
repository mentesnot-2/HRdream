import React from "react";
import type { ReportApi } from "@/types/reflect";

interface LatestReportProps {
  report: ReportApi;
}

const LatestReport: React.FC<LatestReportProps> = ({ report }) => {
  const date = new Date(report.created_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">{report.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{report.summary}</p>
      <p className="text-xs text-gray-400 mt-3">{date}</p>
    </div>
  );
};

export default LatestReport;