"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Timer, CircleCheckBig, Circle, CircleX, LucideProps } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    task: string
    title: string
    status: "Pending" | "Done" | "Todo" | "Ignored"
    priority: string
    confidenceRate: string
    reviewer: string
}

export const columns: ColumnDef<Payment>[] = [
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
        id: "task",
        accessorKey: "task",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Task #
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
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as Payment["status"]
            let color: "default" | "secondary" | "destructive" | "outline" = "default"
            let Icon: React.ComponentType<LucideProps> | null = null
            switch (status) {
                case "Pending":
                    color = "default"
                    Icon = Timer
                    break
                case "Done":
                    color = "secondary"
                    Icon = CircleCheckBig
                    break
                case "Todo":
                    color = "destructive"
                    Icon = Circle
                    break
                case "Ignored":
                    color = "outline"
                    Icon = CircleX
                    break
            }
            return <Badge variant={color}> {Icon && < Icon />} {status}</Badge>
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