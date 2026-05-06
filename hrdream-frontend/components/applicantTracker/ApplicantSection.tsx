import React from "react";
import ApplicantCard from "./ApplicantCard";
import type { ApplicantApi } from "@/types/applicants";


interface ApplicantSectionProps {
  title: string;
  applicants: ApplicantApi[];
}

const ApplicantSection: React.FC<ApplicantSectionProps> = ({ title, applicants }) => {
  return (
    <div className="space-y-4 cursor-pointer">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <div className="space-y-4">
        {applicants.map((applicant) => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
      </div>
    </div>
  );
};

export default ApplicantSection;
