import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Activity, Calendar, User } from "lucide-react"
import { MetaDataProps } from "../types"

export function MetaDataCard({ Icon, title, subcontent, color }: MetaDataProps) {
    return (
        <Card className="bg-[#0b0b0d]">
            <CardContent className="p-4 flex items-center gap-3">

                <div className="p-2 rounded-lg bg-[#1a1a1a]">
                    <Icon className={`h-5 w-5 ${color}`} />
                </div>

                <div>
                    <p className="text-xs text-muted-foreground">{title}</p>
                    <p className="text-lg font-semibold text-white">{subcontent}</p>
                </div>

            </CardContent>
        </Card>
    )
}


export default function MetaDataCards() {
    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <MetaDataCard
                Icon={AlertTriangle}
                title="Priority"
                subcontent="lorem ipsum"
                color="text-red-500"
            />

            <MetaDataCard
                Icon={Activity}
                title="Confidence"
                subcontent="lorem ipsum"
                color="text-blue-500"
            />

            <MetaDataCard
                Icon={User}
                title="Reviewer"
                subcontent="lorem ipsum"
                color="text-purple-500"
            />

            <MetaDataCard
                Icon={Calendar}
                title="Created"
                subcontent="lorem ipsum"
                color="text-green-500"
            />

        </div>
    )
}