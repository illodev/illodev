import { spaceGrotesk } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { WhatsappIcon } from "./icons/whatsapp-icon";
import { Astronaut } from "./layout/astronaut";
import { Sparkles } from "./ui/sparkles";
import { SpotlightCard } from "./ui/spotlight-card";

export function Hero() {
    return (
        <section id="home" className="relative pb-12 pt-24">
            <div className="absolute inset-x-0 -bottom-10 hidden h-full w-full translate-y-1/2 overflow-hidden [mask-image:radial-gradient(50%_50%,hsl(var(--color-current-100)),transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,hsl(var(--color-current-500)),transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-current-500/60 after:bg-background lg:block">
                <Sparkles
                    density={1200}
                    className="absolute inset-x-0 bottom-0 z-0 h-full w-full [mask-image:radial-gradient(50%_50%,hsl(var(--color-current-100)),transparent_85%)]"
                />
            </div>
            <div className="container relative">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="hidden lg:block">
                        <Astronaut className="h-[600px] w-[600px] object-contain" />
                    </div>
                    <div>
                        <div className="max-w-xl">
                            <h1 className="text-base font-semibold text-current-600">
                                DEVELOPMENT, DESIGN & SYS ADMIN
                            </h1>
                            <h2
                                className={cn(
                                    "mt-6 text-5xl font-bold lg:text-6xl",
                                    spaceGrotesk.className
                                )}
                            >
                                Api & Web Development <br />
                                <span className="text-current-600">
                                    for your business
                                </span>
                            </h2>
                            <p className="mt-6 max-w-md text-xl">
                                I&apos;m a developer, designer and sys admin
                                with over 3 years of experience. I can help you
                                with your next project.
                            </p>
                            <div className="mt-12 flex items-center gap-4">
                                <SpotlightCard
                                    size={224}
                                    from="hsla(var(--color-current-500))"
                                    to="transparent"
                                    asChild
                                >
                                    <Link
                                        href="https://wa.me/+34698663608"
                                        target="_blank"
                                        className="rounded-[calc(var(--radius)+40px)] border border-border/20 px-8 py-2"
                                    >
                                        <div className="absolute inset-px rounded-[calc(var(--radius)+39px)] bg-background/95" />
                                        <span className="relative flex items-center justify-between gap-6">
                                            <span className="text-lg font-normal text-current-600 dark:text-current-400">
                                                Contact me on WhatsApp
                                            </span>
                                            <span className="-mr-6 flex aspect-square w-14 items-center justify-center rounded-full bg-current-600/40 p-3">
                                                <WhatsappIcon
                                                    width={48}
                                                    height={48}
                                                    className="h-full w-full object-contain"
                                                />
                                            </span>
                                        </span>
                                    </Link>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
