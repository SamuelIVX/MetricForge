import { columns, Payment } from "../components/table/columns"
import { DataTable } from "../components/table/data-table"

async function getData(): Promise<Payment[]> {
    return [
        {
            task: "728ed52f",
            title: "Task 1",
            status: "Pending",
            priority: "High",
            reviewer: "John Doe",
        },
        {
            task: "829ed52f",
            title: "Task 2",
            status: "Done",
            priority: "Medium",
            reviewer: "Jane Smith",
        },
        {
            task: "930ed52f",
            title: "Task 3",
            status: "Backlog",
            priority: "Low",
            reviewer: "John Doe",
        },
        {
            task: "1040ed52f",
            title: "Task 4",
            status: "Pending",
            priority: "a@example.com",
            reviewer: "Alice Johnson",
        },
        {
            task: "728ed52f",
            title: "Task 5",
            status: "Pending",
            priority: "m@example.com",
            reviewer: "Bob Brown",
        },
        {
            task: "829ed52f",
            title: "Task 6",
            status: "Done",
            priority: "j@example.com",
            reviewer: "John Doe",
        },
        {
            task: "930ed52f",
            title: "Task 7",
            status: "Backlog",
            priority: "s@example.com",
            reviewer: "Alice Johnson",
        },
        {
            task: "1040ed52f",
            title: "Task 8",
            status: "Pending",
            priority: "a@example.com",
            reviewer: "Alice Johnson",
        },
        {
            task: "728ed52f",
            title: "Task 9",
            status: "Pending",
            priority: "m@example.com",
            reviewer: "Bob Brown",
        },
        {
            task: "829ed52f",
            title: "Task 10",
            status: "Done",
            priority: "j@example.com",
            reviewer: "John Doe",
        },
        {
            task: "930ed52f",
            title: "Task 11",
            status: "Backlog",
            priority: "s@example.com",
            reviewer: "Alice Johnson",
        },
    ]
}

export default async function DecisionsPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}