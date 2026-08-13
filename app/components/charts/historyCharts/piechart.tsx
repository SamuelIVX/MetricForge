"use client"

/**
 * Demo labeled pie chart for the history insights strip (Recharts + shadcn Chart).
 * Uses static chart config/data for the local UI demo.
 */
import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

/** Short Chart description string used by shadcn chart chrome. */
/**
 * Short chart description string used in shadcn chart examples.
 */
export const description = "A pie chart with a label"

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

/**
 * Renders the history-page labeled pie chart demo.
 * @returns A Card-wrapped Recharts visualization with static sample data.
 */
export function ChartPieLabel() {
    return (
        <Card className="flex flex-col p-3 bg-[#0b0b0d]">
            <CardHeader className="items-center p-0">
                <CardTitle className="text-sm text-white">Task Status Distribution</CardTitle>
                <CardDescription className="text-xs">Jan - Jun 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-0">
                <ChartContainer
                    config={chartConfig}
                    className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-32 w-full pb-0"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
