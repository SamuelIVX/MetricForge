/**
 * Table prop and row types for the decisions history grid.
 */
import { ColumnDef } from "@tanstack/react-table"

/** Props for the generic `HistoryTable` component. */
/**
 * Generic props for `HistoryTable`.
 * @param columns - TanStack column defs.
 * @param data - row data.
 */
export interface HistoryTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

/** Row model for a historical decision outcome. */
/**
 * One closed/historical decision row shown in the history table.
 */
export type HistoryDetails = {
    taskId: string
    title: string
    status: "Accepted" | "Ignored" | "Expired"
    time: string
    reviewer: string
}
