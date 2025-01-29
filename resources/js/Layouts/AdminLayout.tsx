import { AppSidebar } from "@/Layouts/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import { NavUser } from "./components/nav-user";
import NavbarHeader from "./components/nav-header";
import NavBreadcrumb from "./components/nav-breadcrumb";

const data = {
    user: {
        name: "Shadcn",
        email: "shad@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
};

export default function AdminLayout({
    header,
    children,
    breadcrumbMenu,
}: {
    header?: React.ReactNode;
    children: React.ReactNode;
    breadcrumbMenu?: {
        title: string;
        url: string;
    }[];
}) {
    const user = usePage().props.auth.user;
    data.user.name = user.name;
    data.user.email = user.email;

    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                {/* navheader */}
                <NavbarHeader user={data.user} />
                {/* breadcrumb */}
                <NavBreadcrumb
                    header={header}
                    breadcrumbMenu={breadcrumbMenu}
                />
                {/* content */}
                <div className="flex flex-col flex-1 gap-4 p-4 pt-0 bg-muted">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

AdminLayout.persistent = true;
