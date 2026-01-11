import { ChartBarHorizontal } from "./barchart";
import { ChartLineLinear } from "./linechart";
import { ChartPieLabel } from "./piechart";

export default function HistoryTableChartMetrics() {
    return (
        <div className="grid grid-cols-3 gap-3">

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