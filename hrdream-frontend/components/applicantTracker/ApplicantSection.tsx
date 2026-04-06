import React from "react";
import ApplicantCard from "./ApplicantCard";

interface Applicant {
  id: number;
  name: string;
  email: string;
  location: string;
  position: string;
  department: string;
  category: string;
}

interface ApplicantSectionProps {
  title: string;
  applicants: Applicant[];
}





const ApplicantSection: React.FC<ApplicantSectionProps> = ({ title, applicants }) => {
  return (
    <div className="space-y-4 cursor-pointer">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <div className="space-y-4">
        {applicants.map((applicant) => (
          <ApplicantCard key={applicant.id} {...applicant} />
        ))}
      </div>
    </div>
  );
};

export default ApplicantSection;
