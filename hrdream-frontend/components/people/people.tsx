"use client";

import React, { useState } from "react";
import Image from "next/image";
import filterIcon from "@/public/filter.svg";
import FilterPanel from "@/components/people/peopleFIlterPanel";
import { peopleData,departments } from "@/app/data/employeData";

const PeopleList: React.FC = () => {
    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
    const [filteredPeople, setFilteredPeople] = useState(peopleData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const toggleFilterPanel = () => {
        setIsFilterPanelVisible((prev) => !prev);
    };

    const handleFilter = (selectedDepartment: string) => {
        const filtered = peopleData.filter((person) => person.department === selectedDepartment);
        setFilteredPeople(filtered);
        setIsFilterPanelVisible(false);
        setCurrentPage(1);
    };

    const handleResetFilter = () => {
        setFilteredPeople(peopleData);
        setCurrentPage(1);
        setIsFilterPanelVisible(false);
    };

    
    const totalPages = Math.ceil(filteredPeople.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPeople = filteredPeople.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className=" bg-white flex w-full">
            <div className="p-6 bg-neutral-50 min-h-screen w-full">
                <header className="mb-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">People</h1>
                        <p className="text-sm text-gray-600">{filteredPeople.length} employees</p>
                    </div>
                    <div
                        className="flex items-center text-sm text-gray-600 gap-2 cursor-pointer"
                        onClick={toggleFilterPanel}
                    >
                        <Image src={filterIcon} alt="Filter" />
                        Filter
                    </div>
                </header>
                <hr className="" />
                <div className="space-y-2">
                    {currentPeople.map((person) => (
                        <div key={person.id}>
                            <div
                                key={person.id}
                                className="flex items-center justify-between p-3 pl-0 rounded-lg"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <Image
                                        src={person.avatar}
                                        alt={person.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">{person.name}</h3>
                                        <p className="text-sm text-gray-500">{person.role}</p>
                                    </div>
                                </div>
                                <div className="flex-1 justify-center items-center">
                                    <div className="flex flex-col text-center">
                                        <p className="text-sm text-gray-500">{person.location}</p>
                                        <p className="text-sm text-gray-500">{person.time}</p>
                                    </div>
                                </div>

                                <div className="flex-1 text-right">
                                    <span className="inline-block text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        {person.department}
                                    </span>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    ))}

                </div>
                <div className="mt-6 flex justify-center items-center gap-4">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="text-blue-500 hover:text-blue-700 disabled:text-gray-300"
                    >
                        ←
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded ${currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "text-blue-500 hover:text-blue-700"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="text-blue-500 hover:text-blue-700 disabled:text-gray-300"
                    >
                        →
                    </button>
                </div>
                {isFilterPanelVisible && (
                    <FilterPanel
                        departments={departments}
                        onFilter={handleFilter}
                        onReset={handleResetFilter}
                    />
                )}
            </div>
        </div>
    );
};

export default PeopleList;
