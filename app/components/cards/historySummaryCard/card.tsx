import {
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { HistoryCardProps } from "./types";

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