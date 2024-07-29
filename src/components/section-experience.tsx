import { Section } from "@/components/layout/section";
import { experience } from "@/config/experience";
import { spaceGrotesk } from "@/fonts";
import { cn } from "@/lib/utils";

export function SectionExperience() {
    return (
        <Section id="experience" variant="gradient">
            <div className="container relative">
                <div className="flex flex-col md:items-center">
                    <span className="text-base font-semibold text-current-600">
                        My timeline
                    </span>
                    <h2 className="mt-4 text-left text-2xl font-light leading-[1.125] md:text-center md:text-4xl lg:text-5xl">
                        See where I&apos;ve been
                    </h2>
                </div>
                <div className="mt-16 flex flex-col items-center">
                    {experience.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className={cn(
                                "flex w-[calc(50%+1rem)] gap-8",
                                itemIndex % 2 === 0
                                    ? "flex-row-reverse justify-end self-start text-right"
                                    : "flex-row justify-start self-end text-left"
                            )}
                        >
                            <div className="flex flex-none flex-col items-center">
                                <div className="relative z-[4] my-6">
                                    <div className="z-1 relative inline-block transition-opacity duration-300 ease-linear data-[visible=false]:motion-safe:opacity-0 data-[visible=true]:motion-safe:opacity-100">
                                        <span
                                            className={cn(
                                                "absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-lg",
                                                itemIndex % 2 === 0
                                                    ? "bg-current-600"
                                                    : "bg-emerald-600"
                                            )}
                                        />
                                        <item.icon className="relative h-8 w-8" />
                                    </div>
                                </div>
                                <div
                                    className={cn(
                                        "w-1 flex-1 rounded bg-primary",
                                        itemIndex % 2 === 0
                                            ? "from-current-600 via-emerald-600 to-emerald-600"
                                            : "from-emerald-600 via-emerald-600 to-current-600"
                                    )}
                                />
                            </div>
                            <div className="mt-7 flex-grow overflow-hidden">
                                <div>
                                    <h2
                                        className={cn(
                                            "text-base font-semibold transition-opacity duration-300 ease-linear data-[visible=false]:motion-safe:opacity-0 data-[visible=true]:motion-safe:opacity-100 lg:text-2xl",
                                            spaceGrotesk.className
                                        )}
                                    >
                                        {new Date(item.from).toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "short",
                                                year: "numeric"
                                            }
                                        )}
                                        {" - "}
                                        {item.to === "now"
                                            ? "Present"
                                            : new Date(
                                                  item.to
                                              ).toLocaleDateString("en-US", {
                                                  month: "short",
                                                  year: "numeric"
                                              })}
                                    </h2>
                                    <h3
                                        className={cn(
                                            "mt-6 max-w-4xl text-base font-bold transition-opacity duration-300 ease-linear data-[visible=false]:motion-safe:opacity-0 data-[visible=true]:motion-safe:opacity-100 lg:text-4xl",
                                            itemIndex % 2 === 0
                                                ? "text-current-600"
                                                : "text-emerald-600",
                                            spaceGrotesk.className
                                        )}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 max-w-4xl text-sm font-medium transition-opacity duration-300 ease-linear data-[visible=false]:motion-safe:opacity-0 data-[visible=true]:motion-safe:opacity-100 lg:text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
