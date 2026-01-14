import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceUsageTable } from "@/app/components/tables/service_usage_table/table"
import { ChartBarStacked } from "@/app/components/charts/[taskId]Charts/barchart"
import { ChartPieDonutText } from "@/app/components/charts/[taskId]Charts/piechart-donut"

export default function MainContent(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Charts */}
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

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                <Card className="bg-sidebar-accent border-[#404040]">
                    <CardHeader>
                        <CardTitle className="text-lg">Resource Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartPieDonutText />
                    </CardContent>
                </Card>

                <Card className="bg-sidebar-accent border-[#404040]">
                    <CardHeader>
                        <CardTitle className="text-lg">Recommended Actions</CardTitle>
                        <CardDescription>Steps to resolve this issue</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                            <p className="text-sm font-medium mb-1">1. Review bucket policy</p>
                            <p className="text-xs text-muted-foreground">
                            Check for overly permissive access rules
                            </p>
                        </div>
                        <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                            <p className="text-sm font-medium mb-1">2. Update IAM permissions</p>
                            <p className="text-xs text-muted-foreground">
                            Restrict access to authorized users only
                            </p>
                        </div>
                        <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                            <p className="text-sm font-medium mb-1">3. Enable encryption</p>
                            <p className="text-xs text-muted-foreground">
                            Add an extra layer of security
                            </p>
                        </div>
                        <Button className="w-full mt-2">
                            Apply All Recommendations
                        </Button>
                    </CardContent>
                </Card>
                </div>
            </div>
    )
}