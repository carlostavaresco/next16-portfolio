import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Carlos Tavares | Branding & Product Designer",
    description: "Com mais de 7 anos de experiência, transformo ideias em marcas e produtos digitais atemporais.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased min-h-screen selection:bg-white selection:text-black`}>
                {children}
            </body>
        </html>
    );
}
