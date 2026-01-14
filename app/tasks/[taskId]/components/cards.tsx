import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Activity, Calendar, User } from "lucide-react"


export default function MetaDataCards(){
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-sidebar-accent border-[#404040]">
                    <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#1a1a1a]">
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Priority</p>
                            <p className="text-lg font-semibold">lorem ipsum</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-sidebar-accent border-[#404040]">
                    <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#1a1a1a]">
                            <Activity className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Confidence</p>
                            <p className="text-lg font-semibold">lorem ipsum</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-sidebar-accent border-[#404040]">
                    <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#1a1a1a]">
                            <User className="h-5 w-5 text-purple-500" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Reviewer</p>
                            <p className="text-lg font-semibold">lorem ipsum</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-sidebar-accent border-[#404040]">
                    <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#1a1a1a]">
                            <Calendar className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Created</p>
                            <p className="text-lg font-semibold">lroem ipsum</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
    )
}