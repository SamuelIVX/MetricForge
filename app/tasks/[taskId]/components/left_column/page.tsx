/**
 * Left column of the decision detail page: stacked bar chart + service usage table.
 */
import { ServiceUsageTable } from "@/app/components/tables/service_usage_table/table"
import { ChartBarStacked } from "@/app/components/charts/[taskId]Charts/barchart"

/**
 * Layout wrapper for the wider left column on `/tasks/[taskId]`.
 * @returns Chart + service usage table stacked in a two-span column.
 */
export default function LeftColumnContent() {
    return (
        <div className="lg:col-span-2 space-y-6">

            <ChartBarStacked />

            <ServiceUsageTable />

        </div>
    )
}
