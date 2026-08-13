/**
 * Developer health/performance card with static metrics and statuses.
 */
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { DeveloperMetricsProps, DeveloperStatutesProps } from "./types"

/**
 * Metric tile.
 * @param title - label.
 * @param stat - value.
 * @param color - accent.
 * @example
 * <DeveloperMetrics title="PRs" stat="14" color="text-green-500" />
 */
export function DeveloperMetrics({ title, stat, color } : DeveloperMetricsProps){
    return (
         <div className="text-center p-2 bg-[#1a1a1a] rounded border border-[#404040]">
            <p className={`text-xl font-bold ${color}`}>{stat}</p>
            <p className="text-xs text-muted-foreground">{title}</p>
        </div>
    )
}

/**
 * Status tile.
 * @param title - label.
 * @param status - status text.
 * @param color - accent.
 * @example
 * <DeveloperStatuses title="Availability" status="Available" color="text-green-500" />
 */
export function DeveloperStatuses({ title, status, color } : DeveloperStatutesProps){
    return (
        <div className="flex items-center justify-between text-xs p-2 bg-[#1a1a1a] rounded border border-[#404040]">
            <span className="text-muted-foreground">{title}</span>
            <span className={`${color}`}>{status}</span>
        </div>
    )
}

/**
 * Aggregated developer health card.
 * @returns Performance panel.
 * @example
 * <DeveloperHealthCard />
 */
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

                    <DeveloperMetrics 
                        title="Completion Rate"
                        stat="92%"
                        color="text-green-500"
                    />

                      <DeveloperMetrics 
                        title="Active Days"
                        stat="11/14"
                        color="text-blue-500"
                    />


                    <DeveloperMetrics 
                        title="Average Review Time"
                        stat="1.6"
                        color="text-purple-500"
                    />

                    <DeveloperMetrics 
                        title="Overdue Tasks"
                        stat="2"
                        color="text-amber-500"
                    />

                </div>

                {/* Status row */}

                <DeveloperStatuses 
                    title="Workload"
                    status="Balanced"
                    color="text-blue-500"
                />

                <DeveloperStatuses 
                    title="Burnout Risk"
                    status="Low"
                    color="text-green-500"
                />

                <DeveloperStatuses 
                    title="Context Switching"
                    status="Normal"
                    color="text-blue-500"
                />

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
