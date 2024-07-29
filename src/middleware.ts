import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/config/locales";

export async function middleware(req: NextRequest) {
    const response = createMiddleware({
        locales,
        defaultLocale,
        localeDetection: true,
        alternateLinks: true,
        localePrefix: "as-needed"
    })(req);

    response.headers.set("Cache-Control", "public, max-age=60");

    return response;
}

export const config = {
    matcher: [
        {
            source: "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"
        }
    ]
};
