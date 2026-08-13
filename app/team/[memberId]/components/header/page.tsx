/**
 * Member detail header with identity info and metric cards.
 */
import { 
    Trash2,
    Mail,
    MapPin,
    Calendar,
    MessageSquare
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeaderProps } from "../../types"
import { MemberInfoProps } from "../../types"

/**
 * Member identity snippet.
 * @param Icon - leading icon.
 * @param info - display text.
 * @example
 * <MemberInfo Icon={IconMail} info="ada@example.com" />
 */
export function MemberInfo({ Icon, info } : MemberInfoProps){
    return (
        <span className="flex items-center gap-1">
            <Icon className="h-4 w-4"/>
            {info}
        </span>
    )
}


/**
 * Member header section.
 * @param id - member id.
 * @returns Header UI.
 * @example
 * <Header id="TASK-1" />
 */
export default function Header({ id }: HeaderProps) {
    return (
        <div className="flex items-start justify-between mb-6">

            <div className="flex-1">

                <div className="flex items-center gap-3 mb-2">

                    <Avatar className="h-15 w-15 rounded-md">
                        <AvatarImage 
                            src="/default_avatar.svg" 
                            alt="@membername" 
                    />
                        <AvatarFallback>MI</AvatarFallback> 
                    </Avatar>

                    <h1 className="text-3xl font-bold">Developer: {id}</h1>

                    <Badge className="bg-green-500">
                        Online
                    </Badge>

                    <Badge variant="outline" className="text-red-500 border-red-500/30">
                        Not-Available
                    </Badge>
                </div>

                <div className="flex items-center text-xs text-muted-foreground gap-6">

                    <MemberInfo 
                        Icon={Mail}
                        info="johndoe@gmail.com"
                    />

                    <MemberInfo 
                        Icon={MapPin}
                        info="Staten Island, NY"
                    />

                    <MemberInfo 
                        Icon={Calendar}
                        info="Joined Apr 2005"
                    />

                </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">

                <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4" /> Message
                </Button>

                <Button variant="outline" size="sm" className="text-red-500 border-red-500/30">
                    <Trash2 className="h-4 w-4" />
                </Button>

            </div>

        </div>
    )
}
