import React from 'react';
import EmployeeWellnessChart from './EmployeeWellnessChart';
import LatestReports from './LatestReport';


export default function ReflectPage() {
    return (
        <div className=" bg-neutral-100 flex w-full p-6 flex-col max-sm:w-full max-sm:h-screen">
            <EmployeeWellnessChart />
            <LatestReports/>
        </div>
    )
}