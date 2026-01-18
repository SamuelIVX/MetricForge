import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Code, GitCommit } from "lucide-react"
import { MemberDataCardProps } from "../../types"


export function MemberDataCard({ Icon, title, subcontent, color }: MemberDataCardProps) {
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

export default function MemberDataCards() {
    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <MemberDataCard
                Icon={CheckCircle}
                title="Active Tasks"
                subcontent="lorem ipsum"
                color="text-blue-500"
            />

            <MemberDataCard
                Icon={Clock}
                title="Pending"
                subcontent="lorem ipsum"
                color="text-orange-500"
            />

            <MemberDataCard
                Icon={GitCommit}
                title="Commits"
                subcontent="lorem ipsum"
                color="text-purple-500"
            />

            <MemberDataCard
                Icon={Code}
                title="Lines of Code"
                subcontent="lorem ipsum"
                color="text-green-500"
            />

        </div>
    )
}