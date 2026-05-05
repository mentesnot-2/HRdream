"use client";

import React, { useState,useEffect } from "react";
import AnnouncementCard from "./AnnouncementCard";
import { apiGet } from "@/lib/api";
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

const AnnouncementList = () => {
    const [items, setItems] = useState<AnnouncementView[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const run = async () => {
            try {
                setLoading(true)
                setError(null)
                
                const data = await apiGet<DashboardOverview>("/api/v1/dashboard/overview")

                const mapped = data.announcements.map((item) => {
                    const {date, timeAgo} = formatAnnouncementDate(item.created_at)
                    return {
                        id:item.id,
                        title:item.title,
                        date,
                        timeAgo
                    };
                });
                setItems(mapped);
            } catch (err) {
                const message = err instanceof Error ? err.message : "Failed to load announcements";
                setError(message);
            } finally {
                setLoading(false);
            }
        }
        void run()
    },[]);

    if (loading) {
        return <p className="text-sm text-gray-500">Loading announcements...</p>;
      }

    if (error) {
        return <div className="text-red-500">{error}</div>
    }
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
                {items.length} active announcements
            </p>
            <div className="space-y-4">
                {
                    items.map((announcement) => (
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