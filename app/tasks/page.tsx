"use client"
import { columns, TaskDetails } from "../components/table/columns"
import { DataTable } from "../components/table/data-table"
import { useState, useMemo } from "react"
import { AddTaskDialog } from "../components/dialogs/AddTaskDialog"

const initialData: TaskDetails[] = [
    {
        taskId: "TASK-001",
        title: "Task 1",
        status: "Pending",
        priority: "High",
        confidenceRate: "95%",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-002",
        title: "Task 2",
        status: "Done",
        priority: "Medium",
        confidenceRate: "88%",
        reviewer: "Jane Smith",
    },
    {
        taskId: "TASK-003",
        title: "Task 3",
        status: "Ignored",
        priority: "Low",
        confidenceRate: "76%",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-004",
        title: "Task 4",
        status: "Todo",
        priority: "High",
        confidenceRate: "82%",
        reviewer: "Alice Johnson",
    },
    {
        taskId: "TASK-005",
        title: "Task 5",
        status: "Pending",
        priority: "High",
        confidenceRate: "90%",
        reviewer: "Bob Brown",
    },
    {
        taskId: "TASK-006",
        title: "Task 6",
        status: "Done",
        priority: "High",
        confidenceRate: "85%",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-007",
        title: "Task 7",
        status: "Ignored",
        priority: "Medium",
        confidenceRate: "78%",
        reviewer: "Alice Johnson",
    },
    {
        taskId: "TASK-008",
        title: "Task 8",
        status: "Pending",
        priority: "Low",
        confidenceRate: "92%",
        reviewer: "Alice Johnson",
    },
    {
        taskId: "TASK-009",
        title: "Task 9",
        status: "Todo",
        priority: "Medium",
        confidenceRate: "89%",
        reviewer: "Bob Brown",
    },
    {
        taskId: "TASK-010",
        title: "Task 10",
        status: "Done",
        priority: "High",
        confidenceRate: "87%",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-011",
        title: "Task 11",
        status: "Ignored",
        priority: "Low",
        confidenceRate: "80%",
        reviewer: "Alice Johnson",
    },
]

export default function DecisionsPage() {
    const [data, setData] = useState<TaskDetails[]>(initialData);

    const handleAddTask = (task: TaskDetails) => {
        setData((prev) => [...prev, task])
    }

    // update reviewer by taskId (safe when table is sorted/filtered/paginated)
    const handleUpdateReviewer = (taskId: string, reviewer: string) => {
        setData((prev) => prev.map((t) => (t.taskId === taskId ? { ...t, reviewer } : t)))
    }

    const memoData = useMemo(() => data, [data])
    const memoColumns = useMemo(() => columns, []);

    return (
        <div className="container mx-auto py-10">
            <DataTable 
                columns={memoColumns} 
                data={memoData}
                headerActions={<AddTaskDialog onAdd={handleAddTask} />}
                meta={{ updateData: handleUpdateReviewer }}
            />
        </div>
    )
}