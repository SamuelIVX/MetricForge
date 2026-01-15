import { ServiceUsageTable } from "@/app/components/tables/service_usage_table/table"
import { ChartBarStacked } from "@/app/components/charts/[taskId]Charts/barchart"

export default function LeftColumnContent() {
    return (
        <div className="lg:col-span-2 space-y-6">

            <ChartBarStacked />

            <ServiceUsageTable />

        </div>
    )
}