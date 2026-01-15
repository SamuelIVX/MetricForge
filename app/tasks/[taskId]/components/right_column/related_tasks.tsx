import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RelatedTasks() {
    return (
        <Card className="bg-[#0b0b0d]">

            <CardHeader>
                <CardTitle className="text-lg text-white">Related Issues</CardTitle>
                <CardDescription>Similar tasks that may be connected</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040] hover:border-[#505050] cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-white">TASK-2024-002</p>
                        <Badge className="bg-amber-500 text-xs">Pending</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">EC2 instance configuration issue</p>
                </div>

                <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040] hover:border-[#505050] cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-white">TASK-2024-003</p>
                        <Badge className="bg-green-500 text-xs">Done</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">IAM policy review completed</p>
                </div>

            </CardContent>

        </Card>
    )
}