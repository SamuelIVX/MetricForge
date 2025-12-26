import { columns, Payment } from "../components/table/columns"
import { DataTable } from "../components/table/data-table"

async function getData(): Promise<Payment[]> {
    return [
        {
            task: "728ed52f",
            title: "Task 1",
            status: "Pending",
            priority: "High",
            confidenceRate: "95%",
            reviewer: "John Doe",
        },
        {
            task: "829ed52f",
            title: "Task 2",
            status: "Done",
            priority: "Medium",
            confidenceRate: "88%",
            reviewer: "Jane Smith",
        },
        {
            task: "930ed52f",
            title: "Task 3",
            status: "Ignored",
            priority: "Low",
            confidenceRate: "76%",
            reviewer: "John Doe",
        },
        {
            task: "1040ed52f",
            title: "Task 4",
            status: "Pending",
            priority: "a@example.com",
            confidenceRate: "82%",
            reviewer: "Alice Johnson",
        },
        {
            task: "728ed52f",
            title: "Task 5",
            status: "Pending",
            priority: "m@example.com",
            confidenceRate: "90%",
            reviewer: "Bob Brown",
        },
        {
            task: "829ed52f",
            title: "Task 6",
            status: "Done",
            priority: "j@example.com",
            confidenceRate: "85%",
            reviewer: "John Doe",
        },
        {
            task: "930ed52f",
            title: "Task 7",
            status: "Ignored",
            priority: "s@example.com",
            confidenceRate: "78%",
            reviewer: "Alice Johnson",
        },
        {
            task: "1040ed52f",
            title: "Task 8",
            status: "Pending",
            priority: "a@example.com",
            confidenceRate: "92%",
            reviewer: "Alice Johnson",
        },
        {
            task: "728ed52f",
            title: "Task 9",
            status: "Pending",
            priority: "m@example.com",
            confidenceRate: "89%",
            reviewer: "Bob Brown",
        },
        {
            task: "829ed52f",
            title: "Task 10",
            status: "Done",
            priority: "j@example.com",
            confidenceRate: "87%",
            reviewer: "John Doe",
        },
        {
            task: "930ed52f",
            title: "Task 11",
            status: "Ignored",
            priority: "s@example.com",
            confidenceRate: "80%",
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