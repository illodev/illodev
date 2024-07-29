import Link from "next/link";

import { footerLinks } from "@/config/site";
import { butterflyKids } from "@/fonts";
import { cn } from "@/lib/utils";

export default function Footer() {
    return (
        <footer className="relative bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.current.500/5%),transparent)] py-32 lg:px-24 lg:py-32">
            <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-current-500/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background p-1.5">
                <div className="h-1.5 w-8 rounded-lg bg-current-500" />
            </div>
            <div className="container">
                <div className="flex w-full flex-col gap-8 sm:flex-row">
                    <div className="grid w-full grid-cols-2 flex-row gap-8 sm:w-1/3 sm:flex-col sm:gap-7 lg:flex">
                        <Link
                            href="/"
                            className={cn(
                                "text-5xl font-bold",
                                butterflyKids.className
                            )}
                        >
                            illodev
                        </Link>
                    </div>
                    <div className="grid w-full grid-cols-2 gap-8 sm:w-2/3 lg:grid-cols-3">
                        {footerLinks.map(({ title, links }) => (
                            <div key={title} className="flex flex-col gap-4">
                                <p className="text-sm text-foreground">
                                    {title}
                                </p>
                                <ul className="mt-3 space-y-3">
                                    {links.map(({ href, title, target }) => (
                                        <li key={title}>
                                            <Link
                                                href={href}
                                                target={target}
                                                className="text-sm font-light text-muted-foreground transition hover:text-foreground"
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
