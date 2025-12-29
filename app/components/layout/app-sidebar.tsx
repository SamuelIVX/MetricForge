'use client'
import { House, History, Scale } from "lucide-react"

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

import { ChevronUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//Menu Items
const items = [
    {
        title: "Home",
        path: "/",
        icon: House,
    },
    {
        title: "Decisions",
        path: "/decisions",
        icon: Scale,
    },
    {
        title: "History",
        path: "/history",
        icon: History,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">

            <SidebarHeader> MetricForge </SidebarHeader>

            <SidebarContent>

                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.path}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
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
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>

                        </DropdownMenu>
                    </SidebarMenuItem>

                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}