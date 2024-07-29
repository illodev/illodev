"use client";

import React from "react";

export default function useMouseMove() {
    React.useEffect(() => {
        const target = document.body;

        if (!target) {
            return;
        }

        function mouseMoveEvent(e: MouseEvent) {
            if (!target) {
                return;
            }

            const scale = window.visualViewport?.scale;
            // disable mouse movement on viewport zoom - causes page to slow down
            if (scale === 1) {
                const targetX = e.clientX;
                const targetY = e.clientY;

                // TODO: make it move around cursor so you feal like its floating around it
                // the animation requires tranformX and transformY on the HTML Element
                target.style.setProperty("--x", `${targetX}px`);
                target.style.setProperty("--y", `${targetY}px`);
            }
        }

        target.addEventListener("mousemove", mouseMoveEvent);

        return () => {
            target.removeEventListener("mousemove", mouseMoveEvent);
        };
    }, []);
}
