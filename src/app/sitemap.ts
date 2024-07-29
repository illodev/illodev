import { env } from "@/env.mjs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${env.NEXT_PUBLIC_APP_URL}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1
        }
    ];
}
