import { ChartBarStacked } from "@/app/components/charts/barchart";
import { ChartPieDonutText } from "@/app/components/charts/piechart-donut";

type PageProps = {
    params: Promise<{
        taskId: string,
    }>
}

export default async function DecisionId({ params }: PageProps) {
    // const { taskId } = await params;

    return (
        <div className="flex min-h-screen justify-center pt-5 gap-8 bg-bg-main">
            <ChartBarStacked />
            <ChartPieDonutText />
        </div>
    )
}