import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";

const NavbarHeader = ({ user }: { user: any }) => (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 bg-muted/50">
        <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
        </div>
        <div className="flex items-center gap-2 px-4">
            <NavUser user={user} />
        </div>
    </header>
);

export default NavbarHeader;
