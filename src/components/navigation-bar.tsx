"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "./icons/github-icon";
import { SpotlightCard } from "./ui/spotlight-card";

const navLinks: {
    id: string;
    href: string;
    label: string;
    icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    target?: string;
}[] = [
    {
        id: "home",
        href: "#home",
        label: "Home"
    },
    {
        id: "about",
        href: "#about",
        label: "About me"
    },
    {
        id: "work",
        href: "#work",
        label: "Work"
    },
    {
        id: "contact",
        href: "#contact",
        label: "Contact"
    },
    {
        id: "github",
        href: "https://github.com/illodev",
        label: "Github",
        icon: GithubIcon,
        target: "_blank"
    }
] as const;

export function NavigationBar() {
    const [currentSection, setCurrentSection] = React.useState<string>("home");

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((link) => link.id);
            const currentSection = sections.findLast((section) => {
                const el = document.getElementById(section);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= 200 && rect.bottom >= -200;
            });
            setCurrentSection(currentSection || "home");
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="pointer-events-none sticky top-0 z-10 hidden py-6 lg:block">
            <SpotlightCard
                size={224}
                from="hsl(var(--color-current-500))"
                to="transparent"
                asChild
            >
                <nav className="container pointer-events-auto max-w-max rounded-[calc(var(--radius)+40px)] border border-border/20 px-0">
                    <div className="absolute inset-px rounded-[calc(var(--radius)+39px)] bg-background/95 backdrop-blur-2xl" />
                    <div className="relative flex w-full items-center">
                        {navLinks.map((link) => (
                            <React.Fragment key={link.href}>
                                <Link
                                    href={link.href}
                                    target={link.target}
                                    className={cn(
                                        "flex items-center px-10 py-6 font-medium uppercase transition-colors duration-300 ease-in-out",
                                        currentSection === link.id
                                            ? "text-current-600"
                                            : "hover:text-current-600"
                                    )}
                                >
                                    {link.icon && (
                                        <link.icon className="mr-3 h-6 w-6" />
                                    )}
                                    {link.label}
                                    {link.target === "_blank" && (
                                        <ArrowUpRightIcon className="ml-2 h-5 w-5" />
                                    )}
                                </Link>
                                <div className="h-6 w-px bg-current-500/40" />
                            </React.Fragment>
                        ))}
                    </div>
                </nav>
            </SpotlightCard>
        </div>
    );
}
