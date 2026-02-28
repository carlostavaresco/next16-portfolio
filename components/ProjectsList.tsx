import React from "react";

export const projects = [
    { name: "OROFACE", category: "BRANDING / VISUAL ID.", year: "2026" },
    { name: "CLEARMED", category: "LOGO", year: "2026" },
    { name: "HOWMANLY", category: "VISUAL ID.", year: "2025" },
    { name: "RUDAS DEVELOPMENT", category: "BRANDING / VISUAL ID.", year: "2025" },
    { name: "SELVRA", category: "BRANDING", year: "2025" },
    { name: "AIKISSOBA", category: "BRANDING", year: "2024" },
];

export default function ProjectsList() {
    return (
        <section className="w-full px-16 mt-40 font-sans">
            {/* Header section of the list - using grid */}
            <div className="grid grid-cols-8 gap-6 text-[16px] text-muted mb-12 uppercase">
                <span className="col-span-8 md:col-span-4">01. PROJETOS</span>
                <span className="col-span-8 md:col-span-4 md:text-right">SELECTED WORKS &#8601;</span>
            </div>

            {/* Projects Table */}
            <div className="w-full flex flex-col border-t border-subtle">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group grid grid-cols-8 gap-6 items-center py-6 border-b border-subtle hover:bg-white/5 transition-colors cursor-pointer"
                    >
                        <div className="col-span-8 md:col-span-3 text-[16px] font-medium text-foreground tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                            {project.name}
                        </div>

                        {/* The design splits the category and year to the right side seamlessly */}
                        <div className="col-span-8 md:col-span-5 flex justify-between items-center text-[16px] text-muted">
                            <span>{project.category}</span>
                            <span>{project.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
