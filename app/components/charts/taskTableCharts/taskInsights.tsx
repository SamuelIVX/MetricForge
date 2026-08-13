/**
 * Chart strip for the tasks page: horizontal bar, line, and pie demos.
 */
import { ChartBarHorizontal } from "./barchart";
import { ChartLineLinear } from "./linechart";
import { ChartPieLabel } from "./piechart";

/**
 * Renders the three demo charts above/beside the tasks table.
 * @returns Three-column grid of task insight charts.
 */
export default function TaskTableChartMetrics() {
    return (
        <div className="grid grid-cols-3 gap-3 p-4">

            <div>
                <ChartBarHorizontal />
            </div>

            <div>
                <ChartLineLinear />
            </div>

            <div>
                <ChartPieLabel />
            </div>

        </div>
    );
}
