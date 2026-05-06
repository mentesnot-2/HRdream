import React from 'react';
import type { ApplicantApi } from "@/types/applicants";

interface ApplicantCardProps {
    applicant: ApplicantApi;
}

const ApplicantCard: React.FC<ApplicantCardProps> = ({ applicant }) => {
    return (
        <div className="p-4 bg-white shadow rounded-lg" data-testid="applicant-card">
            <h3 className="text-base font-semibold text-gray-900" data-testid="applicant-name">
                {applicant.full_name}
            </h3>
            <p className="text-sm text-gray-500" data-testid="applicant-email">
                {applicant.email}
            </p>
            <div className="mt-3 space-y-1 flex flex-col items-start">
                <span className="inline-block text-xs font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded" data-testid="applicant-location">
                    📍 {applicant.location}
                </span>
                <span className="inline-block text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded" data-testid="applicant-position">
                    {applicant.position}
                </span>
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded" data-testid="applicant-department">
                    {applicant.department}
                </span>
            </div>
        </div>
    );
};

export default ApplicantCard;
