/**
 * Hardcoded KPI summary cards shown above the tasks/decisions table.
 */
import {
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { SummaryCardProps } from "./types";

/**
 * Renders one summary KPI card with a title and value.
 * @param title - Label prefix shown before the value.
 * @param value - Hardcoded metric value for the demo UI.
 * @returns A dark summary card tile.
 */
export function SummaryCard({title, value}: SummaryCardProps){
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
 * Grid of demo task-summary KPI cards (totals, severity, etc.).
 * @returns Five-column summary card layout with static values.
 */
export default function SummaryCards(){
    return (
        <div className="grid grid-cols-5 gap-3 p-4">

            <div>
                <SummaryCard 
                    title="Total Tasks: "
                    value="8"
                />
            </div>

            <div>
                <SummaryCard 
                    title="In Progress: "
                    value="12"
                />
            </div>

            <div>
                <SummaryCard 
                    title="Needs Decision: "
                    value="3"
                />
            </div>

            <div>
                <SummaryCard 
                    title="Low Severity: "
                    value="1"
                />
            </div>

            <div>
                <SummaryCard 
                    title="High Severity: "
                    value="4"
                />
            </div>

        </div>
    );
}
