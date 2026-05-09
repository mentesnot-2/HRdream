"use client";

import React, { useEffect, useState } from "react";
import ProfilePageLeft from "./profileLeft/page";
import ProfilePageRight from "./profileRight/page";
import { apiGet } from "@/lib/api";
import type {
  PaginatedResponse,
  ProfileSummaryApi,
  UpcomingEventApi,
  UpcomingTaskApi,
} from "@/types/profile";

export default function ProfilePage() {
  const [summary, setSummary] = useState<ProfileSummaryApi | null>(null);
  const [events, setEvents] = useState<UpcomingEventApi[]>([]);
  const [tasks, setTasks] = useState<UpcomingTaskApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const [summaryRes, eventsRes, tasksRes] = await Promise.all([
          apiGet<ProfileSummaryApi>("/api/v1/profile/summary/"),
          apiGet<PaginatedResponse<UpcomingEventApi>>("/api/v1/profile/upcoming-events/"),
          apiGet<PaginatedResponse<UpcomingTaskApi>>("/api/v1/profile/upcoming-tasks/"),
        ]);

        setSummary(summaryRes);
        setEvents(eventsRes.results);
        setTasks(tasksRes.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    void run();
  }, []);

  if (loading) {
    return <div className="p-6 text-sm text-gray-500">Loading profile...</div>;
  }

  if (error || !summary) {
    return <div className="p-6 text-sm text-red-600">{error ?? "Unable to load profile."}</div>;
  }

  return (
    <div className="bg-white flex w-full max-sm:flex-col">
      <ProfilePageLeft summary={summary} tasks={tasks} />
      <ProfilePageRight summary={summary} events={events} />
    </div>
  );
}