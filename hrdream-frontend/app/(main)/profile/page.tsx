import ProfilePageLeft from "@/components/profile/profileLeft/page";
import ProfilePageRight from "@/components/profile/profileRight/page";



export default function ProfilePage() {
    return (
        <div className=" bg-white flex w-full">
            <ProfilePageLeft />
            <ProfilePageRight />
        </div>
    )
}