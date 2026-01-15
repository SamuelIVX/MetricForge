import { ChartPieDonutText } from "@/app/components/charts/[taskId]Charts/piechart-donut"
import RecommendedActionsCard from "./recommended_actions"

export default function RightColumnContent() {
    return (
        <div className="space-y-6">

            <ChartPieDonutText />

            <RecommendedActionsCard />

        </div>
    )
}