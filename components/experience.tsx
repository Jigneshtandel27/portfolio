"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const experiences = [
  {
    role: "Jr. Software Developer",
    company: "Pragnakalp Techlabs",
    period: "Jun 2025 – Nov 2025",
    description:
      "Built scalable web apps using Next.js, TypeScript, and state management libraries.",
    highlights: [
      "Developed modular production-ready features in Next.js using TypeScript.",
      "Managed complex application state with Zustand to facilitate performant interactive UI flows.",
      "Integrated and optimized external REST APIs with robust error boundary handling and custom hooks.",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    role: "MERN Stack Intern",
    company: "Tech-Fusion Technologies",
    period: "Jan 2025 – Apr 2025",
    description:
      "Designed RESTful APIs and backend schemas for full-stack sports systems.",
    highlights: [
      "Built a full-stack e-sports tournament bracket and team management platform using the MERN stack.",
      "Designed clean RESTful endpoints and structured highly optimized MongoDB schemas with indexing.",
      "Synced real-time match stats and bracket states using React hooks and custom backend services.",
    ],
    color: "from-emerald-500 to-cyan-600",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-10">
      <SectionHeading title="Work Experience" />

      <div className="relative max-w-3xl mx-auto pl-6 md:pl-10">
        {/* V-line timeline connector */}
        <div className="absolute left-[7px] md:left-[17px] top-4 bottom-4 w-[2px] bg-linear-to-b from-blue-500 via-indigo-500 to-emerald-500 rounded-full opacity-60 dark:opacity-40" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline bubble */}
              <div className="absolute -left-[28px] md:-left-[34px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-linear-to-br from-indigo-500 to-blue-600 shadow-md flex items-center justify-center scale-100 group-hover:scale-110 transition-transform">
                <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              </div>

              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/40 w-fit">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </div>
                </div>

                {/* Details Card */}
                <Card className="border border-border/40 bg-card/40 backdrop-blur-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  <CardContent className="p-6">
                    <p className="text-sm text-foreground/80 font-medium mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
