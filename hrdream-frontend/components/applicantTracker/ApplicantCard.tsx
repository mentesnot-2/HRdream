import React from 'react';

interface ApplicantCardProps {
    name: string;
    email: string;
    location: string;
    position: string;
    department: string;
    category: string;
}


const ApplicantCard: React.FC<ApplicantCardProps> = ({ name, email, location, position, department, category }) => {
    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-bbase font-semibold text-gray-900">
                {name}
            </h3>
            <p className="text-sm text-gray-500">
                {email}
            </p>
            <div className="mt-3 space-y-1 flex flex-col items-start">
                <span className="inline-block text-xs font-medium text-pint-600 bg-pink-100 px-2 py-1 rounded">
                    📍 {location}
                </span>
                <span className="inline-block text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                    {position}
                </span>
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {department}
                </span>
            </div>
        </div>
    )
}


export default ApplicantCard;