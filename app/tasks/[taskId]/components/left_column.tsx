import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ServiceUsageTable } from "@/app/components/tables/service_usage_table/table"
import { ChartBarStacked } from "@/app/components/charts/[taskId]Charts/barchart"

export default function LeftColumnContent() {
    return (
        <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[#0b0b0d]">

                <CardHeader>
                    <CardTitle className="text-lg text-white">Cost and Usage Trends</CardTitle>
                    <CardDescription>Resource consumption over the last 6 months</CardDescription>
                </CardHeader>

                <CardContent>
                    <ChartBarStacked />
                </CardContent>
            </Card>

            <Card className="bg-[#0b0b0d]">

                <CardHeader>
                    <CardTitle className="text-white">Service Usage Breakdown</CardTitle>
                    <CardDescription>Detailed metrics and usage patterns</CardDescription>
                </CardHeader>

                <CardContent>
                    <ServiceUsageTable />
                </CardContent>

            </Card>

        </div>
    )
}