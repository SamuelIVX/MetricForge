import { TaskDetails } from "../tables/task_table/types";

export type Props = {
    onAdd: (task: TaskDetails) => void;
};