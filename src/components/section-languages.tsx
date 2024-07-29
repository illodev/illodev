import { CursorIcon } from "@/components/icons/cursor-icon";
import { Section } from "@/components/layout/section";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from "@/components/ui/hover-card";
import { languages } from "@/config/languages";
import { spaceGrotesk } from "@/fonts";
import { cn } from "@/lib/utils";

export function SectionLanguages() {
    return (
        <Section id="languages" className="overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-grid-white-dashed bg-grid-16 bg-center [mask-image:radial-gradient(hsl(var(--color-current-100)),transparent_100%)]" />
            <div className="container relative flex justify-center">
                <div className="relative flex aspect-square w-1/2 flex-none items-center justify-center">
                    <div className="absolute inset-x-0 inset-y-1/4 skew-y-12 rounded-full bg-current-600/20 blur-[200px] will-change-[filter]" />
                    <div className="absolute inset-1/4 rounded-full border border-dashed border-current-500 blur-sm will-change-[filter] motion-safe:animate-rotate-fast">
                        <div className="absolute right-1/2 top-full h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-current-500 ring ring-current-700 ring-offset-8 ring-offset-background blur-sm will-change-[filter]" />
                    </div>
                    <div className="absolute inset-0 rounded-full border border-dashed border-current-500 blur-sm will-change-[filter] motion-safe:animate-rotate-slow">
                        <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-emerald-500 ring ring-emerald-700 ring-offset-8 ring-offset-background blur-sm will-change-[filter]" />
                        <div className="absolute right-1/2 top-full h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-orange-500 ring ring-orange-700 ring-offset-8 ring-offset-background blur-sm will-change-[filter]" />
                    </div>
                    <CursorIcon className="absolute -bottom-10 -right-1/3 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-current-600" />
                    <div className="absolute -mt-5 w-max">
                        <h2
                            className={cn(
                                "text-center text-6xl font-bold leading-none tracking-tighter transition-all duration-500 ease-out",
                                spaceGrotesk.className
                            )}
                        >
                            My{" "}
                            <span className="text-current-600 dark:text-current-300">
                                Skills
                            </span>
                            <br /> &{" "}
                            <span className="text-current-600 dark:text-current-300">
                                Languages
                            </span>
                        </h2>
                    </div>
                    <div className="absolute -inset-x-24 -inset-y-12 flex gap-12">
                        {Object.values(languages).map((lang, index) => (
                            <HoverCard key={lang.name} openDelay={200}>
                                <HoverCardTrigger asChild>
                                    <button
                                        className={cn(
                                            "absolute flex w-max transform cursor-pointer items-center justify-between gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-3xl",
                                            lang.color
                                        )}
                                        style={{
                                            transition: "transform 1s ease-out",
                                            transform: `translate(calc(var(--x) / ${Math.random() * 10 + 10} - 70%),calc(var(--y) / ${Math.random() * 10 + 10} - 60%))`,
                                            left: `${Math.cos((index / Object.keys(languages).length) * 2 * Math.PI) * (index % 2 ? 35 : 50) + 50}%`,
                                            top: `${Math.sin((index / Object.keys(languages).length) * 2 * Math.PI) * (index % 2 ? 25 : 45) + 50}%`
                                        }}
                                    >
                                        <lang.icon className="h-5 w-5" />
                                        {lang.name}
                                    </button>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={cn(
                                        lang.color,
                                        "z-50 max-w-sm rounded-3xl border p-6 font-semibold backdrop-blur-3xl transition-all duration-100"
                                    )}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3
                                            className={cn(
                                                "text-lg font-bold",
                                                spaceGrotesk.className
                                            )}
                                        >
                                            {lang.name}
                                        </h3>
                                        <lang.icon className="h-6 w-6" />
                                    </div>
                                    <p className="mt-2">{lang.description}</p>
                                </HoverCardContent>
                            </HoverCard>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
