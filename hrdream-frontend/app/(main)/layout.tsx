"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import LeftBar from "@/components/navbar/LeftBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSideBarOpen(false);
  }, [pathname]);
  return (
    <div className="flex h-screen max-sm:pl-0 max-sm:ml-0">
      <div className="hidden lg:block w-1/5 bg-gray-100">
        <LeftBar />
      </div>

      {/* Humburger and mobile sidebar */}
      <div className="lg:hidden">
        <button
          className="p-2 text-gray-600 transition-all duration-300 ease-in-out hover:text-gray-800"
          onClick={toggleSidebar}
          title="Open sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar overlay for small screens */}

      {
        isSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
          >
            <div
              className="fixed top-0 left-0 z-50 w-4/5 max-w-xs bg-white h-full shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <LeftBar />
            </div>
          </div>
        )
      }
      <div className="flex flex-col w-4/5 h-screen">
        <Header />
        <main className="bg-white overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
