import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ImageIcon } from "lucide-react";

export function SectionWork() {
    return (
        <Section id="work">
            <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid-16 bg-center [mask-image:radial-gradient(hsl(var(--color-current-100)),transparent_100%)]" />
            <div className="container">
                <div>
                    <div className="flex flex-col pb-8 md:items-center lg:pb-16">
                        <span className="text-base tracking-tight text-current-600">
                            Work
                        </span>
                        <h2 className="font-lead mt-4 max-w-xl text-left text-xl font-light leading-tight tracking-wide md:text-center lg:text-3xl">
                            Here are some of my latest works, I hope you like
                            them
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <ScrollReveal
                            key={index}
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
                                    <div className="relative flex h-full flex-col p-2">
                                        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[calc(var(--radius)+10px)]">
                                            <ImageIcon className="h-10 w-10" />
                                        </div>
                                        <div className="mt-auto p-6">
                                            <div className="relative">
                                                <div className="text-lg text-foreground">
                                                    Coming Soon
                                                </div>
                                                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                                                    Lorem, ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Vitae nobis earum eos
                                                    officia veritatis corrupti
                                                    voluptates vero voluptatibus
                                                    aperiam! Nesciunt
                                                    perferendis voluptas nostrum
                                                    magni, a at cum dolor
                                                    accusamus eius.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
