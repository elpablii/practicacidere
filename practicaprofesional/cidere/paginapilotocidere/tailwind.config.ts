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
                primary: {
                    DEFAULT: "#1F2A44",
                    dark: "#0F172A",
                    light: "#2E3E5E",
                },
                secondary: {
                    DEFAULT: "#00D1FF",
                    neon: "#10B981",
                },
                accent: {
                    slate: "#64748B",
                    glass: "rgba(255, 255, 255, 0.03)",
                }
            },
        },
    },
    plugins: [],
};
export default config;