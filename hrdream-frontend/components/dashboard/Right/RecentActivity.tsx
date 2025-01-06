
import React from 'react';


interface Activity {
    id: number;
    time: string;
    title: string;
    description: string;
}


const activities: Activity[] = [
    {
        id: 1,
        time: "10:40 AM, Fri, Sept. 10, 2023",
        title: "Outing schedule for every department",
        description: "Check the job description and requirements to make sure everything is correct.",
    },
    {
        id: 2,
        time: "10:40 AM, Fri, Sept. 10, 2023",
        title: "Outing schedule for every department",
        description: "Check the job description and requirements to make sure everything is correct.",
    },
];


const RecentActivity: React.FC = () => {
    return (
        <div className="p-6 bg-blue-500 rounded-lg shadow-lg full py-4">
            <h2 className="text-lg font-bold text-white mb-3">
                Recent activity
            </h2>
            <div className="space-y-2">
                {
                    activities.map((activity) => (
                        <div key={activity.id}>
                            <div className="text-sm text-white">
                                {activity.time}
                            </div>
                            <h3 className='text-base font-semibold text-white'>
                                {activity.title}
                            </h3>
                            <p className='text-sm text-white'>
                                {activity.description}
                            </p>
                            {
                                activity.id != activities.length && <hr className='border border-white my-4' />
                            }
                        </div>
                    ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-white">Today you’ve completed 12 tasks</p>
                <button className="text-sm  text-black bg-white px-4 py-2 rounded hover:bg-blue-700">
                    See all tasks
                </button>
            </div>
        </div>
    )
}


export default RecentActivity;