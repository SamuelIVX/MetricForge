import { ChartBarStacked } from "@/app/components/charts/barchart";

type PageProps = {
    params: Promise<{
        taskId: string,
    }>
}

export default async function DecisionId({ params }: PageProps) {
    const { taskId } = await params;

    return (
        <div className="flex items-center">
            {/* Task ID : {taskId} */}
            <ChartBarStacked />
        </div>
    )
}