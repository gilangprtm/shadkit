"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";

export function NavMain({
    menus,
}: {
    menus: {
        title: string;
        items: {
            title: string;
            url: string;
            icon?: LucideIcon;
            isActive?: boolean;
            items?: {
                title: string;
                url: string;
                isActive?: boolean;
            }[];
        }[];
    }[];
}) {
    const { url } = usePage();

    const menuButton = (item: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
            isActive?: boolean;
        }[];
    }) => (
        <SidebarMenuButton
            asChild
            tooltip={item.title}
            subMenu={item.items}
            url={url}
            isActive={url.startsWith(item.url)}
        >
            <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
            </Link>
        </SidebarMenuButton>
    );

    return (
        <SidebarGroup>
            {menus.map((menu) => (
                <>
                    <SidebarGroupLabel>{menu.title}</SidebarGroupLabel>
                    <SidebarMenu
                        sidebar={menu.items.map((item) => menuButton(item))}
                    >
                        {menu.items.map((item) =>
                            item.items ? (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={url.startsWith(item.url)}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                tooltip={item.title}
                                                subMenu={item.items}
                                                url={url}
                                                isActive={url.startsWith(
                                                    item.url
                                                )}
                                            >
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                    >
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            isActive={
                                                                !!url.match(
                                                                    new RegExp(
                                                                        `^${subItem.url}`
                                                                    )
                                                                )
                                                            }
                                                        >
                                                            <Link
                                                                href={
                                                                    subItem.url
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ) : (
                                <SidebarMenuItem key={item.title}>
                                    {menuButton(item)}
                                </SidebarMenuItem>
                            )
                        )}
                    </SidebarMenu>
                </>
            ))}
        </SidebarGroup>
    );
}
