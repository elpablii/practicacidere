import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'slow-zoom': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            animation: {
                'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
                marquee: 'marquee 240s linear infinite',
                marquee2: 'marquee2 240s linear infinite',
            },

            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: {
                    DEFAULT: "#1F2A44",
                    light: "#2C3B5E",
                    dark: "#141B2D",
                },
                secondary: {
                    DEFAULT: "#1F2A44",
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#E5E7EB",
                },
            },
        },
    },
    plugins: [],
};
export default config;