"use client"

/**
 * Demo linear line chart for the tasks insights strip (Recharts + shadcn Chart).
 * Uses static chart config/data for the local UI demo.
 */
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
export const description = "A linear line chart"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

/**
 * Renders the tasks-page linear line chart demo.
 * @returns A Card-wrapped Recharts visualization with static sample data.
 */
export function ChartLineLinear() {
    return (
        <Card className="p-3 bg-[#0b0b0d]">
            <CardHeader className="p-0">
                <CardTitle className="text-sm text-white">Average Confidence Rate</CardTitle>
                <CardDescription className="text-xs">Jan - Jun 2024</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <ChartContainer config={chartConfig} className="h-32 w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 8,
                            right: 8,
                            top: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={4}
                            tickFormatter={(value) => value.slice(0, 3)}
                            fontSize={10}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="linear"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
