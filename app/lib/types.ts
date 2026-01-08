import "@tanstack/react-table"

declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    updateData?: (taskId: string, value: string) => void
  }
}