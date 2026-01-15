import { ChartPieDonutText } from "@/app/components/charts/[taskId]Charts/piechart-donut"
import RecommendedActionsCard from "./recommended_actions"
import RelatedTasks from "./related_tasks"

export default function RightColumnContent() {
    return (
        <div className="space-y-6">

            <ChartPieDonutText />

            <RecommendedActionsCard />

            <RelatedTasks />

        </div>
    )
}