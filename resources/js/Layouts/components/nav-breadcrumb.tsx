import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@inertiajs/react";
import React from "react";

const NavBreadcrumb = ({
    header,
    breadcrumbMenu,
}: {
    header: React.ReactNode;
    breadcrumbMenu?: { title: string; url: string }[];
}) => (
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
                            {breadcrumbMenu.length - 1 !== _index ? (
                                <BreadcrumbSeparator className="hidden md:block" />
                            ) : null}
                        </>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    </div>
);

export default NavBreadcrumb;
