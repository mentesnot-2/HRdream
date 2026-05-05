"use client";

import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import type { DashboardOverview } from "@/types/dashboard";


interface AnnouncementView {
    id: number;
    title: string;
    date: string;
    timeAgo: string;
}

function formatAnnouncementDate(iso: string): {date: string, timeAgo: string} {
    const date = new Date(iso).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const diffMs = Date.now() - new Date(iso).getTime();
    const diffMin = Math.max(1, Math.floor(diffMs / 60000));

    if (diffMin < 60) return {date, timeAgo: `${diffMin} minutes ago`};

    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return {date, timeAgo:`${diffHours} hours ago`};

    const diffDays = Math.floor(diffHours / 24);
    return {date, timeAgo: `${diffDays} days ago`};

}

type AnnouncementListProps = {
    announcements: DashboardOverview["announcements"];
};

const AnnouncementList: React.FC<AnnouncementListProps> = ({ announcements }) => {
    const mappedAnnouncements: AnnouncementView[] = announcements.map((item) => {
        const { date, timeAgo } = formatAnnouncementDate(item.created_at);
        return {
            id: item.id,
            title: item.title,
            date,
            timeAgo,
        };
    });

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
                {mappedAnnouncements.length} active announcements
            </p>
            <div className="space-y-4">
                {
                    mappedAnnouncements.map((announcement) => (
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