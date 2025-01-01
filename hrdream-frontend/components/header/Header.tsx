


import React from "react";

export default function Header() {
  return (
    <div className="relative w-full bg-white">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer">
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

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
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
                d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-6 0h6m-6 0H7m0 0h6m-6 0V4m6 16V4m0 0H7m6 0h2a2 2 0 012 2v8a2 2 0 01-2 2h-2"
              />
            </svg>
          </div>
          <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <h1>Hi</h1>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 ">
            <img
              src="https://via.placeholder.com/32"
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
