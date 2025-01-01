
import ProfilePage from "@/components/profile/profileLeft/page"
import ProfilePages from "@/components/profile/profileRight/page"


export default function DashboardPage() {
    return (

        <div className=" bg-white flex w-full h-screen">
            <ProfilePages />
            <ProfilePage/>
        </div>
    )
}