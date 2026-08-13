/**
 * Hardcoded KPI summary cards shown above the decisions history table.
 */
import {
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { HistoryCardProps } from "./types";

/**
 * Renders one history KPI card with a title and value.
 * @param title - Label prefix shown before the value.
 * @param value - Hardcoded metric value for the demo UI.
 * @returns A dark history summary card tile.
 * @example
 * <HistoryCard title="Resolved" value="12" />
 */
export function HistoryCard({ title, value }: HistoryCardProps) {
    return (
        <Card className="bg-[#0b0b0d] w-full h-15">

            <CardHeader>
                <CardTitle className="text-white font-bold">

                    {title}
                    <span className="text-muted-foreground italic">{value}</span>

                </CardTitle>

            </CardHeader>
        </Card>
    )
}

/**
 * Grid of demo history KPI cards (completed, accepted, ignored, etc.).
 * @returns Five-column history summary card layout with static values.
 * @example
 * <HistoryCards />
 */
export default function HistoryCards() {
    return (
        <div className="grid grid-cols-5 gap-3 p-4">

            <div>
                <HistoryCard
                    title="Total Completed: "
                    value="8"
                />
            </div>

            <div>
                <HistoryCard
                    title="Avg. Confidence Rate: "
                    value="12"
                />
            </div>

            <div>
                <HistoryCard
                    title="Accepted: "
                    value="3"
                />
            </div>

            <div>
                <HistoryCard
                    title="Ignored: "
                    value="1"
                />
            </div>

            <div>
                <HistoryCard
                    title="Deferred: "
                    value="4"
                />
            </div>

        </div>
    );
}
