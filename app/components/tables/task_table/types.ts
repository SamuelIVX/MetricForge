/**
 * Table prop and row types for the tasks/decisions data grid.
 * Augments TanStack Table meta with an optional `updateData` mutator.
 */
import type { ColumnDef, RowData } from "@tanstack/react-table"
import type { ReactNode } from "react"

declare module "@tanstack/react-table" {
    interface TableMeta<TData extends RowData> {
        updateData?: (taskId: string, value: string, row?: TData) => void
    }
}

/** Props for the generic `TaskTable` component. */
/**
 * Generic props for `TaskTable`.
 * @param columns - TanStack column defs.
 * @param data - row data.
 */
export default interface TaskTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    headerActions?: ReactNode
    meta?: {
        updateData?: (taskId: string, value: string) => void
    }
}

/** Row model for a task/decision shown in the main table. */
/**
 * One decision/task row in the inbox (status, priority, confidence, reviewer).
 */
export type TaskDetails = {
    taskId: string
    title: string
    status: "Pending" | "Done" | "Todo" | "Ignored" | ""
    priority: string
    confidenceRate: string
    reviewer: string
}
