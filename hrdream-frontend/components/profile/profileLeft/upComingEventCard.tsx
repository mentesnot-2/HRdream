import React from "react"

interface EventCardProps {
    date:string;
    title:string;
    details:string;
    time:string
}


const UpcomingEventCard:React.FC<EventCardProps> = ({date,title,details,time}) => {
    return (
    <div className="flex items-center rounded-lg px-6 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-start text-gray-800">
            {date}
        </div>
        <div className="ml-4 flex-1">
            <h3 className="text-sm font-semibold text-gray-900">
                {title}
            </h3>
            <p className="text-xs text-gray-500">
                {details}
            </p>
        </div>
        {/* for the time part */}
        <div className="text-xs text-gray-500">
            {time}
        </div>
    </div>
    )
}

export default UpcomingEventCard