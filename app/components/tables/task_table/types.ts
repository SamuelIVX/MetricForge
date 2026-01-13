import { ColumnDef } from "@tanstack/react-table"

export default interface TaskTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    headerActions?: React.ReactNode
    meta?: {
        updateData?: (taskId: string, value: string) => void
    }
}

export type TaskDetails = {
    taskId: string
    title: string
    status: "Pending" | "Done" | "Todo" | "Ignored" | ""
    priority: string
    confidenceRate: string
    reviewer: string
}