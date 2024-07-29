"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="flex items-center justify-center">
            <Button
                variant={theme === "light" ? "default" : "outline"}
                size="lg"
                onClick={() => setTheme("light")}
                className="rounded-l-full rounded-r-none"
            >
                <SunIcon className="h-6 w-6" />
            </Button>
            <Button
                variant={theme === "dark" ? "default" : "outline"}
                size="lg"
                onClick={() => setTheme("dark")}
                className="rounded-l-none rounded-r-full"
            >
                <MoonIcon className="h-6 w-6" />
            </Button>
        </div>
    );
}
