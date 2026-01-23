import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
