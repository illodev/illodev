"use client";

import { ArrowUpRightIcon, CopyIcon, LucideIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";

interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
    contact: {
        title: string;
        description: string;
        icon:
            | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element)
            | LucideIcon;
        value: string;
        href: string;
    };
}

const ContactCard = React.forwardRef<HTMLDivElement, ContactCardProps>(
    ({ contact }, ref) => {
        const handleCopy = () => {
            navigator.clipboard.writeText(contact.value);
        };

        return (
            <ScrollReveal
                ref={ref}
                offsetTop={400}
                offsetBottom={-70}
                animation="slide-up"
                asChild
            >
                <SpotlightCard
                    size={224}
                    from="hsl(var(--color-current-500))"
                    to="transparent"
                    className="w-full rounded-[calc(var(--radius)+16px)] border border-border/20"
                >
                    <div className="absolute inset-px rounded-[calc(var(--radius)+15px)] bg-background/95" />
                    <div className="flex w-full flex-col gap-4 p-8">
                        <div className="relative flex h-full items-center gap-6">
                            <div className="relative">
                                <div className="relative flex items-center justify-center">
                                    <contact.icon className="relative h-10 w-10" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="text-lg text-foreground">
                                    {contact.title}
                                </div>
                                <p className="leading-relaxed text-muted-foreground">
                                    {contact.description}
                                </p>
                            </div>
                        </div>
                        <div className="relative flex items-center gap-2">
                            <label htmlFor={contact.title} className="sr-only">
                                {contact.title}
                            </label>
                            <Input
                                type="text"
                                autoComplete="off"
                                id={contact.title}
                                name={contact.title}
                                value={contact.value}
                                readOnly
                            />
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="Copy to clipboard"
                                        size="icon"
                                        variant="outline"
                                        className="bg-transparent p-2"
                                        onClick={handleCopy}
                                    >
                                        <CopyIcon className="h-6 w-6" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Copy to clipboard
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        aria-label="Open in new tab"
                                        href={contact.href}
                                        target="_blank"
                                        className={buttonVariants({
                                            variant: "outline",
                                            size: "icon",
                                            className: "bg-transparent p-2"
                                        })}
                                    >
                                        <ArrowUpRightIcon className="h-6 w-6" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>Open in new tab</TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </SpotlightCard>
            </ScrollReveal>
        );
    }
);

ContactCard.displayName = "ContactCard";

export { ContactCard };
