"use client"

/**
 * TanStack column definitions for the decision history table.
 */
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Ellipsis } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { HistoryDetails } from "./types"

/**
 * Column defs for historical decisions (id, title, status, time, reviewer, actions).
 * @example
 * <HistoryTable columns={columns} data={[]} />
 */
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

                        <Separator className="bg-[#4b4b4b]" />

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
