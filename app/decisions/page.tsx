import { columns, TaskDetails } from "../components/table/columns"
import { DataTable } from "../components/table/data-table"

async function getData(): Promise<TaskDetails[]> {
    return [
        {
            taskId: "728ed52f",
            awsService: "EC2",
            title: "Task 1",
            status: "Pending",
            priority: "High",
            confidenceRate: "95%",
            reviewer: "John Doe",
        },
        {
            taskId: "829ed52f",
            awsService: "S3",
            title: "Task 2",
            status: "Done",
            priority: "Medium",
            confidenceRate: "88%",
            reviewer: "Jane Smith",
        },
        {
            taskId: "930ed52f",
            awsService: "RDS",
            title: "Task 3",
            status: "Ignored",
            priority: "Low",
            confidenceRate: "76%",
            reviewer: "John Doe",
        },
        {
            taskId: "1040ed52f",
            awsService: "Lambda",
            title: "Task 4",
            status: "Todo",
            priority: "High",
            confidenceRate: "82%",
            reviewer: "Alice Johnson",
        },
        {
            taskId: "728ed52f",
            awsService: "DynamoDB",
            title: "Task 5",
            status: "Pending",
            priority: "High",
            confidenceRate: "90%",
            reviewer: "Bob Brown",
        },
        {
            taskId: "829ed52f",
            awsService: "CloudWatch",
            title: "Task 6",
            status: "Done",
            priority: "High",
            confidenceRate: "85%",
            reviewer: "John Doe",
        },
        {
            taskId: "930ed52f",
            awsService: "SNS",
            title: "Task 7",
            status: "Ignored",
            priority: "Medium",
            confidenceRate: "78%",
            reviewer: "Alice Johnson",
        },
        {
            taskId: "1040ed52f",
            awsService: "SQS",
            title: "Task 8",
            status: "Pending",
            priority: "Low",
            confidenceRate: "92%",
            reviewer: "Alice Johnson",
        },
        {
            taskId: "728ed52f",
            awsService: "IAM",
            title: "Task 9",
            status: "Todo",
            priority: "Medium",
            confidenceRate: "89%",
            reviewer: "Bob Brown",
        },
        {
            taskId: "829ed52f",
            awsService: "VPC",
            title: "Task 10",
            status: "Done",
            priority: "High",
            confidenceRate: "87%",
            reviewer: "John Doe",
        },
        {
            taskId: "930ed52f",
            awsService: "Route53",
            title: "Task 11",
            status: "Ignored",
            priority: "Low",
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