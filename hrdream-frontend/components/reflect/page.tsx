import React from 'react';
import EmployeeWellnessChart from './EmployeeWellnessChart';
import LatestReports from './LatestReport';
import RatingTable from './RatingRow';


export default function ReflectPage() {
    return (
        <div className=" bg-neutral-100 flex w-full p-6 flex-col ">
            <EmployeeWellnessChart />
            <LatestReports/>
            {/* <RatingTable/> */}
        </div>
    )
}