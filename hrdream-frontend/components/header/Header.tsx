


import React from "react";

export default function Header() {
    return (
        <div className="relative w-full bg-white">
            <div className="flex items-center justify-between py-3">
                <div className="px-6 w-6/12">
                    <div className="flex items-center w-full border rounded-md pl-4 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 text-sm  focus:outline-none outline-none bg-zinc-50"
                        />
                        <div className="mx-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2 cursor-pointer">
                    <div className="w-8 h-8 ">
                        <img
                            src="https://avatar.iran.liara.run/public/boy?username=Ash"
                            alt="Profile"
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-sm font-medium text-gray-700">Admira Broom</div>
                    <div className="text-gray-500 hover:text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
