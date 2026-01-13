"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Ellipsis } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { HistoryDetails } from "./types"

export const columns: ColumnDef<HistoryDetails>[] = [
    {
        accessorKey: "taskId",
        header: "Task ID",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "status",
        header: "Final Status",
    },
    {
        accessorKey: "time",
        header: "Decided At",
    },
    {
        accessorKey: "reviewer",
        header: "Reviewer",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const taskId = row.getValue("taskId");

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            <Ellipsis />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="bottom"
                        className="w-[--radix-popper-anchor-width]"
                    >

                        <DropdownMenuItem>
                            <span>Edit</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <span>Pin</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href={`/tasks/${taskId}`}>
                                View Task
                            </Link>
                        </DropdownMenuItem>

                        <Separator />

                        <DropdownMenuItem
                            variant="destructive"
                        >
                            <span>Delete</span>
                        </DropdownMenuItem>

                    </DropdownMenuContent>

                </DropdownMenu>
            )
        }
    }
]