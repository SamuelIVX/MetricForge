import { TaskDetails } from "@/app/components/tables/task_table/types";

export type Props = {
    onAdd: (task: TaskDetails) => void;
};