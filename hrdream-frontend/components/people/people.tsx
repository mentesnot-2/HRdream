"use client";

import React, { useEffect, useState,useMemo } from "react";
import Image from "next/image";
// import filterIcon from "@/public/filter.svg";
import FilterPanel from "@/components/people/peopleFIlterPanel";
import { apiGet } from "@/lib/api";
import { DepartmentApi, EmployeeApi ,PaginatedResponse} from "@/types/people";



const ITEMS_PER_PAGE = 5;

const PeopleList: React.FC = () => {
    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
    const [employees, setEmployees] = useState<EmployeeApi[]>([]);
    const [departments, setDepartments] = useState<DepartmentApi[]>([]);
    const [selectDepartment, setSelectDepartment] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    

    const toggleFilterPanel = () => {
        setIsFilterPanelVisible((prev) => !prev);
    };

    const handleFilter = (departmentName: string) => {
        setSelectDepartment(departmentName);
        setCurrentPage(1);
        setIsFilterPanelVisible(false);
    };

    const handleResetFilter = () => {
        setSelectDepartment(null);
        setCurrentPage(1);
        setIsFilterPanelVisible(false);
    };


   useEffect(() => {
    const run = async () => {
        try {
            setLoading(true);
            setError(null);

            const [employeesRes, departmentsRes] = await Promise.all([
                apiGet<PaginatedResponse<EmployeeApi>>("/api/v1/employees/"),
                apiGet<PaginatedResponse<DepartmentApi>>("/api/v1/departments/"),
            ]);

            setEmployees(employeesRes.results);
            setDepartments(departmentsRes.results);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to load people and departments";
            setError(message);
        } finally {
            setLoading(false);
        }
    }
    void run();
   }, []);

   const filteredPeople = useMemo(() => {
    if (!selectDepartment) return employees;
    return employees.filter((employee) => employee.department_name === selectDepartment);
   }, [employees, selectDepartment]);

   const totalPages = Math.max(1, Math.ceil(filteredPeople.length / ITEMS_PER_PAGE));
   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const currentPeople = filteredPeople.slice(startIndex, startIndex + ITEMS_PER_PAGE)


   if (loading) {
    return (
        <div className="bg-white flex w-full">
            <div className="p-6 bg-neutral-50 min-h-screen w-full">
            <h1 className="text-2xl font-bold text-gray-900">People</h1>
            <p className="text-sm text-gray-600 mt-2">Loading employees...</p>
            </div>
        </div>
        );
    }
    if (error) {
        return (
        <div className="bg-white flex w-full">
            <div className="p-6 bg-neutral-50 min-h-screen w-full">
            <h1 className="text-2xl font-bold text-gray-900">People</h1>
            <p className="text-sm text-red-600 mt-2">{error}</p>
            </div>
        </div>
        );
    }

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
                        <Image src={"/filter.svg"} alt="Filter" />
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
                                        src={person.avatar_url}
                                        alt={person.full_name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">{person.full_name}</h3>
                                        <p className="text-sm text-gray-500">{person.role_title}</p>
                                    </div>
                                </div>
                                <div className="flex-1 justify-center items-center">
                                    <div className="flex flex-col text-center">
                                        <p className="text-sm text-gray-500">{person.location}</p>
                                        {/* <p className="text-sm text-gray-500">{person.created_at}</p> */}
                                    </div>
                                </div>

                                <div className="flex-1 text-right">
                                    <span className="inline-block text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        {person.department_name ?? "Unknown"}
                                    </span>
                                </div>
                            </div>
                            <hr />
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
                        departments={departments.map((department) => department.name ?? "Unknown")}
                        onFilter={handleFilter}
                        onReset={handleResetFilter}
                    />
                )}
            </div>
        </div>
    );
};

export default PeopleList;
