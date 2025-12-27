"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Timer, CircleCheckBig, Circle, CircleX, LucideProps } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export type TaskDetails = {
    taskId: string
    awsService: string
    title: string
    status: "Pending" | "Done" | "Todo" | "Ignored"
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
        filterFn: (row, columnId, filterValue) => {
            const value = row.getValue(columnId) as string
            return value
                .toLowerCase()
                .replace(/\s/g, "")
                .includes((filterValue as string).toLowerCase().replace(/\s/g, ""))
        },
    },
    {
        accessorKey: "awsService",
        header: "Service",
        cell: ({ row }) => {
            return <Badge variant="outline" className="text-(--pill-text-color)">{row.getValue("awsService")}</Badge>
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
    },
    {
        accessorKey: "confidenceRate",
        header: "Confidence Rate",
    },
    {
        accessorKey: "reviewer",
        header: "Reviewer",
    },
]