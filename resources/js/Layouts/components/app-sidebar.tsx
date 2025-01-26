"use client";

import * as React from "react";
import { Bot, LayoutDashboard } from "lucide-react";

import { NavMain } from "@/Layouts/components/nav-main";
import { NavUser } from "@/Layouts/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import { usePage } from "@inertiajs/react";

// This is sample data.

const data = {
    user: {
        name: "Shadcn",
        email: "shad@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Master Data",
            url: "",
            icon: Bot,
            items: [
                {
                    title: "Categories",
                    url: "/master/categories",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = usePage().props.auth.user;
    data.user.name = user.name;
    data.user.email = user.email;
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <NavUser user={data.user} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter />
            <SidebarRail />
        </Sidebar>
    );
}
