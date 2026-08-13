"use client"

/**
 * Top navigation bar for the Decision Inbox: refresh control and search field.
 * Adapts navigation menu viewport based on mobile breakpoint.
 */
import { useIsMobile } from "@/hooks/use-mobile"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { IconRefresh, IconSearch } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Sticky header nav with inbox title, refresh button, and desktop search.
 * @returns Navigation chrome rendered beside the sidebar trigger.
 */
export function NavigationBar() {
    const isMobile = useIsMobile()

    return (
        <div className="flex items-center gap-4 w-full">

            <NavigationMenu viewport={isMobile}>

                <span className="text-base font-semibold mr-3">Decision Inbox</span>

                <NavigationMenuList className="flex-wrap">

                    <NavigationMenuItem>
                        <Button
                            variant="outline"
                            size="sm"
                        >
                            <IconRefresh /> Refresh
                        </Button>
                    </NavigationMenuItem>

                </NavigationMenuList>

            </NavigationMenu>

            <div className="relative flex-1 hidden md:block">

                <Input
                    placeholder="Search alerts..."
                    className="pr-10"
                />

                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                >
                    <IconSearch className="h-4 w-4" />
                </Button>

            </div>

        </div>
    )
}
