"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, MapPin } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a
            href="#home"
            className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2 hover:opacity-80 transition"
          >
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
              JT
            </span>
            Jignesh Tandel
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-blue-700 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main
        id="home"
        className="px-6 md:px-12 py-24 space-y-32 md:space-y-40 max-w-6xl mx-auto"
      >
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center fade-in pt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            Full Stack Developer building scalable and reliable web
            applications.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            Full Stack Developer experienced with the MERN stack and Next.js,
            comfortable working across frontend and backend to build secure
            authentication flows, well-structured APIs, and maintainable
            application architecture.
          </p>

          <div className="text-sm text-slate-500 mb-6 space-y-1">
            <p>Previously Jr. Software Developer @ Pragnakalp Techlabs</p>
            <p className="flex items-center justify-center gap-1">
              <MapPin className="w-4 h-4" /> Gujarat, India
            </p>
            <p>Open to Full Stack opportunities.</p>
          </div>

          {/* SKILLS STRIP */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 text-sm text-slate-600">
            {[
              "Node.js",
              "Express.js",
              "REST APIs",
              "MongoDB",
              "PostgreSQL",
              "JWT Authentication",
              "RBAC",
              "TypeScript",
              "Next.js",
              "React",
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-100 rounded-full">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              className="rounded-full px-8 h-12 text-base shadow-lg bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 h-12 text-base"
              asChild
            >
              <a
                href="https://github.com/Jigneshtandel27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 h-12 text-base"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/jigneshtandel27/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20">
          <div className="fade-in">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <Card className="group flex flex-col rounded-2xl border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-xl">
                          Next.js Commerce Platform
                        </CardTitle>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                          In Progress
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">
                        Authentication • RBAC • Structured API Layer
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href="https://tandel-ecommerce-ui.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live User Application"
                        className="p-2 hover:bg-white hover:text-blue-600 rounded-full transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Currently building a full-stack e-commerce platform with
                    secure authentication, role-based access control, and
                    scalable architecture.
                  </p>

                  <ul className="text-sm text-slate-500 mb-6 space-y-1">
                    <li>• Implemented authentication and protected routes</li>
                    <li>• Added role-based access for admin and users</li>
                    <li>
                      • Organized API and server code for clarity and
                      scalability
                    </li>
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "NextAuth", "MongoDB"].map(
                      (text) => (
                        <span
                          key={text}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded"
                        >
                          {text}
                        </span>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="group flex flex-col rounded-2xl border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        NextTech Shop
                      </CardTitle>
                      <p className="text-sm text-slate-500">
                        Full Stack MERN Application
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/Jigneshtandel27/nexttech-shop-user-frontend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github Repository"
                        className="p-2 hover:bg-white hover:text-blue-600 rounded-full transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://ecommerce-frontend-b1zb.onrender.com"
                        target="_blank"
                        title="Live User Application"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-white hover:text-blue-600 rounded-full transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Built a MERN e-commerce application featuring JWT
                    authentication, admin capabilities, and structured REST
                    APIs.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {["React", "Node.js", "Express", "JWT", "MongoDB"].map(
                      (text) => (
                        <span
                          key={text}
                          className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded"
                        >
                          {text}
                        </span>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="max-w-4xl mx-auto scroll-mt-20">
          <div className="fade-in">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold">Experience</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="space-y-10 relative border-l-2 border-slate-200 ml-4 md:ml-6 pl-8 md:pl-12 py-2">
              <div className="relative">
                <span className="absolute -left-[42px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-400"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    Jr. Software Developer
                  </h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Jun 2025 – Nov 2025
                  </span>
                </div>
                <p className="text-slate-700 font-medium mb-4">
                  Pragnakalp Techlabs
                </p>
                <ul className="list-disc ml-5 text-slate-600 space-y-2 leading-relaxed">
                  <li>
                    Developed production features in Next.js using TypeScript.
                  </li>
                  <li>
                    Managed complex client state with Zustand to support
                    scalable UI workflows.
                  </li>
                  <li>
                    Integrated REST APIs and improved client-server data
                    handling.
                  </li>
                </ul>
              </div>

              <div className="relative pt-6">
                <span className="absolute -left-[42px] md:-left-[59px] top-8 h-5 w-5 rounded-full border-4 border-white bg-slate-400"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    MERN Stack Intern
                  </h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Jan 2025 – Apr 2025
                  </span>
                </div>
                <p className="text-slate-700 font-medium mb-4">
                  Tech-Fusion Technologies
                </p>
                <ul className="list-disc ml-5 text-slate-600 space-y-2 leading-relaxed">
                  <li>
                    Built a full-stack tournament platform using the MERN stack.
                  </li>
                  <li>
                    Designed RESTful APIs and structured MongoDB schemas for
                    consistent data storage.
                  </li>
                  <li>
                    Connected React frontend with backend services to deliver
                    dynamic match data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="scroll-mt-20 max-w-4xl mx-auto fade-in"
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold">Let’s Work Together</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Let’s Build Great Products
                </h3>

                <p className="text-slate-600 max-w-md mx-auto">
                  Open to full-time Full Stack opportunities where I can
                  contribute across the stack, collaborate with teams, and
                  continue growing as a software engineer.
                </p>

                <p className="text-sm text-slate-500">
                  Available for full-time opportunities
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="mailto:jigneshmaheshtandel@gmail.com"
                  className="flex items-center gap-2 text-slate-700 font-medium bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  jigneshmaheshtandel@gmail.com
                </a>

                <div className="flex justify-center gap-4 flex-wrap mt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-10 h-14 text-lg shadow-lg bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <a href="mailto:jigneshmaheshtandel@gmail.com">Email Me</a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-10 h-14 text-lg"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/jigneshtandel27/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="text-center text-slate-500 py-8 text-sm border-t border-slate-100 bg-slate-50">
        © {new Date().getFullYear()} Jignesh Tandel. Built with Next.js &
        Tailwind.
      </footer>
    </div>
  );
}
