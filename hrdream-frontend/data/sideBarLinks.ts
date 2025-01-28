import {
    MdOutlineDashboard,
    MdOutlinePeopleOutline,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiFuraffinity } from "react-icons/si";
import { BiReflectVertical } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import React from "react";

export const navLinks = [
    { 
        href: "/dashboard", 
        icon: React.createElement(MdOutlineDashboard ), 
        label: "Dashboard" 
    },
    {
        href: "/applicant-tracker",
        icon: React.createElement(TbReportAnalytics),
        label: "Applicant Tracker",
    },
    { 
        href: "/people", 
        icon: React.createElement(MdOutlinePeopleOutline), 
        label: "People" 
    },
    { 
        href: "/reflect", 
        icon: React.createElement(BiReflectVertical ), 
        label: "Reflect" 
    },
];

export const settingsLinks = [
    { 
        href: "/profile", 
        icon: React.createElement(IoSettingsOutline), 
        label: "Settings" 
    },
    { 
        href: "/auth/sign-in", 
        icon: React.createElement(IoIosLogOut), 
        label: "Logout" 
    },
];
