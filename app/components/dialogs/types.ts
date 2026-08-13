/**
 * Types for the add-task dialog (local task shape + dialog props).
 */
/**
 * Local task row shape used when creating a task from the dialog.
 */
export type TaskDetails = {
    taskId: string
    title: string
    status: "Pending" | "Done" | "Todo" | "Ignored" | ""
    priority: string
    confidenceRate: string
    reviewer: string
}
/**
 * Props for `AddTaskDialog`.
 * @param onAdd - callback invoked with the newly built task.
 */
export type AddTaskDialogProps = {
    onAdd: (task: TaskDetails) => void;
};
