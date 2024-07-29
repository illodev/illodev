import type { Metadata, Viewport } from "next";

import Footer from "@/components/footer";
import { ThemeCustomizer } from "@/components/pallette-selector";
import { ThemeProvider } from "@/components/theme-provider";
import { locales } from "@/config/locales";
import { butterflyKids, dmSans } from "@/fonts";
import { cn } from "@/lib/utils";

import { Background } from "@/components/background";
import { CurrentTheme } from "@/components/current-theme";
import { TooltipProvider } from "@/components/ui/tooltip";
import { site } from "@/config/site";
import { env } from "@/env.mjs";
import "@/styles/globals.css";
import Link from "next/link";

interface Props {
    params: {
        locale: string;
    };
}

export const viewport: Viewport = {
    colorScheme: "dark",
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
        title: site.title,
        description: site.description,
        keywords: site.keywords,
        authors: [
            {
                name: "Álvaro Jáuregui Pinto",
                url: "https://www.linkedin.com/in/%C3%A1lvaro-j%C3%A1uregui-pinto-38b634160"
            }
        ],
        creator: "Álvaro Jáuregui Pinto",
        openGraph: {
            type: "website",
            locale: params.locale,
            url: env.NEXT_PUBLIC_APP_URL,
            title: site.title,
            description: site.description,
            images: [
                {
                    url: `${env.NEXT_PUBLIC_APP_URL}/og-image.png`,
                    alt: site.title,
                    width: 1200,
                    height: 630
                }
            ],
            siteName: "Illodev"
        },
        manifest: `${env.NEXT_PUBLIC_APP_URL}/manifest.json`,
        alternates: {
            canonical: env.NEXT_PUBLIC_APP_URL,
            languages: locales.reduce(
                (acc, cur) => ({
                    ...acc,
                    [cur]: `${env.NEXT_PUBLIC_APP_URL}/${cur}`
                }),
                {}
            )
        }
    };
}

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
    params: {
        locale: (typeof locales)[number];
    };
}>;

export default function RootLayout({
    children,
    params: { locale }
}: RootLayoutProps) {
    return (
        <html
            lang={locale}
            className="scroll-smooth antialiased"
            suppressHydrationWarning
        >
            <head>
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <CurrentTheme />
            </head>
            <body className={cn(dmSans.className, "bg-background")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <Background>
                            <div className="flex min-h-screen w-full flex-col items-stretch justify-between gap-16">
                                <header className="container absolute inset-x-0 z-50 flex items-center justify-between py-4">
                                    <Link
                                        href="/"
                                        className={cn(
                                            "text-5xl font-bold",
                                            butterflyKids.className
                                        )}
                                    >
                                        illodev
                                    </Link>
                                    <div className="flex items-center space-x-4">
                                        <ThemeCustomizer />
                                    </div>
                                </header>
                                {children}
                                <Footer />
                            </div>
                        </Background>
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
