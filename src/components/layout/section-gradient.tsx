import { cn } from "@/lib/utils";
import * as React from "react";

interface SectionSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const SectionSeparator = React.forwardRef<
    HTMLDivElement,
    SectionSeparatorProps
>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("relative", className)} {...props}>
            <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-current-500/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background p-1.5">
                <div className="h-1.5 w-8 rounded-lg bg-current-500"></div>
            </div>
            <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-current-500/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background p-1.5">
                <div className="h-1.5 w-8 rounded-lg bg-current-500"></div>
            </div>
        </div>
    );
});

SectionSeparator.displayName = "SectionSeparator";

export { SectionSeparator };
