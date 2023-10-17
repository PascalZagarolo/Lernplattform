'use client';

import { BarChart3, Compass, Layout, List, Settings2Icon } from "lucide-react";
import Image from "next/image";
import SideBarItem from "./SideBarItem";
import { usePathname } from "next/navigation";
import Settings from "./Settings";


const guestRoutes = [
    {
        icon : Layout,
        label: 'Dashboard',
        href: "/"
    },
    {
        icon: Compass,
        label: "Durchsuchen..",
        href: "/search"
    }
]

const teacherRoutes = [
    {
        icon : List,
        label: 'Kurse',
        href: "/teacher/courses"
    },
    {
        icon: BarChart3,
        label: "Analytiken",
        href: "/teacher/analytics"
    }
]


const SideBarRoutes = () => {

    const pathname = usePathname();

    const isTeacherPage = pathname?.includes('/teacher');

    const routes = isTeacherPage ? teacherRoutes : guestRoutes
    return ( 
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SideBarItem 
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))}
            <div className="mt-[720px]">
                <Settings 
                icon={Settings2Icon}
                label="Einstellungen"
                />
            </div>
        </div>
     );
}
 
export default SideBarRoutes;