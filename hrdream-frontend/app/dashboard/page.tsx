
import ProfilePageRight from "@/components/profile/profileRight/page"
import ProfilePageLeft from "@/components/profile/profileLeft/page"


export default function DashboardPage() {
    return (

        <div className=" bg-white flex w-full">
            <ProfilePageLeft />
            <ProfilePageRight />
        </div>
    )
}