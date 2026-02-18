"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Mail,
  ExternalLink,
  MapPin,
  Sun,
  Moon,
  Linkedin,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

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
      {
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.1,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 dark:selection:bg-blue-800/50 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a
            href="#home"
            className="font-bold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md">
              JT
            </span>
            <span className="hidden sm:inline">Jignesh Tandel</span>
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </nav>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main
        id="home"
        className="px-6 md:px-12 py-24 space-y-32 md:space-y-40 max-w-6xl mx-auto"
      >
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center fade-in pt-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
            👋 Welcome to my portfolio
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent leading-tight">
            Full Stack Developer building scalable and reliable web
            applications.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Full Stack Developer experienced with the MERN stack and Next.js,
            comfortable working across frontend and backend to build secure
            authentication flows, well-structured APIs, and maintainable
            application architecture.
          </p>

          <div className="text-sm text-slate-500 dark:text-slate-400 mb-6 space-y-1">
            <p>Previously Jr. Software Developer @ Pragnakalp Techlabs</p>
            <p className="flex items-center justify-center gap-1">
              <MapPin className="w-4 h-4" /> Gujarat, India
            </p>
            <p className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Full Stack opportunities.
            </p>
          </div>

          {/* SKILLS STRIP */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 text-sm">
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
              <span
                key={skill}
                className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              className="rounded-full px-8 h-12 text-base shadow-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:shadow-xl hover:scale-105"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full !px-7 h-12 text-base border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-200"
              asChild
            >
              <a
                href="https://github.com/Jigneshtandel27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-8 h-12 text-base border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-200"
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

        {/* ABOUT SECTION */}
        <section id="about" className="max-w-4xl mx-auto scroll-mt-20">
          <div className="fade-in">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-px bg-linear-to-r from-slate-300 to-transparent dark:from-slate-700 dark:to-transparent flex-1"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I am a{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Full Stack Developer
                  </strong>{" "}
                  with professional experience building scalable and secure web
                  applications using{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Next.js, TypeScript, Node.js, and MongoDB
                  </strong>
                  . I focus on writing clean, maintainable code and designing
                  structured architectures that perform reliably in production
                  environments.
                </p>
                <p>
                  At{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Pragnakalp Techlabs
                  </strong>
                  , I developed high-performance frontend features, integrated
                  REST APIs efficiently, and implemented secure authentication
                  flows using{" "}
                  <strong className="text-slate-900 dark:text-white">
                    NextAuth.js
                  </strong>{" "}
                  and{" "}
                  <strong className="text-slate-900 dark:text-white">
                    JWT
                  </strong>
                  . I have worked extensively on client-server integration,
                  state management with{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Zustand
                  </strong>
                  , and optimizing data fetching strategies.
                </p>
                <p>
                  I enjoy building complete systems — from designing{" "}
                  <strong className="text-slate-900 dark:text-white">
                    RESTful APIs
                  </strong>{" "}
                  and database schemas to implementing{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Role-Based Access Control (RBAC)
                  </strong>{" "}
                  and application-level security. My goal is to continue growing
                  as a backend-focused full stack engineer who builds reliable,
                  scalable, and production-ready software.
                </p>
              </div>

              <div className="md:col-span-2 bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Quick Info
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
                    <span className="text-slate-500 dark:text-slate-400">
                      Education
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      BE - Comp Eng. (8.88)
                    </span>
                  </li>
                  <li className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
                    <span className="text-slate-500 dark:text-slate-400">
                      Role
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Full Stack Dev
                    </span>
                  </li>
                  <li className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
                    <span className="text-slate-500 dark:text-slate-400">
                      Location
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      Navsari, Gujarat
                    </span>
                  </li>
                  <li className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
                    <span className="text-slate-500 dark:text-slate-400">
                      Status
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                      Open to Work
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20">
          <div className="fade-in">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="h-px bg-linear-to-r from-slate-300 to-transparent dark:from-slate-700 dark:to-transparent flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <Card className="group flex flex-col rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <CardHeader className="bg-linear-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-b border-slate-100 dark:border-slate-700 ">
                  <div className="flex justify-between items-center mt-4 -mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-xl text-slate-900 dark:text-white">
                          Next.js Commerce Platform
                        </CardTitle>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-linear-to-r from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                          In Progress
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Authentication • RBAC • Structured API Layer
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href="https://velro-web.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live User Application"
                        className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-all duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Developing a scalable full-stack e-commerce platform with
                    secure authentication, role-based access control (RBAC), and
                    modular API architecture optimized for maintainability.
                  </p>

                  <ul className="text-sm text-slate-500 dark:text-slate-400 mb-6 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        •
                      </span>
                      <span>
                        Designed and implemented secure authentication with
                        protected routes and middleware validation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        •
                      </span>
                      <span>Added role-based access for admin and users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        •
                      </span>
                      <span>
                        Organized API and server code for clarity and
                        scalability
                      </span>
                    </li>
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "TypeScript",
                      "NextAuth",
                      "Node.js",
                      "MongoDB",
                    ].map((text) => (
                      <span
                        key={text}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded border border-blue-200 dark:border-blue-800"
                      >
                        {text}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="group flex flex-col rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <CardHeader className="bg-linear-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-center mt-4 -mb-3">
                    <div>
                      <CardTitle className="text-xl mb-1 text-slate-900 dark:text-white">
                        NextTech Shop
                      </CardTitle>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Full Stack MERN Application
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/Jigneshtandel27/nexttech-shop-user-frontend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github Repository"
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded-full transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://ecommerce-frontend-b1zb.onrender.com"
                        target="_blank"
                        title="Live User Application"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-all duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Developed a full-stack MERN e-commerce application with
                    JWT-based authentication, admin management features, and
                    RESTful API architecture.
                  </p>
                  <ul className="text-sm text-slate-500 dark:text-slate-400 mb-6 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        •
                      </span>
                      <span>
                        Implemented secure JWT authentication with protected
                        routes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        •
                      </span>
                      <span>
                        Built admin dashboard for product and order management
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        •
                      </span>
                      <span>
                        Designed structured REST APIs with modular Express
                        architecture
                      </span>
                    </li>
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {["React", "Node.js", "Express", "JWT", "MongoDB"].map(
                      (text) => (
                        <span
                          key={text}
                          className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded border border-emerald-200 dark:border-emerald-800"
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
              <h2 className="text-3xl font-bold bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Experience
              </h2>
              <div className="h-px bg-linear-to-r from-slate-300 to-transparent dark:from-slate-700 dark:to-transparent flex-1"></div>
            </div>

            <div className="space-y-10 relative border-l-2 border-slate-300 dark:border-slate-700 ml-4 md:ml-6 pl-8 md:pl-12 py-2">
              <div className="relative group">
                <span className="absolute -left-[42px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-950 bg-linear-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Jr. Software Developer
                  </h3>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    Jun 2025 – Nov 2025
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
                  Pragnakalp Techlabs
                </p>
                <ul className="list-none ml-0 text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-blue-600 dark:text-blue-400">→</span>
                    <span>
                      Developed production features in Next.js using TypeScript.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-blue-600 dark:text-blue-400">→</span>
                    <span>
                      Managed complex client state with Zustand to support
                      scalable UI workflows.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-blue-600 dark:text-blue-400">→</span>
                    <span>
                      Integrated REST APIs and improved client-server data
                      handling.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative pt-6 group">
                <span className="absolute -left-[42px] md:-left-[59px] top-8 h-5 w-5 rounded-full border-4 border-white dark:border-slate-950 bg-linear-to-br from-emerald-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    MERN Stack Intern
                  </h3>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    Jan 2025 – Apr 2025
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
                  Tech-Fusion Technologies
                </p>
                <ul className="list-none ml-0 text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-emerald-600 dark:text-emerald-400">
                      →
                    </span>
                    <span>
                      Built a full-stack tournament platform using the MERN
                      stack.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-emerald-600 dark:text-emerald-400">
                      →
                    </span>
                    <span>
                      Designed RESTful APIs and structured MongoDB schemas for
                      consistent data storage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-emerald-600 dark:text-emerald-400">
                      →
                    </span>
                    <span>
                      Connected React frontend with backend services to deliver
                      dynamic match data.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-20 max-w-4xl mx-auto">
          <div className="fade-in">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <div className="h-px bg-linear-to-r from-slate-300 to-transparent dark:from-slate-700 dark:to-transparent flex-1"></div>
            </div>

            <Card className="rounded-2xl border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Let's Build Great Products
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Open to full-time Full Stack opportunities where I can
                    contribute across the stack, collaborate with teams, and
                    continue growing as a software engineer.
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for full-time opportunities
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <a
                    href="mailto:jigneshmaheshtandel@gmail.com"
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 hover:scale-105"
                  >
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    jigneshmaheshtandel@gmail.com
                  </a>

                  <div className="flex justify-center gap-4 flex-wrap mt-4">
                    <Button
                      size="lg"
                      className="rounded-full px-10 h-14 text-lg shadow-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:shadow-xl hover:scale-105"
                      asChild
                    >
                      <a href="mailto:jigneshmaheshtandel@gmail.com">
                        Email Me
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-10 h-14 text-lg border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-200"
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
          </div>
        </section>
      </main>

      <footer className="text-center text-slate-500 dark:text-slate-400 py-8 text-sm border-t border-slate-200 dark:border-slate-700 bg-linear-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        © {new Date().getFullYear()} Jignesh Tandel. Built with Next.js &
        Tailwind.
      </footer>
    </div>
  );
}
