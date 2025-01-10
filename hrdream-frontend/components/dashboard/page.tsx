import React from 'react';
import DashboardLeft from "./Left/page";
import DashboardRight from "./Right/index";



export default function Dashboard() {
    return (
        <div className=" bg-white flex w-full max-sm:flex-col">
            <DashboardLeft/>
            <DashboardRight/>
        </div>
    )
}