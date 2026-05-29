"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Github,
  Mail,
  MapPin,
  Sun,
  Moon,
  Linkedin,
  ArrowUpRight,
  Code2,
  Briefcase,
  User,
  MessageSquare,
  ChevronDown,
  Terminal,
  Layers,
  Shield,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";

const SKILLS = [
  { label: "Node.js", icon: <Terminal className="w-3 h-3" /> },
  { label: "Express.js", icon: <Layers className="w-3 h-3" /> },
  { label: "REST APIs", icon: <Zap className="w-3 h-3" /> },
  { label: "MongoDB", icon: <Code2 className="w-3 h-3" /> },
  { label: "PostgreSQL", icon: <Code2 className="w-3 h-3" /> },
  { label: "JWT Auth", icon: <Shield className="w-3 h-3" /> },
  { label: "RBAC", icon: <Shield className="w-3 h-3" /> },
  { label: "TypeScript", icon: <Code2 className="w-3 h-3" /> },
  { label: "Next.js", icon: <Layers className="w-3 h-3" /> },
  { label: "React", icon: <Layers className="w-3 h-3" /> },
] as const;

const PROJECTS = [
  {
    title: "Next.js Commerce Platform",
    subtitle: "Authentication · RBAC · Structured API Layer",
    status: "In Progress" as const,
    description:
      "Scalable full-stack e-commerce platform with secure authentication, role-based access control, and modular API architecture optimized for maintainability.",
    highlights: [
      "Secure auth with protected routes and middleware validation",
      "Role-based access for admin and users",
      "Organized API & server code for clarity and scalability",
    ],
    tech: ["Next.js", "TypeScript", "NextAuth", "Node.js", "MongoDB"],
    color: "blue" as const,
    live: "https://velro-web.vercel.app",
    github: null,
  },
  {
    title: "NextTech Shop",
    subtitle: "Full Stack MERN Application",
    status: "Complete" as const,
    description:
      "Full-stack MERN e-commerce application with JWT-based authentication, admin management features, and RESTful API architecture.",
    highlights: [
      "Secure JWT authentication with protected routes",
      "Admin dashboard for product and order management",
      "Structured REST APIs with modular Express architecture",
    ],
    tech: ["React", "Node.js", "Express", "JWT", "MongoDB"],
    color: "emerald" as const,
    live: "https://ecommerce-frontend-b1zb.onrender.com",
    github:
      "https://github.com/Jigneshtandel27/nexttech-shop-user-frontend.git",
  },
] as const;

const EXPERIENCES = [
  {
    role: "Jr. Software Developer",
    company: "Pragnakalp Techlabs",
    period: "Jun 2025 – Nov 2025",
    color: "blue" as const,
    bullets: [
      "Developed production features in Next.js using TypeScript.",
      "Managed complex client state with Zustand to support scalable UI workflows.",
      "Integrated REST APIs and improved client-server data handling.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Tech-Fusion Technologies",
    period: "Jan 2025 – Apr 2025",
    color: "emerald" as const,
    bullets: [
      "Built a full-stack tournament platform using the MERN stack.",
      "Designed RESTful APIs and structured MongoDB schemas for consistent data storage.",
      "Connected React frontend with backend services to deliver dynamic match data.",
    ],
  },
] as const;

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-3xl font-bold tracking-tight shrink-0 bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <Separator className="flex-1" />
    </div>
  );
}

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function StatusBadge({ status }: { status: "In Progress" | "Complete" }) {
  return (
    <Badge
      variant={status === "In Progress" ? "outline" : "secondary"}
      className={
        status === "In Progress"
          ? "border-amber-400 text-amber-600 dark:border-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20"
          : "border-emerald-400 text-emerald-600 dark:border-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
      }
    >
      {status === "In Progress" ? "🔨 In Progress" : "✅ Complete"}
    </Badge>
  );
}

function TechBadge({
  label,
  color,
}: {
  label: string;
  color: "blue" | "emerald";
}) {
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-md border ${
        color === "blue"
          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
          : "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
      }`}
    >
      {label}
    </span>
  );
}

export default function Portfolio() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const sections = ["home", "about", "projects", "experience", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, [mounted]);

  const navLinks = [
    { href: "#about", label: "About", icon: <User className="w-3.5 h-3.5" /> },
    {
      href: "#projects",
      label: "Projects",
      icon: <Code2 className="w-3.5 h-3.5" />,
    },
    {
      href: "#experience",
      label: "Experience",
      icon: <Briefcase className="w-3.5 h-3.5" />,
    },
    {
      href: "#contact",
      label: "Contact",
      icon: <MessageSquare className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        {/* ── NAVBAR ─────────────────────────────── */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-700/50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
            {/* Logo */}
            <a
              href="#home"
              className="font-bold text-xl tracking-tight flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
            >
              <span className="w-9 h-9 bg-linear-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                JT
              </span>
              <span className="hidden sm:inline text-slate-900 dark:text-white">
                Jignesh Tandel
              </span>
            </a>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label, icon }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={href}
                    href={href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {icon}
                    {label}
                  </a>
                );
              })}
            </nav>

            {/* Theme toggle */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Toggle theme</TooltipContent>
            </Tooltip>
          </div>
        </header>

        <main
          id="home"
          className="px-6 md:px-12 py-24 space-y-32 md:space-y-40 max-w-6xl mx-auto"
        >
          {/* ── HERO ───────────────────────────────── */}
          <section className="max-w-4xl mx-auto text-center pt-12">
            {/* Greeting pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Full Stack opportunities
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-linear-to-br from-slate-900 via-blue-700 to-slate-900 dark:from-white dark:via-blue-300 dark:to-slate-200 bg-clip-text text-transparent leading-tight">
              Full Stack Developer building scalable, reliable web applications.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4">
              Experienced with the MERN stack and Next.js, comfortable working
              across frontend and backend to build secure authentication flows,
              well-structured APIs, and maintainable application architecture.
            </p>

            <div className="flex items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-8 flex-wrap">
              <span>
                Previously Jr. Software Developer @ Pragnakalp Techlabs
              </span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Gujarat, India
              </span>
            </div>

            {/* Skills strip */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {SKILLS.map(({ label, icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 text-sm hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  <span className="text-blue-600 dark:text-blue-400">
                    {icon}
                  </span>
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base shadow-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-200"
                asChild
              >
                <a
                  href="https://github.com/Jigneshtandel27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-200"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/jigneshtandel27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Scroll hint */}
            <div className="mt-16 flex justify-center animate-bounce opacity-40">
              <ChevronDown className="w-5 h-5 text-slate-500" />
            </div>
          </section>

          {/* ── ABOUT ──────────────────────────────── */}
          <section id="about" className="max-w-4xl mx-auto scroll-mt-20">
            <FadeSection>
              <SectionHeader title="About Me" />

              <div className="grid md:grid-cols-5 gap-10 items-start">
                <div className="md:col-span-3 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                  <p>
                    I&apos;m a{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      Full Stack Developer
                    </strong>{" "}
                    with professional experience building scalable and secure
                    web applications using{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      Next.js, TypeScript, Node.js, and MongoDB
                    </strong>
                    . I focus on writing clean, maintainable code and designing
                    structured architectures that perform reliably in production
                    environments.
                  </p>
                  <p>
                    At{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      Pragnakalp Techlabs
                    </strong>
                    , I developed high-performance frontend features, integrated
                    REST APIs efficiently, and implemented secure authentication
                    flows using{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      NextAuth.js
                    </strong>{" "}
                    and{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      JWT
                    </strong>
                    . I&apos;ve worked extensively on client-server integration
                    and state management with{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      Zustand
                    </strong>
                    .
                  </p>
                  <p>
                    I enjoy building complete systems — from designing{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      RESTful APIs
                    </strong>{" "}
                    and database schemas to implementing{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      Role-Based Access Control (RBAC)
                    </strong>{" "}
                    and application-level security. My goal is to continue
                    growing as a backend-focused full stack engineer who builds
                    reliable, production-ready software.
                  </p>
                </div>

                {/* Quick Info Card */}
                <Card className="md:col-span-2 rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      Quick Info
                    </h4>
                    <div className="space-y-1">
                      {[
                        { label: "Education", value: "BE · Comp Eng. (8.88)" },
                        { label: "Role", value: "Full Stack Dev" },
                        { label: "Location", value: "Navsari, Gujarat" },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="flex justify-between items-center py-2.5 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {label}
                          </span>
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            {value}
                          </span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center py-2.5 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          Status
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                          </span>
                          Open to Work
                        </span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Quick links */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1.5 text-xs"
                        asChild
                      >
                        <a
                          href="https://github.com/Jigneshtandel27"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1.5 text-xs"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/jigneshtandel27/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeSection>
          </section>

          {/* ── PROJECTS ───────────────────────────── */}
          <section id="projects" className="scroll-mt-20">
            <FadeSection>
              <SectionHeader title="Featured Projects" />

              <div className="grid md:grid-cols-2 gap-8">
                {PROJECTS.map((project) => (
                  <Card
                    key={project.title}
                    className="group flex flex-col rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Card top accent line */}
                    <div
                      className={`h-1 w-full ${
                        project.color === "blue"
                          ? "bg-linear-to-r from-blue-500 to-blue-700"
                          : "bg-linear-to-r from-emerald-500 to-emerald-700"
                      }`}
                    />

                    <CardHeader className="pb-3 pt-5 px-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <CardTitle className="text-lg text-slate-900 dark:text-white leading-tight">
                              {project.title}
                            </CardTitle>
                            <StatusBadge status={project.status} />
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-1 shrink-0">
                          {project.github && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all"
                                >
                                  <Github className="w-4 h-4" />
                                </a>
                              </TooltipTrigger>
                              <TooltipContent>View source</TooltipContent>
                            </Tooltip>
                          )}
                          {project.live && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                                >
                                  <ArrowUpRight className="w-4 h-4" />
                                </a>
                              </TooltipTrigger>
                              <TooltipContent>Live demo</TooltipContent>
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 flex-1 flex flex-col">
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="text-sm text-slate-500 dark:text-slate-400 mb-5 space-y-2">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5">
                            <span
                              className={`mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                                project.color === "blue"
                                  ? "bg-blue-500"
                                  : "bg-emerald-500"
                              }`}
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <TechBadge key={t} label={t} color={project.color} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* GitHub CTA */}
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="gap-2 rounded-full"
                  asChild
                >
                  <a
                    href="https://github.com/Jigneshtandel27"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    See more on GitHub
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </Button>
              </div>
            </FadeSection>
          </section>

          {/* ── EXPERIENCE ─────────────────────────── */}
          <section id="experience" className="max-w-4xl mx-auto scroll-mt-20">
            <FadeSection>
              <SectionHeader title="Experience" />

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-linear-to-b from-blue-500 via-slate-300 to-emerald-500 dark:via-slate-700" />

                <div className="space-y-10 pl-10">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.role} className="relative group">
                      {/* Timeline dot */}
                      <div
                        className={`absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 shadow-md group-hover:scale-125 transition-transform ${
                          exp.color === "blue"
                            ? "bg-linear-to-br from-blue-500 to-blue-700"
                            : "bg-linear-to-br from-emerald-500 to-emerald-700"
                        }`}
                      />

                      <Card className="rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <Badge
                              variant="outline"
                              className="text-xs w-fit shrink-0 text-slate-500 dark:text-slate-400"
                            >
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-4">
                            {exp.company}
                          </p>
                          <ul className="space-y-2">
                            {exp.bullets.map((b) => (
                              <li
                                key={b}
                                className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400"
                              >
                                <span
                                  className={`mt-0.5 shrink-0 text-xs font-bold ${
                                    exp.color === "blue"
                                      ? "text-blue-500 dark:text-blue-400"
                                      : "text-emerald-500 dark:text-emerald-400"
                                  }`}
                                >
                                  →
                                </span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </section>

          {/* ── CONTACT ────────────────────────────── */}
          <section id="contact" className="max-w-4xl mx-auto scroll-mt-20">
            <FadeSection>
              <SectionHeader title="Let's Work Together" />

              <Card className="rounded-2xl border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden bg-white dark:bg-slate-900">
                {/* Decorative gradient top */}
                <div className="h-2 bg-linear-to-r from-blue-500 via-blue-600 to-blue-700" />

                <CardContent className="p-8 md:p-12">
                  <div className="max-w-lg mx-auto text-center space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Let&apos;s Build Great Products
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed">
                        Open to full-time Full Stack opportunities where I can
                        contribute across the stack, collaborate with teams, and
                        continue growing as a software engineer.
                      </p>
                    </div>

                    {/* Email display */}
                    <div className="inline-flex items-center gap-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-5 py-3 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 transition-all cursor-pointer">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <a href="mailto:jigneshmaheshtandel@gmail.com">
                        jigneshmaheshtandel@gmail.com
                      </a>
                    </div>

                    <div className="flex justify-center gap-3 flex-wrap pt-2">
                      <Button
                        size="lg"
                        className="rounded-full px-10 h-12 text-base shadow-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200 gap-2"
                        asChild
                      >
                        <a href="mailto:jigneshmaheshtandel@gmail.com">
                          <Mail className="w-4 h-4" />
                          Email Me
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-10 h-12 text-base border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-200 gap-2"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/jigneshtandel27/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeSection>
          </section>
        </main>

        {/* ── FOOTER ─────────────────────────────── */}
        <footer className="mt-20 text-center py-8 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
          <p>
            © {new Date().getFullYear()} Jignesh Tandel.{" "}
            <span className="opacity-60">Built with Next.js & Tailwind.</span>
          </p>
        </footer>
      </div>
    </TooltipProvider>
  );
}
