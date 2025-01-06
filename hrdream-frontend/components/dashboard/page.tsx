import DashboardLeft from "./Left/page";
import DashboardRight from "./Right/index";



export default function Dashboard() {
    return (
        <div className=" bg-white flex flex-row w-full">
            <DashboardLeft/>
            <DashboardRight/>
        </div>
    )
}