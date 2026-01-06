"use client"
import { ColumnDef } from "@tanstack/react-table"
import {
    ArrowUpDown,
    Timer,
    CircleCheckBig,
    Circle,
    CircleX,
    LucideProps,
    MoveUp,
    MoveDown,
    Minus,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export type TaskDetails = {
    taskId: string
    title: string
    status: "Pending" | "Done" | "Todo" | "Ignored" | ""
    priority: string
    confidenceRate: string
    reviewer: string
}

export const columns: ColumnDef<TaskDetails>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "taskId",
        accessorKey: "taskId",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Task ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {
            const services: string[] = ["S3", "EC2", "Lambda", "DynamoDB", "RDS", "VPC", "CloudFront", "SNS", "SQS", "ECS", "EKS", "CloudWatch"];

            return (
                <span className="font-medium">
                    <Badge
                        variant="outline"
                        className="text-(--pill-text-color) mr-1.5">
                        {services[Math.floor(Math.random() * services.length)]}
                    </Badge>
                    {row.getValue("title")}
                </span>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as TaskDetails["status"]
            let color: "default" | "secondary" | "destructive" | "outline" = "default"
            let classColor: "" | "bg-green-500" | "bg-amber-500" | "bg-blue-500" = ""
            let Icon: React.ComponentType<LucideProps> | null = null

            switch (status) {
                case "Pending":
                    classColor = "bg-amber-500"
                    Icon = Timer
                    break
                case "Done":
                    classColor = "bg-green-500"
                    Icon = CircleCheckBig
                    break
                case "Todo":
                    classColor = "bg-blue-500"
                    Icon = Circle
                    break
                case "Ignored":
                    color = "destructive"
                    Icon = CircleX
                    break
            }
            return <Badge variant={color} className={classColor}> {Icon && <Icon />} {status}</Badge>
        },
    },
    {
        accessorKey: "priority",
        header: "Priority",
        cell: ({ row }) => {
            const priority = row.getValue("priority") as TaskDetails["priority"];
            let Icon: React.ComponentType<LucideProps> | null = null;

            switch (priority) {
                case "High":
                    Icon = MoveUp;
                    break;
                case "Medium":
                    Icon = Minus;
                    break;
                case "Low":
                    Icon = MoveDown;
                    break;
            }
            return (
                <span
                    className="flex align-items-center">
                    {Icon && <Icon className="h-4 w-4 mr-1" style={{ color: "#A1A1A1" }} />}
                    <span className="ml-1 ">{priority}</span>
                </span>
            )
        }
    },
    {
        accessorKey: "confidenceRate",
        header: "Confidence Rate",
    },
    {
        accessorKey: "reviewer",
        header: "Reviewer",
        cell: ({ row }) => {
            const reviewers: string[] = ["John Doe", "Alice Johnson", "Bob Brown", "Jane Smith", "Charlie Davis"];

            return (
                <Select>
                    <SelectTrigger className="w-45">
                        <SelectValue
                            placeholder="Assign Reviewer"
                            className="bg-(--pill-text-color)"
                        />
                    </SelectTrigger>
                    <SelectContent className="bg-sidebar">
                        <SelectGroup>
                            <SelectLabel>Reviewers</SelectLabel>
                            {reviewers.map((reviewer) => (
                                <SelectItem
                                    key={reviewer}
                                    value={reviewer}
                                    className="text-white focus:bg-[#404040] focus:text-white"
                                >
                                    {reviewer}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            )
        }
    },
]