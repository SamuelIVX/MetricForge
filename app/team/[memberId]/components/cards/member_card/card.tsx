/**
 * Member profile card showing avatar, role, and key statistics (mock).
 */
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { MemberCardProps, MemberDetailsProps } from "./types"

/**
 * One statistic block in the member card.
 * @param statistic - value.
 * @param title - label.
 * @param color - accent class.
 * @example
 * <MemberDetails statistic={12} title="Tasks" color="text-green-500" />
 */
export function MemberDetails({ statistic, title, color } : MemberDetailsProps){
    return (
        <div className="text-center">
            <p className={`text-lg font-bold ${color}`}>{statistic}</p>
            <p className="text-xs text-muted-foreground">{title}</p>
        </div>
    )
}

/**
 * Member summary card.
 * @param props - member identity + stats.
 * @returns Profile card.
 * @example
 * <MemberCard
 *   id="user-1"
 *   name="Ada Lovelace"
 *   initials="AL"
 *   role="Engineer"
 *   activeTasks={2}
 *   completedTasks={10}
 *   commits={8}
 *   status="Active"
 *   availability="Available"
 *   team="Backend"
 * />
 */
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
                            
                            <MemberDetails 
                                statistic={activeTasks}
                                title="Active"
                                color="text-blue-500"
                            />

                            <MemberDetails 
                                statistic={completedTasks}
                                title="Done"
                                color="text-green-500"
                            />

                            <MemberDetails 
                                statistic={commits}
                                title="Commits"
                                color="text-purple-500"
                            />

                            <Badge
                                variant="outline"
                                className={
                                    availability === "Available" ? "text-green-500 border-green-500/30 bg-green-500/10"
                                    : availability === "In Meeting" ? "text-amber-500 border-amber-500/30 bg-amber-500/10"
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
