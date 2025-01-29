import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import React from "react";

const NavBreadcrumb = ({
    header,
    breadcrumbMenu,
}: {
    header: React.ReactNode;
    breadcrumbMenu?: { title: string; url: string }[];
}) => (
    <div className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16 bg-muted">
        <div className="flex items-center gap-2 px-4">{header}</div>
        <div className="flex items-center gap-2 px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbMenu && breadcrumbMenu.length > 0 && (
                        <>
                            {breadcrumbMenu.length < 4 ? (
                                <>
                                    {breadcrumbMenu.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <BreadcrumbItem>
                                                <Link
                                                    href={item.url}
                                                    className="transition-colors hover:text-foreground"
                                                >
                                                    {item.title}
                                                </Link>
                                            </BreadcrumbItem>
                                            {index <
                                                breadcrumbMenu.length - 1 && (
                                                <BreadcrumbSeparator className="hidden md:block" />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <BreadcrumbItem>
                                        <Link
                                            href={breadcrumbMenu[0].url}
                                            className="transition-colors hover:text-foreground"
                                        >
                                            {breadcrumbMenu[0].title}
                                        </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center gap-1">
                                                <BreadcrumbEllipsis className="w-4 h-4" />
                                                <span className="sr-only">
                                                    Toggle menu
                                                </span>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start">
                                                {breadcrumbMenu
                                                    .slice(1, -1)
                                                    .map((item, index) => (
                                                        <DropdownMenuItem
                                                            key={index}
                                                        >
                                                            <Link
                                                                href={item.url}
                                                                className="w-full"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <Link
                                            href={
                                                breadcrumbMenu[
                                                    breadcrumbMenu.length - 1
                                                ].url
                                            }
                                            className="transition-colors hover:text-foreground"
                                        >
                                            {
                                                breadcrumbMenu[
                                                    breadcrumbMenu.length - 1
                                                ].title
                                            }
                                        </Link>
                                    </BreadcrumbItem>
                                </>
                            )}
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    </div>
);

export default NavBreadcrumb;
