import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react";

export default function ActionCard() {
    return (
        <Card className="h-full max-w-150 bg-#0b0b0d">

            <CardHeader>
                <CardTitle
                    className="flex font-bold justify-center items-center rounded-md bg-red-500/20 text-red-400 py-4">
                    Recommended Action: High Risk
                </CardTitle>
            </CardHeader>

            <CardContent className="text-white ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et nisi odit, ex expedita quas quidem numquam quia asperiores
                officiis nostrum laboriosam eveniet adipisci necessitatibus, atque at dignissimos, nam incidunt!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et nisi odit, ex expedita quas quidem numquam quia asperiores
                officiis nostrum laboriosam eveniet adipisci necessitatibus, atque at dignissimos, nam incidunt!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et nisi odit, ex expedita quas quidem numquam quia asperiores
                officiis nostrum laboriosam eveniet adipisci necessitatibus, atque at dignissimos, nam incidunt!
            </CardContent>

            <CardDescription className="ml-6 font-bold italic flex items-center">
                Confidence Rate: 95%
                <ArrowUp className="h-4" />
            </CardDescription>

            <Separator className="bg-gray-800" />

            <CardFooter className="flex justify-center gap-3">
                <Button variant="destructive" size="sm">
                    Ignore
                </Button>
                <Button className="bg-green-600 hover:bg-green-500" size="sm">
                    Accept
                </Button>
            </CardFooter>
            <p className="text-xs text-muted-foreground text-center">
                Accepting will apply this decision immediately.
            </p>
        </Card>
    )
}