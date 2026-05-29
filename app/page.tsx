import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans antialiased selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-100">
      {/* Visual Accent Background Meshes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1000px] pointer-events-none -z-10 select-none overflow-hidden">
        {/* Glow Spot 1 */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[120px]" />
        {/* Glow Spot 2 */}
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[130px]" />
        {/* Glow Spot 3 */}
        <div className="absolute top-[70%] left-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]" />
      </div>

      {/* STICKY BLUR NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
        {/* HERO SECTION */}
        <Hero />

        {/* STATS SECTION */}
        <Stats />

        {/* ABOUT ME SECTION */}
        <About />

        {/* TECH STACK SECTION */}
        <TechStack />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* EXPERIENCE SECTION */}
        <Experience />

        {/* CONTACT SECTION */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}