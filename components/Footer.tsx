import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full grid grid-cols-8 gap-6 px-16 pb-12 mt-40 pt-40 border-t border-subtle">
            {/* Contact Info */}
            <div className="col-span-8 md:col-span-4 flex flex-col text-xs uppercase text-muted tracking-widest gap-2">
                <span>CONTATO</span>
                <span>-</span>
                <span className="lowercase hover:text-white transition-colors cursor-pointer w-fit">
                    carlostavares.co2348@gmail.com
                </span>
            </div>

            {/* Social Links */}
            <div className="col-span-8 md:col-span-4 flex flex-col text-xs uppercase md:items-end text-left md:text-right tracking-widest gap-3 opacity-80 mt-12 md:mt-0">
                <Link href="#" className="hover:text-white transition-colors flex gap-2 w-fit group">
                    <span>INSTAGRAM</span>
                    <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">&#8599;</span>
                </Link>
                <Link href="#" className="hover:text-white transition-colors flex gap-2 w-fit group">
                    <span>LINKEDIN</span>
                    <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">&#8599;</span>
                </Link>
                <Link href="#" className="hover:text-white transition-colors flex gap-2 w-fit group">
                    <span>BEHANCE</span>
                    <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">&#8599;</span>
                </Link>
            </div>

            {/* Giant Typography Name */}
            <div className="col-span-8 flex justify-center items-end mt-16 md:mt-32 overflow-hidden pointer-events-none select-none">
                <h2 className="text-[12vw] sm:text-[14vw] md:text-[15vw] leading-[0.8] font-bold text-foreground text-center tracking-tighter w-full whitespace-nowrap opacity-90 scale-y-110">
                    CARLOS TAVARES
                </h2>
            </div>
        </footer>
    );
}
