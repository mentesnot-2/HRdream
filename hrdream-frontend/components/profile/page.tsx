import ProfilePageLeft from "./profileLeft/page";
import ProfilePageRight from "./profileRight/page";



export default function ProfilePage() {
    return (
        <div className=" bg-white flex w-full max-sm:flex-col">
            <ProfilePageLeft />
            <ProfilePageRight />
        </div>
    )
}