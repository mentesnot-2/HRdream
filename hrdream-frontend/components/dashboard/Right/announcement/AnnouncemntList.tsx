import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import { announcements } from "@/data/announcement";


interface Announcement {
    id: number;
    title: string;
    date: string;
    timeAgo: string;
}


const AnnouncementList = () => {
    return (
        <div className="w-full rounded-lg">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-bold text-gray-900">Announcement</h1>
                <div className="text-sm text-gray-500 bg-blue-200 p-1 rounded-lg">
                    {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
                {announcements.length} active tasks
            </p>
            <div className="space-y-4">
                {
                    announcements.map((announcement) => (
                        <AnnouncementCard
                            key={announcement.id}
                            title={announcement.title}
                            date={announcement.date}
                            timeAgo={announcement.timeAgo}
                        />
                    ))
                }
            </div>
            <div className="text-center my-4">
                <button className="text-blue-500 hover:text-blue-700">See all announcements</button>
            </div>
        </div>
    )
}


export default AnnouncementList;