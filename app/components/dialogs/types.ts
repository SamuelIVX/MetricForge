export type TaskDetails = {
    taskId: string
    title: string
    status: "Pending" | "Done" | "Todo" | "Ignored" | ""
    priority: string
    confidenceRate: string
    reviewer: string
}
export type AddTaskDialogProps = {
    onAdd: (task: TaskDetails) => void;
};