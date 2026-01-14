import { useMemo } from "react";

import { columns } from "@/app/components/tables/history_table/columns"
import { HistoryTable } from "@/app/components/tables/history_table/table"
import { HistoryDetails } from "@/app/components/tables/history_table/types";

const initialData: HistoryDetails[] = [
    {
        taskId: "TASK-001",
        title: "Task 1",
        status: "Accepted",
        time: "12:00pm",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-002",
        title: "Task 2",
        status: "Ignored",
        time: "12:00pm",
        reviewer: "Jane Smith",
    },
    {
        taskId: "TASK-003",
        title: "Task 3",
        status: "Expired",
        time: "12:00pm",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-004",
        title: "Task 4",
        status: "Expired",
        time: "12:00pm",
        reviewer: "Alice Johnson",
    },
    {
        taskId: "TASK-005",
        title: "Task 5",
        status: "Accepted",
        time: "12:00pm",
        reviewer: "Bob Brown",
    },
    {
        taskId: "TASK-006",
        title: "Task 6",
        status: "Accepted",
        time: "12:00pm",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-007",
        title: "Task 7",
        status: "Expired",
        time: "12:00pm",
        reviewer: "Alice Johnson",
    },
    {
        taskId: "TASK-008",
        title: "Task 8",
        status: "Ignored",
        time: "12:00pm",
        reviewer: "Alice Johnson",
    },
    {
        taskId: "TASK-009",
        title: "Task 9",
        status: "Accepted",
        time: "12:00pm",
        reviewer: "Bob Brown",
    },
    {
        taskId: "TASK-010",
        title: "Task 10",
        status: "Accepted",
        time: "12:00pm",
        reviewer: "John Doe",
    },
]

export default function History() {

    const memoColumns = useMemo(() => columns, []);

    return (
        <div className="container mx-auto py-10">
            <HistoryTable columns={memoColumns} data={initialData} />
        </div>
    )
}