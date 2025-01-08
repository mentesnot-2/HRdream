import dynamic from "next/dynamic"
import Spinner from "@/components/Spinner"


const PeopleList = dynamic(() => import('@/components/people/people'), { 
    loading: () => <Spinner />,
})
export default function PeoplePage() {

    return (
        <div className=" bg-white flex w-full">
            <PeopleList />
        </div>
    )
}