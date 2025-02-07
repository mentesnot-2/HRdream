import React from 'react';

interface ApplicantCardProps {
    name: string;
    email: string;
    location: string;
    position: string;
    department: string;
}

const ApplicantCard: React.FC<ApplicantCardProps> = ({ name, email, location, position, department }) => {
    return (
        <div className="p-4 bg-white shadow rounded-lg" data-testid="applicant-card">
            <h3 className="text-base font-semibold text-gray-900" data-testid="applicant-name">
                {name}
            </h3>
            <p className="text-sm text-gray-500" data-testid="applicant-email">
                {email}
            </p>
            <div className="mt-3 space-y-1 flex flex-col items-start">
                <span className="inline-block text-xs font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded" data-testid="applicant-location">
                    📍 {location}
                </span>
                <span className="inline-block text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded" data-testid="applicant-position">
                    {position}
                </span>
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded" data-testid="applicant-department">
                    {department}
                </span>
            </div>
        </div>
    );
};

export default ApplicantCard;
