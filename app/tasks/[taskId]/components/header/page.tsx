/**
 * Task detail header showing the task id and metadata card row.
 */
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Trash2 } from "lucide-react"
import { HeaderProps } from "../../types"


/**
 * Task detail header.
 * @param id - task/decision id string.
 * @returns Header section.
 * @example
 * <Header id="TASK-1" />
 */
export default function Header({ id }: HeaderProps) {
    return (
        <div className="flex items-start justify-between mb-6">

            <div className="flex-1">

                <div className="flex items-center gap-3 mb-2">

                    <h1 className="text-3xl font-bold">{id}</h1>

                    <Badge className="bg-amber-500">
                        status
                    </Badge>

                    <Badge variant="outline" className="text-red-500 border-red-500/30">
                        Severity
                    </Badge>
                </div>

                <h2 className="text-xl text-muted-foreground mb-4">title</h2>
                <p className="text-sm text-muted-foreground max-w-3xl">
                    description
                </p>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">

                <Button variant="outline" size="sm">
                    <CheckCircle2 className="h-4 w-4 mr-2" /> Mark as Done
                </Button>

                <Button variant="outline" size="sm" className="text-red-500 border-red-500/30">
                    <Trash2 className="h-4 w-4" />
                </Button>

            </div>

        </div>
    )
}
