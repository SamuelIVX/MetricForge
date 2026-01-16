'use client'
import {
    House,
    History,
    LogOut,
    CircleQuestionMark,
    Settings,
    CircleUser
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Separator } from "@/components/ui/separator"

import { ChevronUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { usePathname } from "next/navigation"

//Menu Items
const items = [
    {
        title: "Home",
        path: "/tasks",
        icon: House,
    },
    {
        title: "History",
        path: "/tasks/history",
        icon: History,
    },
]

export function AppSidebar() {

    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon">

            <SidebarHeader> MetricForge </SidebarHeader>

            <SidebarContent>

                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild isActive={pathname == item.path}>
                                    <Link href={item.path}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>

                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src="/default_avatar.svg" />
                                        <AvatarFallback>DF</AvatarFallback>
                                    </Avatar> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                side="right"
                                className="w-[--radix-popper-anchor-width]"
                            >

                                <DropdownMenuItem>
                                    <CircleUser /> <span>Account</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Settings /> <span>Settings</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <CircleQuestionMark /> <span>Get Help</span>
                                </DropdownMenuItem>

                                <Separator className="bg-[#4b4b4b]" />

                                <DropdownMenuItem>
                                    <LogOut /> <span>Log Out</span>
                                </DropdownMenuItem>

                            </DropdownMenuContent>

                        </DropdownMenu>
                    </SidebarMenuItem>

                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}