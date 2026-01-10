import { ChartBarStacked } from "@/app/components/charts/barchart";
import { ChartPieDonutText } from "@/app/components/charts/piechart-donut";
import { ServiceUsageTable } from "@/app/components/tables/service_usage_table/table";
import ActionCard from "@/app/components/cards/action-card";

import { PageProps } from "./types";

export default async function DecisionId({ params }: PageProps) {
    const { taskId } = await params;

    return (
        <div>
            <span className="font-bold text-2xl flex justify-center p-4">
                {taskId}
            </span>

            <div className="grid grid-cols-2 gap-4 items-center">

                <div className="flex justify-center">
                    <ChartBarStacked />
                </div>

                <div className="flex justify-center">
                    <ChartPieDonutText />
                </div>

                <div className="flex justify-center">
                    <div className="max-w-150 overflow-hidden border rounded-md">
                        <ServiceUsageTable />
                    </div>
                </div>

                <div className="flex justify-center">
                    <ActionCard />
                </div>

            </div>
        </div>
    )
}