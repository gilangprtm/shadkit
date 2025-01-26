import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

const title = "Categories";

const breadcrumbMenu = [{ url: "/master/categories", title: "Categories" }];

function Categories() {
    return (
        <>
            <Head title={title} />
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                {/* Konten utama */}
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
