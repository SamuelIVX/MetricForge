import { TaskDetails } from "../tables/task_table/columns";

export type Props = {
    onAdd: (task: TaskDetails) => void;
};