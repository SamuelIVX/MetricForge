import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { SummaryCardProps } from "./types";

export function SummaryCard({title, content}: SummaryCardProps){
    return (
    <Card className="h-full max-w-150 bg-[#0b0b0d]">

            <CardHeader>
                <CardTitle
                    className="flex font-bold justify-center items-center rounded-md bg-red-500/20 text-red-400 py-4">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="text-white ">
                {content}
            </CardContent>

            <CardDescription className="ml-6 font-bold italic flex items-center">
                Confidence Rate: 95%
            </CardDescription>

            <Separator className="bg-gray-800" />
        </Card>
        )
}

export default function SummaryCards(){
    return (
        <div className="grid grid-cols-3 gap-3">

            <div>
                <SummaryCard 
                    title="Total: "
                    content="lorem ipsum"
                />
            </div>

            <div>
                <SummaryCard 
                    title="In Progress: "
                    content="lorem ipsum"
                />
            </div>

            <div>
                <SummaryCard 
                    title="Needs Decision: "
                    content="lorem ipsum"
                />
            </div>

            <div>
                <SummaryCard 
                    title="Low Severity: "
                    content="lorem ipsum"
                />
            </div>

            <div>
                <SummaryCard 
                    title="High Severity: "
                    content="lorem ipsum"
                />
            </div>

        </div>
    );
}