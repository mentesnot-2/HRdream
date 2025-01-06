import AnnouncementList from "./announcement/AnnouncemntList";
import RecentActivity from "./RecentActivity";


export default function DashboardRight() {

    return (
        <div className=" bg-neutral-100 flex flex-col w-5/12 p-4 pr-6">
            <AnnouncementList />
            <RecentActivity />
        </div>
    )
}