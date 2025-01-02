"use client";
import { useState, useEffect } from "react";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState<(number | null)[]>([]);

    const getCurrentWeek = (date: Date) => {
        const today = date.getDay();
        const monthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const currentDate = date.getDate();

        const startDay = currentDate - today;
        const endDay = startDay + 6;

        const week = [];
        for (let i = startDay; i <= endDay; i++) {
            week.push(i > 0 && i <= monthDays ? i : null);
        }
        return week;
    };

    useEffect(() => {
        setCurrentWeek(getCurrentWeek(currentDate));
    }, [currentDate]);

    const getMonthName = (date: Date) =>
        date.toLocaleString("default", { month: "long" });

    const monthName = getMonthName(currentDate);
    const year = currentDate.getFullYear();

    return (
        <div className="p-6 max-w-l rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                    {monthName} {year}
                </h2>
            </div>

            <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <div key={index} className="py-2">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 text-center">
                {currentWeek.map((day, index) => (
                    <div
                        key={index}
                        className={`py-2 rounded ${day === currentDate.getDate()
                            ? "bg-white text-blue-500 font-bold"
                            : "text-gray-700"
                            }`}
                    >
                        {day || ""}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
