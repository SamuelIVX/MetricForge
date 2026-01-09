import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

export default function ActionCard() {
    return (
        <Card className="h-full max-w-150">
            <CardHeader>
                <CardTitle className="text-white font-bold justify-center items-center flex">Recommended Action</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et nisi odit, ex expedita quas quidem numquam quia asperiores
                officiis nostrum laboriosam eveniet adipisci necessitatibus, atque at dignissimos, nam incidunt!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et nisi odit, ex expedita quas quidem numquam quia asperiores
                officiis nostrum laboriosam eveniet adipisci necessitatibus, atque at dignissimos, nam incidunt!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et nisi odit, ex expedita quas quidem numquam quia asperiores
                officiis nostrum laboriosam eveniet adipisci necessitatibus, atque at dignissimos, nam incidunt!
            </CardContent>
            <CardFooter className="flex justify-center gap-2">
                <Button variant="outline" size="sm">Ignore</Button>
                <Button variant="outline" size="sm">Accept</Button>
            </CardFooter>
        </Card>
    )
}