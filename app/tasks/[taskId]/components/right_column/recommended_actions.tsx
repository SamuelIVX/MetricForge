/**
 * Hardcoded recommended remediation actions for a decision detail view.
 * Demo-only copy — not driven by the unimplemented decision engine.
 */
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RecommendedActionProps } from "../../types"

/**
 * Renders one recommended action title + description row.
 * @param action - Short action label (e.g. review policy).
 * @param description - Supporting explanation for the action.
 * @returns A bordered action row.
 * @example
 * <RecommendedAction action="Review Bucket Policy" description="Tighten S3 ACLs" />
 */
export function RecommendedAction({ action, description }: RecommendedActionProps) {
    return (
        <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#404040]">
            <p className="text-sm font-medium mb-1 text-white">{action}</p>
            <p className="text-xs text-muted-foreground">
                {description}
            </p>
        </div>
    )
}

/**
 * Card listing static recommended actions plus an Apply All button.
 * @returns Recommended Actions card with three hardcoded steps.
 * @example
 * <RecommendedActionsCard />
 */
export default function RecommendedActionsCard() {
    return (
        <Card className="bg-[#0b0b0d]">

            <CardHeader>
                <CardTitle className="text-lg text-white">Recommended Actions</CardTitle>
                <CardDescription>Steps to resolve this issue</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">

                <RecommendedAction
                    action="1. Review Bucket Policy"
                    description="Check for overly permissive access rules"
                />

                <RecommendedAction
                    action="2. Update IAM Permissions"
                    description="Restrict access to authorized users only"
                />

                <RecommendedAction
                    action="3. Enable Encryption"
                    description="Add an extra layer of security"
                />

                <Button variant="default" className="w-full mt-2 hover:bg-blue-600 cursor-pointer">
                    Apply All Recommendations
                </Button>

            </CardContent>

        </Card>
    )
}
