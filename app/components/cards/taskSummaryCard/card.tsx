import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { SummaryCardProps } from "./types";

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

export default function SummaryCards(){
    return (
        <div className="grid grid-cols-5 gap-3">

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