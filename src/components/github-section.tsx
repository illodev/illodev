import Link from "next/link";

import { GithubIcon } from "@/components/icons/github-icon";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function GithubSection() {
    return (
        <Section id="github">
            <div className="container relative">
                <ScrollReveal
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
                        <div className="relative flex h-full flex-col">
                            <div className="relative flex h-full flex-col">
                                <div className="relative py-24">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="absolute h-[19rem] w-[19rem] animate-ripple rounded-full border border-dashed border-current-400/50 bg-current-300/15 shadow-xl will-change-transform [--i:2]" />
                                        <div className="absolute h-56 w-56 animate-ripple rounded-full border border-current-400/60 bg-current-300/15 shadow-xl will-change-transform [--i:1]" />
                                        <div className="absolute h-36 w-36 animate-ripple rounded-full border border-dashed border-current-400/70 bg-current-300/15 shadow-xl will-change-transform [--i:0]" />
                                    </div>
                                    <div className="relative flex items-center justify-center">
                                        <div className="flex h-16 w-16 rounded-full border border-current-400/30 bg-current-300/20 p-3">
                                            <GithubIcon className="h-10 w-10" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto px-6 pb-6">
                                    <div className="relative">
                                        <div className="text-lg text-foreground">
                                            Clone the repo
                                        </div>
                                        <p className="mt-1 font-light leading-relaxed text-muted-foreground">
                                            This project is open source, feel
                                            free to contribute.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link
                            aria-label="GitHub"
                            href="https://github.com/illodev"
                            target="_blank"
                            className="absolute inset-0 z-10"
                        />
                    </SpotlightCard>
                </ScrollReveal>
            </div>
        </Section>
    );
}
