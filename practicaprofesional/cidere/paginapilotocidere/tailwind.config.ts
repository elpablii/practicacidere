import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

            animation: {
                marquee: 'marquee 240s linear infinite',
                marquee2: 'marquee2 240s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },

            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: {
                    DEFAULT: "#1F2A44", // Azul Marino
                    light: "#2C3B5E",
                    dark: "#141B2D",
                },
                secondary: {
                    DEFAULT: "#00BFA5", // Verde Azulado/cian
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#E5E7EB", // Gris claro
                },
            },
        },
    },
    plugins: [],
};
export default config;
