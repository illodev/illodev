import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const sectionVariants = cva("relative scroll-mt-16 py-16 xl:px-24 xl:py-40", {
    variants: {
        variant: {
            default: "",
            gradient: ""
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

interface SectionProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof sectionVariants> {
    id: string;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ variant, children, className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(sectionVariants({ variant, className }))}
                {...props}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = "Section";

export { Section };
