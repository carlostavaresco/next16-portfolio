import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-background text-foreground selection:bg-white selection:text-black">
            <Header />

            {/* Hero section grids into 8 columns */}
            <div className="w-full grid grid-cols-8 gap-6 px-16 mt-32 md:mt-48 items-end">
                {/* Empty left space, spans 4 cols */}
                <div className="col-span-8 md:col-span-4 lg:col-span-5"></div>
                {/* Right content, spans 3-4 cols */}
                <div className="col-span-8 md:col-span-4 lg:col-span-3 pb-12">
                    <ScrollReveal
                        baseOpacity={0.2}
                        enableBlur
                        baseRotation={3}
                        blurStrength={2}
                        textClassName="text-[clamp(1.6rem,2vw,3rem)] leading-[1.3] text-foreground font-medium tracking-tight"
                    >
                        Com mais de 7 anos de experiência, transformo ideias em marcas e produtos digitais atemporais.
                    </ScrollReveal>
                </div>
            </div>

            <ProjectsList />
            <Footer />
        </main>
    );
}
