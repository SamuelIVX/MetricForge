import { ChartBarHorizontal } from "./barchart";
import { ChartLineLinear } from "./linechart";
import { ChartPieLabel } from "./piechart";

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