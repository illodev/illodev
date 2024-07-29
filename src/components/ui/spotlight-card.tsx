"use client";

import { cn, mergeRefs } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

declare module "react" {
    interface CSSProperties {
        "--spotlight-size"?: string;
        "--spotlight-color-stops"?: string;
    }
}

const spotlightCardVariants = cva(
    "relative transform-gpu overflow-hidden before:absolute before:inset-0 before:will-change-[background]",
    {
        variants: {
            variant: {
                radial: "before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--spotlight-x)_var(--spotlight-y),var(--spotlight-color-stops))]",
                linear: "before:bg-[linear-gradient(var(--spotlight-x)_var(--spotlight-y),var(--spotlight-color-stops))]"
            }
        },
        defaultVariants: {
            variant: "radial"
        }
    }
);

interface SpotlightCardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof spotlightCardVariants> {
    asChild?: boolean;
    size?: number;
    from?: string;
    via?: string;
    to?: string;
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
    (
        {
            className,
            variant,
            asChild = false,
            size,
            from = "rgba(255, 255, 255, 0.5)",
            via = from,
            to = from,
            ...props
        },
        ref
    ) => {
        const elRef = React.useRef<HTMLDivElement>(
            null
        ) as React.MutableRefObject<HTMLDivElement>;

        React.useEffect(() => {
            const element = elRef.current;

            if (!element) {
                return;
            }

            function handleMouseMove(e: MouseEvent) {
                const { left, top } = element.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;

                element.style.setProperty("--spotlight-x", `${x}px`);
                element.style.setProperty("--spotlight-y", `${y}px`);
            }

            document.body.addEventListener("mousemove", handleMouseMove);

            return () =>
                document.body.removeEventListener("mousemove", handleMouseMove);
        }, [elRef]);

        const Comp = asChild ? Slot : "div";

        return (
            <Comp
                ref={mergeRefs(ref, elRef)}
                className={cn(spotlightCardVariants({ variant, className }))}
                style={{
                    "--spotlight-size": `${size}px`,
                    "--spotlight-color-stops": `${from}, ${via}, ${to}`
                }}
                {...props}
            />
        );
    }
);

SpotlightCard.displayName = "SpotlightCard";

export { SpotlightCard };
