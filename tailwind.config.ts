import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                foreground: "#F3F4F6", // gray-100
                muted: "#9CA3AF", // gray-400
                subtle: "#262626", // neutral-800 for borders
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            fontSize: {
                // Custom massive sizes for footer
                "10vw": "10vw",
                "15vw": "15vw",
            }
        },
    },
    plugins: [],
};
export default config;
