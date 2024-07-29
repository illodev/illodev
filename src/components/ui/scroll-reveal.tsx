"use client";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn, mergeRefs } from "@/lib/utils";

const scrollRevealVariants = cva("duration-500", {
    variants: {
        animation: {
            "slide-up":
                "transition-[transform,opacity] data-[state=hidden]:translate-y-8 data-[state=hidden]:opacity-0",
            "slide-down":
                "transition-[transform,opacity] data-[state=hidden]:translate-y-[-8px] data-[state=hidden]:opacity-0",
            "slide-left":
                "transition-[transform,opacity] data-[state=hidden]:translate-x-8 data-[state=hidden]:opacity-0",
            "slide-right":
                "transition-[transform,opacity] data-[state=hidden]:translate-x-[-8px] data-[state=hidden]:opacity-0",
            "fade-in": "transition-opacity data-[state=hidden]:opacity-0",
            "fade-out": "transition-opacity data-[state=hidden]:opacity-0"
        }
    },
    defaultVariants: {
        animation: "slide-up"
    }
});

interface ScrollRevealProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof scrollRevealVariants> {
    asChild?: boolean;
    offsetTop?: number;
    offsetBottom?: number;
}

const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
    (
        {
            className,
            animation,
            asChild = false,
            offsetTop = 0,
            offsetBottom = 0,
            ...props
        },
        ref
    ) => {
        const elRef = React.useRef<HTMLDivElement>(
            null
        ) as React.MutableRefObject<HTMLDivElement>;

        React.useEffect(() => {
            const element = elRef.current;

            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    element.setAttribute(
                        "data-state",
                        entry.isIntersecting ? "visible" : "hidden"
                    );
                },
                {
                    root: null,
                    rootMargin: `${offsetTop}px 0px ${offsetBottom}px 0px`,
                    threshold: 0
                }
            );

            observer.observe(element);

            return () => observer.unobserve(element);
        }, [elRef, offsetTop, offsetBottom]);

        const Comp = asChild ? Slot : "div";

        return (
            <Comp
                ref={mergeRefs(ref, elRef)}
                className={cn(scrollRevealVariants({ animation, className }))}
                {...props}
            />
        );
    }
);

ScrollReveal.displayName = "ScrollReveal";

export { ScrollReveal };
