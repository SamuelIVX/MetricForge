import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { MemberCardProps } from "./types"

export default function MemberCard(
    {
        id,
        name,
        initials,
        role,
        activeTasks,
        completedTasks,
        commits,
        status,
        availability,
        team
    }
        :
        MemberCardProps
) {
    return (
        <Card
            key={id}
            className="bg-[#0b0b0d hover:bg-[#262626] border-[#404040] hover:border-[#505050] transition-colors cursor-pointer"
        >

            <Link href={`/team/${id}`}>

                <CardContent className="p-4">

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-4 flex-1">

                            <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-[#404040] text-white">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex-1">
                                <h3 className="font-semibold text-white">{name}</h3>
                                <p className="text-sm text-muted-foreground">{role}</p>
                            </div>

                        </div>

                        <div className="flex items-center gap-8">

                            <div className="text-center">
                                <p className="text-lg font-bold text-blue-500">{activeTasks}</p>
                                <p className="text-xs text-muted-foreground">Active</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg font-bold text-green-500">{completedTasks}</p>
                                <p className="text-xs text-muted-foreground">Done</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg font-bold text-purple-500">{commits}</p>
                                <p className="text-xs text-muted-foreground">Commits</p>
                            </div>

                            <Badge
                                variant="outline"
                                className={
                                    availability === "Available"
                                        ? "text-green-500 border-green-500/30 bg-green-500/10"
                                        : availability === "In Meeting"
                                            ? "text-amber-500 border-amber-500/30 bg-amber-500/10"
                                            : "text-gray-500 border-gray-500/30 bg-gray-500/10"
                                }
                            >
                                {availability}
                            </Badge>

                            <ChevronRight className="h-5 w-5 text-muted-foreground" />

                        </div>

                    </div>

                </CardContent>

            </Link>

        </Card>
    )
}