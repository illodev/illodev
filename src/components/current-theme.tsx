"use client";

import { useTheme } from "@/hooks/use-config";
import * as React from "react";

export const CurrentTheme = () => {
    const theme = useTheme();
    return React.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: `:root { ${Object.entries(theme.colors)
                .map(([key, value]) => `--color-current-${key}: ${value};`)
                .join(" ")} }`
        }
    });
};
