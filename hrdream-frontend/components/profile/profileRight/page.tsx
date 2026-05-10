import QuickCardAction from "./quickActionCard/QuickActions";
import Image from "next/image";
import Calendar from "./calendar"
import UpcomingEventCard from "./upComingEventCard";
import type {
    ProfileSummaryApi,
    UpcomingEventApi,
} from "@/types/profile"


interface ProfilePageRightProps {
    summary: ProfileSummaryApi;
    events: UpcomingEventApi[];
}


function formatEventDate(dateString: string) {
    const d = new Date(dateString);
    return d.toLocaleDateString(undefined, {day: "2-digit", month: "short"});
}


function formatEventTime(time:string | null) {
    if (!time) return "-";
    return time.slice(0, 5);

}

export default function ProfilePageRight({ summary, events }: ProfilePageRightProps) {
    return (
      <div className="bg-neutral-100 flex flex-col w-1/2 max-sm:w-full max-sm:pr-0 max-sm:mr-0">
        <div className="flex flex-col self-center">
          <h1 className="py-4 text-lg font-bold">Quick Action</h1>
          <div className="flex justify-end items-center gap-4 max-sm:flex-col">
            <QuickCardAction
              title="Reflection time"
              subtitle="10 questions"
              backgroundColor="bg-blue-500"
              icon={<Image src="/bulb.svg" width={32} height={32} alt="bulb" />}
            />
            <QuickCardAction
              title="Daily Progress"
              subtitle="1 task to goal"
              backgroundColor="bg-teal-500"
              icon={"82%"}
            />
            <QuickCardAction
              title="FAQ"
              subtitle="Find all the answers"
              backgroundColor="bg-indigo-300"
              icon={"FAQ"}
            />
          </div>
        </div>
        <Calendar />
        <p className="px-6 text-sm text-gray-500 mb-2">
          {summary.upcoming_events_count} upcoming events
        </p>
        {events.map((event) => (
          <UpcomingEventCard
            key={event.id}
            date={formatEventDate(event.event_date)}
            title={event.title}
            details={event.category || "Event"}
            time={formatEventTime(event.event_time)}
          />
        ))}
        <button type="button" className="text-md text-blue-500 my-4">
          See the entire schedule
        </button>
      </div>
    );
  }
