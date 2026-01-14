import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { ServiceUsageTable } from "@/app/components/tables/service_usage_table/table"
import { ChartBarStacked } from "@/app/components/charts/[taskId]Charts/barchart"

export default function LeftColumnContent(){
    return (
        <div className="lg:col-span-2 space-y-6">
            <Card className="bg-sidebar-accent border-[#404040]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Cost and Usage Analysis
                    </CardTitle>
                    <CardDescription>Resource utilization over time</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartBarStacked />
                </CardContent>
            </Card>

            <Card className="bg-sidebar-accent border-[#404040]">
                <CardHeader>
                    <CardTitle>Service Usage Breakdown</CardTitle>
                    <CardDescription>Detailed metrics and usage patterns</CardDescription>
                </CardHeader>
                <CardContent>
                    <ServiceUsageTable />
                </CardContent>
            </Card>
        </div>
    )
}