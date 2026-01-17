import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RelatedTaskProps } from "../../types"
import { Badge } from "@/components/ui/badge"

export function RelatedTask( { task, status, status_color, issue } : RelatedTaskProps){
    return (
        <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040] hover:border-[#505050] cursor-pointer transition-colors">
            <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-white">{task}</p>
                <Badge className={`${status_color} text-xs`}>{status}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{issue}</p>
        </div>
    )
}

export default function RelatedTasks() {
    return (
        <Card className="bg-[#0b0b0d]">

            <CardHeader>
                <CardTitle className="text-lg text-white">Related Issues</CardTitle>
                <CardDescription>Similar tasks that may be connected</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">

                <RelatedTask 
                    task = "TASK-2024-001"
                    status = "Pending"
                    status_color = "bg-amber-500"
                    issue = "EC2 instance configuration issue"
                />

                <RelatedTask 
                    task = "TASK-2024-002"
                    status = "Done"
                    status_color = "bg-green-500"
                    issue = "IAM policy review completed"
                />

                <RelatedTask 
                    task = "TASK-2024-003"
                    status = "Ignored"
                    status_color = "bg-red-500"
                    issue = "IAM policy review completed"
                />

            </CardContent>

        </Card>
    )
}