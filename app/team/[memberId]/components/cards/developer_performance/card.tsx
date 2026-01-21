import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export default function DeveloperHealthCard(){
    return (
        <Card className="bg-[#0b0b0d]">

            <CardHeader>
                
                <div className="flex">
                    <CardTitle className="text-lg text-white">Developer Health</CardTitle>

                        <div className="ml-2">
                            <Badge className="bg-green-500 text-xs">Healthy</Badge>
                            <Badge variant="outline" className="text-green-500 border-green-500/30 text-xs ml-2">Low Risk</Badge>
                        </div>

                </div>
                
                <CardDescription>See the performance of Developer</CardDescription>

            </CardHeader>

            <CardContent className="space-y-2">

                {/* Compact metrics */}
                <div className="grid grid-cols-4 gap-2">

                    <div className="text-center p-2 bg-[#1a1a1a] rounded border border-[#404040]">
                        <p className="text-xl font-bold text-green-500">92%</p>
                        <p className="text-xs text-muted-foreground">Completion Rate</p>
                    </div>

                    <div className="text-center p-2 bg-[#1a1a1a] rounded border border-[#404040]">
                        <p className="text-xl font-bold text-blue-500">11 / 14</p>
                        <p className="text-xs text-muted-foreground">Active Days</p>
                    </div>

                    <div className="text-center p-2 bg-[#1a1a1a] rounded border border-[#404040]">
                        <p className="text-xl font-bold text-purple-500">1.6</p>
                        <p className="text-xs text-muted-foreground">Average Review Time</p>
                    </div>

                    <div className="text-center p-2 bg-[#1a1a1a] rounded border border-[#404040]">
                        <p className="text-xl font-bold text-amber-500">2</p>
                        <p className="text-xs text-muted-foreground">OverDue Tasks</p>
                    </div>

                </div>

                {/* Status row */}
                <div className="flex items-center justify-between text-xs p-2 bg-[#1a1a1a] rounded border border-[#404040]">
                    <span className="text-muted-foreground">Workload</span>
                    <span className="text-blue-500">Balanced</span>
                </div>

                <div className="flex items-center justify-between text-xs p-2 bg-[#1a1a1a] rounded border border-[#404040]">
                    <span className="text-muted-foreground">Burnout Risk</span>
                    <span className="text-green-500">Low</span>
                </div>

                <div className="flex items-center justify-between text-xs p-2 bg-[#1a1a1a] rounded border border-[#404040]">
                    <span className="text-muted-foreground">Context Switching</span>
                    <span className="text-blue-500">Normal</span>
                </div>

                {/* Risk indicators */}
                <div className="p-1 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-green-500">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>No action required. Re-evaluate in 7-days.</span>
                    </div>
                </div>

            </CardContent>
        </Card>
  )
}