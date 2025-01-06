import Spinner from "@/components/Spinner"
import dynamic from "next/dynamic"


const Profile = dynamic(() => import('@/components/profile/page'), {
    loading: () => <Spinner />,
})
export default function ProfilePage() {
    return (
        <Profile/>
    )
}