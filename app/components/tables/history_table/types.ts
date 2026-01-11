import { ColumnDef } from "@tanstack/react-table"

export interface HistoryTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}