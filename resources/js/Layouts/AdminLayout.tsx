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
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 bg-muted/50">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                    </div>
                    <div className="flex items-center gap-2 px-4">
                        <NavUser user={data.user} />
                    </div>
                </header>
                <div className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16">
                    <div className="flex items-center gap-2 px-4">{header}</div>
                    <div className="flex items-center gap-2 px-4">
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbMenu?.map((value, _index) => (
                                    <>
                                        <BreadcrumbItem>
                                            <Link
                                                href={value.url}
                                                className="transition-colors hover:text-foreground"
                                            >
                                                {value.title}
                                            </Link>
                                        </BreadcrumbItem>
                                        {breadcrumbMenu.length - 1 !==
                                        _index ? (
                                            <BreadcrumbSeparator className="hidden md:block" />
                                        ) : null}
                                    </>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

AdminLayout.persistent = true;
