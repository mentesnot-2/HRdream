import React from "react";
import Header from "@/components/header/Header";
import LeftBar from "@/components/navbar/LeftBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-100">
        <LeftBar />
      </div>
      <div className="flex flex-col w-4/5 h-screen">
        <Header />
        <main className="bg-white">{children}</main>
      </div>
    </div>
  );
}
