import { 
    Trash2,
    Mail,
    MapPin,
    Calendar,
    MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeaderProps } from "../../types"


export default function Header({ id }: HeaderProps) {
    return (
        <div className="flex items-start justify-between mb-6">

            <div className="flex-1">

                <div className="flex items-center gap-3 mb-2">

                    <h1 className="text-3xl font-bold">Developer: {id}</h1>

                    <Badge className="bg-green-500">
                        Online
                    </Badge>

                    <Badge variant="outline" className="text-red-500 border-red-500/30">
                        Not-Available
                    </Badge>
                </div>

                <div className="flex items-center text-xs text-muted-foreground gap-6">

                    <span className="flex items-center gap-1">
                        <Mail className="h-4 w-4"/>
                        @johndoe@gmail.com
                    </span>

                    <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4"/>
                        Staten Island, NY
                    </span>

                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4"/>
                        Joined Apr 2005
                    </span>

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