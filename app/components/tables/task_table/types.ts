import type { ColumnDef, RowData } from "@tanstack/react-table"
import type { ReactNode } from "react"

declare module "@tanstack/react-table" {
    interface TableMeta<TData extends RowData> {
        updateData?: (taskId: string, value: string, row?: TData) => void
    }
}

export default interface TaskTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    headerActions?: ReactNode
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
