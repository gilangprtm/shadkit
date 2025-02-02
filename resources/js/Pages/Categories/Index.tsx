"use client";

import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import TaskPage from "./Page";
import { Suspense } from "react";
import { PageProps } from "@/types";

const title = "Categories";

const breadcrumbMenu = [{ url: "/master/categories", title: "Categories" }];

interface Props extends PageProps {
    tasks: any[];
}

function Categories({ tasks }: Props) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <div className="flex-1 space-y-4">
                    <TaskPage tasks={tasks} />
                </div>
            </div>
        </>
    );
}

// Tambahkan layout secara persistent
Categories.layout = (page: React.ReactNode) => (
    <AdminLayout header={title} breadcrumbMenu={breadcrumbMenu}>
        {page}
    </AdminLayout>
);

export default Categories;
