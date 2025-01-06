import ProfilePageLeft from "./profileLeft/page";
import ProfilePageRight from "./profileRight/page";



export default function ProfilePage() {
    return (
        <div className=" bg-white flex w-full">
            <ProfilePageLeft />
            <ProfilePageRight />
        </div>
    )
}