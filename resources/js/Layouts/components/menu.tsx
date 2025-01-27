import { Bot, LayoutDashboard, DockIcon, LucideIcon } from "lucide-react";

const data = {
    navMain: [
        {
            title: "Platform",
            items: [
                {
                    title: "Dashboard",
                    url: "/dashboard",
                    icon: LayoutDashboard,
                },
                {
                    title: "Master Data",
                    url: "/master",
                    icon: Bot,
                    items: [
                        {
                            title: "Categories",
                            url: "/master/categories",
                        },
                    ],
                },
                {
                    title: "Report",
                    url: "/report",
                    icon: DockIcon,
                    items: [
                        {
                            title: "Monthly Report",
                            url: "/report/monthly",
                        },
                    ],
                },
            ],
        },
    ],
};

export default data;
