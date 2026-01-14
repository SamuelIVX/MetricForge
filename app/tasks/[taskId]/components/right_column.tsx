import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartPieDonutText } from "@/app/components/charts/[taskId]Charts/piechart-donut"
import { Button } from "@/components/ui/button"

export default function RightColumnContent(){
    return (
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
    )
}