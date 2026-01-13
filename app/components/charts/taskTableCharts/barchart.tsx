"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A horizontal bar chart"

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

export function ChartBarHorizontal() {
    return (
        <Card className="p-3 bg-[#0b0b0d]">
            <CardHeader className="p-0">
                <CardTitle className="text-sm text-white">Priority Insights</CardTitle>
                <CardDescription className="text-xs">Jan - Jun 2024</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <ChartContainer config={chartConfig} className="h-32 w-full">
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: -20,
                            top: 5,
                            bottom: 5,
                        }}
                    >
                        <XAxis type="number" dataKey="desktop" hide />
                        <YAxis
                            dataKey="month"
                            type="category"
                            tickLine={false}
                            tickMargin={5}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            fontSize={10}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={3} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
