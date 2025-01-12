import QuickCardAction from "./quickActionCard/QuickActions";
import Image from "next/image";
import Calendar from "./calendar";
import UpcomingEventCard from "./upComingEventCard";
import eventsData from "@/app/data/upcomingTasks";


export default function ProfilePageRight() {
    return (
        <div className="bg-neutral-100 flex flex-col w-1/2 max-sm:w-full max-sm:pr-0 max-sm:mr-0">
            <div className="flex flex-col self-center">
                <h1 className="py-4 text-lg font-bold">Quick Action</h1>
                <div className="flex justify-end items-center gap-4 max-sm:flex-col">
                    <QuickCardAction
                        title="Reflection time"
                        subtitle="10 questions"
                        backgroundColor="bg-blue-500"
                        icon={
                            <Image
                                src="/bulb.svg"
                                width={32}
                                height={32}
                                alt="bulb"
                            />}
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
            {eventsData.map((event, index) => (
                <UpcomingEventCard
                    key={index}
                    date={event.date}
                    title={event.title}
                    details={event.details}
                    time={event.time}
                />
            ))}
            <button
                type="button"
                className="text-md text-blue-500 my-4"
            >
                See the entire schedule
            </button>

        </div>
    )
}