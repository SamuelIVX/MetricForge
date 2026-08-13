/**
 * Chart strip for the history page: horizontal bar, line, and pie demos.
 */
import { ChartBarHorizontal } from "./barchart";
import { ChartLineLinear } from "./linechart";
import { ChartPieLabel } from "./piechart";

/**
 * Renders the three demo charts on the decisions history page.
 * @returns Three-column grid of history insight charts.
 * @example
 * <HistoryTableChartMetrics />
 */
export default function HistoryTableChartMetrics() {
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
