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
        <section className="w-full px-6 md:px-12 mt-40">
            {/* Header section of the list */}
            <div className="flex justify-between items-center text-xs text-muted mb-12 uppercase">
                <span>01. PROJETOS</span>
                <span>SELECTED WORKS &#8601;</span>
            </div>

            {/* Projects Table */}
            <div className="w-full flex flex-col border-t border-subtle">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col md:flex-row justify-between md:items-center py-6 border-b border-subtle hover:bg-white/5 transition-colors cursor-pointer"
                    >
                        <div className="w-full md:w-1/3 text-lg font-medium text-foreground tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                            {project.name}
                        </div>

                        {/* The design splits the category and year to the right side seamlessly */}
                        <div className="w-full md:w-2/3 flex justify-between items-center mt-2 md:mt-0 text-sm md:text-xs text-muted">
                            <span>{project.category}</span>
                            <span>{project.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
