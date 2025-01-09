"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function NavigationLink({ href, icon, label }: NavigationLinkProps) {
  const currentPath = usePathname();
  const isActive = currentPath === href
  return (
    <Link 
      href={href}  
      className={`flex items-center space-x-2 p-2 rounded-md ${isActive ? 'text-blue-600' : ''}`}
    >
        {icon}
        <span>{label}</span>
    </Link>
  );
}
