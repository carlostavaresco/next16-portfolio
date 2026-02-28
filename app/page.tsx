import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-background text-foreground selection:bg-white selection:text-black">
            <Header />

            {/* Hero section */}
            <div className="w-full px-6 md:px-12 mt-32 md:mt-48 flex items-end">
                <div className="w-full flex justify-end pb-12">
                    <h1 className="text-2xl md:text-3xl font-medium max-w-[600px] leading-snug md:leading-relaxed text-foreground tracking-tight">
                        Com mais de 7 anos de experiência, transformo ideias em marcas e produtos digitais atemporais.
                    </h1>
                </div>
            </div>

            <ProjectsList />
            <Footer />
        </main>
    );
}
