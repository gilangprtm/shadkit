"use client";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

interface TaskPageProps {
    tasks: any[];
}

export default function TaskPage({ tasks }: TaskPageProps) {
    return (
        <>
            <Card>
                <CardHeader></CardHeader>
                <CardContent>
                    <DataTable data={tasks} columns={columns} />
                </CardContent>
            </Card>
        </>
    );
}
