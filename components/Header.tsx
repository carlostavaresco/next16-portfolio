"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
    const [time, setTime] = useState("");

    useEffect(() => {
        // Determine the time in browser format
        const updateClock = () => {
            const date = new Date();
            // Use toLocaleTimeString carefully to get 18:17:32 PM format
            // Note: Usually 24h format doesn't need AM/PM, but the design shows it (18:17:32PM)
            // So we will combine 24h format with PM manually if needed, or let Intl format it.
            let timeString = date.toLocaleTimeString("en-US", {
                timeZone: "America/Sao_Paulo",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            // The design has PM/AM directly attached without space: "18:17:32PM"
            const ampm = date.getHours() >= 12 ? "PM" : "AM";
            setTime(`${timeString}${ampm}`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="w-full grid grid-cols-8 gap-6 px-16 py-8 text-sm uppercase tracking-wider text-muted font-medium">
            {/* Name (spans 3 columns) */}
            <div className="col-span-8 md:col-span-3 text-foreground text-xl tracking-normal font-semibold">
                CARLOS TAVARES
            </div>

            {/* Role (spans 2 columns) */}
            <div className="col-span-4 md:col-span-2 flex md:justify-center text-xs">
                <span className="text-left w-fit">
                    Branding
                    <br />
                    &amp; Product Designer
                </span>
            </div>

            {/* Location & Time (spans 3 columns) */}
            <div className="col-span-4 md:col-span-3 flex justify-end text-xs text-right opacity-80">
                <div className="flex gap-16">
                    <span className="hidden lg:block">&rarr;</span>
                    <div className="flex flex-col items-end">
                        <span className="flex gap-4">
                            <span>TERESÓPOLIS, RIO DE JANEIRO</span>
                        </span>
                        <span className="flex gap-4">
                            <span>BRASIL &rarr;</span>
                            <span className="min-w-[80px] text-right">{time || "—:—:—"}</span>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
