"use client";

import React from "react";

import useMouseMove from "@/hooks/use-mouse-move";

export function Background({ children }: { children: React.ReactNode }) {
    useMouseMove();

    return (
        <>
            <div className="pointer-events-none fixed left-0 top-0 z-50">
                <div className="sticky left-0 top-0 h-screen w-screen overflow-hidden">
                    <div className="absolute left-[--x] top-[--y] z-50 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-current-600/10 from-0% to-transparent to-90% blur-md" />
                </div>
            </div>
            {children}
        </>
    );
}
