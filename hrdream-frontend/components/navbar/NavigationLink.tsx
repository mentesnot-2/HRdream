import { ReactNode } from "react";
import Link from "next/link";

interface NavigationLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function NavigationLink({ href, icon, label }: NavigationLinkProps) {
  return (
    <Link 
      href={href}  
      className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 "
    >
        {icon}
        <span>{label}</span>
    </Link>
  );
}
