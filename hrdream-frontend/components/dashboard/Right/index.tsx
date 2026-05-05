import AnnouncementList from "./announcement/AnnouncemntList";
import RecentActivity from "./RecentActivity";
import type { DashboardOverview } from "@/types/dashboard";

type DashboardRightProps = {
    announcements: DashboardOverview["announcements"];
};

export default function DashboardRight({ announcements }: DashboardRightProps) {

    return (
        <div className=" bg-neutral-100 flex flex-col w-5/12 p-4 pr-6 max-sm:w-full">
            <AnnouncementList announcements={announcements} />
            <RecentActivity />
        </div>
    )
}