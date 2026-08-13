/**
 * Right column of the decision detail page: donut chart, actions, related tasks.
 */
import { ChartPieDonutText } from "@/app/components/charts/[taskId]Charts/piechart-donut"
import RecommendedActionsCard from "./recommended_actions"
import RelatedTasks from "./related_tasks"

/**
 * Layout wrapper for the narrow right column on `/tasks/[taskId]`.
 * @returns Donut chart, recommended actions, and related issues stack.
 */
export default function RightColumnContent() {
    return (
        <div className="space-y-6">

            <ChartPieDonutText />

            <RecommendedActionsCard />

            <RelatedTasks />

        </div>
    )
}
