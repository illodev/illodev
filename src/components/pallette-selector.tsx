"use client";

import { CheckIcon, Paintbrush } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { themes } from "@/config/themes";
import { updateTheme, useTheme } from "@/hooks/use-config";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ThemeCustomizer() {
    return (
        <div className="flex items-center space-x-2">
            <Drawer>
                <DrawerTrigger asChild>
                    <Button
                        title="Customize theme"
                        aria-label="Customize theme"
                        size="icon"
                        variant="ghost"
                        className="md:hidden"
                    >
                        <Paintbrush className="h-6 w-6" />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="p-6 pt-0">
                    <Customizer />
                </DrawerContent>
            </Drawer>
            <div className="hidden md:flex">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            title="Customize theme"
                            aria-label="Customize theme"
                            size="icon"
                            variant="ghost"
                            className="h-14 w-14 rounded-full"
                        >
                            <Paintbrush className="h-6 w-6" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        align="center"
                        sideOffset={8}
                        onOpenAutoFocus={(e) => e.preventDefault()}
                        className="z-40 w-auto rounded-[0.5rem] bg-white p-6 dark:bg-background"
                    >
                        <Customizer />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

function Customizer() {
    const currentTheme = useTheme();

    return (
        <div className="grid grid-cols-5 gap-4 pt-6 lg:pt-0">
            {Object.values(themes).map((theme) => {
                const isActive = theme.value === currentTheme.value;

                return (
                    <Tooltip key={theme.value}>
                        <TooltipTrigger asChild>
                            <Button
                                variant={"outline"}
                                size="icon"
                                onClick={() => updateTheme(theme)}
                                className={cn(
                                    "h-10 w-10 rounded-full",
                                    isActive && "border-2 border-primary"
                                )}
                                style={{
                                    backgroundColor: `hsl(${theme.colors[500]})`
                                }}
                            >
                                {isActive && (
                                    <CheckIcon className="h-4 w-4 text-white" />
                                )}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>{theme.label}</TooltipContent>
                    </Tooltip>
                );
            })}
        </div>
    );
}
