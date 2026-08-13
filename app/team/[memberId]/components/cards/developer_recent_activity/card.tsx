/**
 * Recent activity feed for a member (hardcoded demo events).
 */
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ActivityProps } from "../../../types"

/**
 * One activity row.
 * @param color - accent.
 * @param assignment - text.
 * @param time_completed - relative time label.
 * @example
 * <Activity color="text-green-500" assignment="Merged PR #42" time_completed="2h ago" />
 */
export function Activity({ color, assignment, time_completed }: ActivityProps) {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className={`h-3 w-3 rounded-full ${color} mt-1`} />
                <div className="w-px flex-1 bg-[#404040] mt-2 mb-2" />
            </div>

            <div className="flex-1 pb-2">
                <p className="text-sm font-semibold text-white">{assignment}</p>
                <p className="text-xs text-muted-foreground">{time_completed}</p>
            </div>
        </div>
    )
}

/**
 * Card of static recent activity.
 * @returns Activity panel.
 * @example
 * <RecentActivity />
 */
export default function RecentActivity() {
    return (
        <Card className="bg-[#0b0b0b]">

            <CardHeader>
                <CardTitle className="text-lg text-white">Recent Activity</CardTitle>
                <CardDescription>Latest actions and updates</CardDescription>
            </CardHeader>

            <CardContent>

                <div className="space-y-4">

                    <Activity
                        color="bg-blue-500"
                        assignment="Completed TASK-045"
                        time_completed="2 hours ago"
                    />

                    <Activity
                        color="bg-purple-500"
                        assignment="Pushed 3 commits to Main Branch"
                        time_completed="5 hours ago"
                    />

                    <Activity
                        color="bg-green-500"
                        assignment="Merged PR #127"
                        time_completed="Yesterday at 4:30 PM"
                    />

                    <Activity
                        color="bg-orange-500"
                        assignment="Pulled commit #3rf23d"
                        time_completed="2 days ago"
                    />

                </div>

            </CardContent>

        </Card >
    )
}
