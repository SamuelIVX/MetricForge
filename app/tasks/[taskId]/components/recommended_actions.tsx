import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RecommendedActionsCard() {
    return (
        <Card className="bg-[#0b0b0d]">

            <CardHeader>
                <CardTitle className="text-lg text-white">Recommended Actions</CardTitle>
                <CardDescription>Steps to resolve this issue</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                    <p className="text-sm font-medium mb-1 text-white">1. Review bucket policy</p>
                    <p className="text-xs text-muted-foreground">
                        Check for overly permissive access rules
                    </p>
                </div>
                <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                    <p className="text-sm font-medium mb-1 text-white">2. Update IAM permissions</p>
                    <p className="text-xs text-muted-foreground">
                        Restrict access to authorized users only
                    </p>
                </div>
                <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                    <p className="text-sm font-medium mb-1 text-white">3. Enable encryption</p>
                    <p className="text-xs text-muted-foreground">
                        Add an extra layer of security
                    </p>
                </div>

                <Button variant="default" className="w-full mt-2 hover:bg-blue-600 cursor-pointer">
                    Apply All Recommendations
                </Button>

            </CardContent>

        </Card>
    )
}