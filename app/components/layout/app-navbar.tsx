"use client"

import { useIsMobile } from "@/hooks/use-mobile"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { IconRefresh, IconSearch } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export function NavigationBar() {
    const isMobile = useIsMobile()

    return (
        <div className="flex items-center gap-4 w-full">
            <NavigationMenu viewport={isMobile}>
                <span className="text-base font-semibold mr-3">Decision Inbox</span>
                <NavigationMenuList className="flex-wrap">

                    {/* <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger>Sort By</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <div className="p-4 flex items-center justify-center">
                                <ul className="flex flex-col gap-3.5 w-48">
                                    {[
                                        { id: "severity", label: "Severity" },
                                        { id: "recently-posted", label: "Recently Posted" },
                                        { id: "confidence-rate", label: "Confidence Rate" },
                                        { id: "service", label: "Service" },
                                        { id: "alert-type", label: "Alert Type" },
                                    ].map(item => (
                                        <li key={item.id}>
                                            <label
                                                htmlFor={item.id}
                                                className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-blue-600 has-aria-checked:bg-blue-50 dark:has-aria-checked:border-blue-900 dark:has-aria-checked:bg-blue-950">
                                                <Checkbox
                                                    id={item.id}
                                                    className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
                                                <span className="text-sm">{item.label}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}

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