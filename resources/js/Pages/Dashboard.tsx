import AdminLayout from "@/Layouts/AdminLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const title = "Dashboard";

const breadcrumbMenu = [
    { url: "/dashboard", title: "Dashboard" },
    { url: "/dashboard/users", title: "Users" },
];

function Dashboard() {
    return (
        <>
            <Head title={title} />
            <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                {
                    <div className="flex flex-col gap-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div className="p-4 border rounded-lg shadow-sm bg-card text-card-foreground">
                                <div className="flex flex-row items-center justify-between pb-2 space-y-0">
                                    <h3 className="text-sm font-medium tracking-tight">
                                        Total Revenue
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold">
                                    Rp. 100.000.000
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm bg-card text-card-foreground">
                                <div className="flex flex-row items-center justify-between pb-2 space-y-0">
                                    <h3 className="text-sm font-medium tracking-tight">
                                        Subscriptions
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold">+2350</div>
                                <p className="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm bg-card text-card-foreground">
                                <div className="flex flex-row items-center justify-between pb-2 space-y-0">
                                    <h3 className="text-sm font-medium tracking-tight">
                                        Sales
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold">
                                    +12,234
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    +19% from last month
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm bg-card text-card-foreground">
                                <div className="flex flex-row items-center justify-between pb-2 space-y-0">
                                    <h3 className="text-sm font-medium tracking-tight">
                                        Active Now
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">
                                    +201 since last hour
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

// Tambahkan layout secara persistent
Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout header={title} breadcrumbMenu={breadcrumbMenu}>
        {page}
    </AdminLayout>
);

export default Dashboard;
