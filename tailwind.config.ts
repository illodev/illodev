import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1200px"
            }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "grid-white": `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(255 255 255 / 0.1)' viewBox='0 0 64 64'%3E%3Cpath d='M64 0H0v64'/%3E%3C/svg%3E")`,
                "grid-white-dashed": `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(255 255 255 / 0.1)' viewBox='0 0 64 64'%3E%3Cpath stroke-dasharray='4 4' d='M64 0H0v64'/%3E%3C/svg%3E")`
            },
            backgroundSize: {
                "grid-16": "4rem 4rem"
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                current: {
                    50: "hsl(var(--color-current-50))",
                    100: "hsl(var(--color-current-100))",
                    200: "hsl(var(--color-current-200))",
                    300: "hsl(var(--color-current-300))",
                    400: "hsl(var(--color-current-400))",
                    500: "hsl(var(--color-current-500))",
                    600: "hsl(var(--color-current-600))",
                    700: "hsl(var(--color-current-700))",
                    800: "hsl(var(--color-current-800))",
                    900: "hsl(var(--color-current-900))"
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" }
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" }
                },
                "rotate-slow": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" }
                },
                ripple: {
                    "50%": {
                        transform: "scale(1.15)"
                    }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "rotate-slow": "rotate-slow 50s linear infinite",
                "rotate-fast": "rotate-slow 30s linear infinite",
                ripple: "ripple var(--duration,1.5s) ease calc(var(--i, 0)*.1s) infinite"
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
