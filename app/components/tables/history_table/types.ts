import { ColumnDef } from "@tanstack/react-table"

export interface HistoryTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export type HistoryDetails = {
    taskId: string
    title: string
    status: "Accepted" | "Ignored" | "Expired"
    time: string
    reviewer: string
}