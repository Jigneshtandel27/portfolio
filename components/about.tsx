"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const quickInfo = [
  {
    icon: (
      <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
    ),
    label: "Education",
    value: "BE - Comp Eng (8.88 CGPA)",
  },
  {
    icon: (
      <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    ),
    label: "Current Role",
    value: "Full Stack Developer",
  },
  {
    icon: <MapPin className="h-5 w-5 text-rose-600 dark:text-rose-400" />,
    label: "Location",
    value: "Navsari, Gujarat, India",
  },
  {
    icon: <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    label: "Status",
    value: "Open to Opportunities",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-10">
      <SectionHeading title="About Me" />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* BIO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-6 text-base text-muted-foreground leading-relaxed"
        >
          <p>
            I am a{" "}
            <strong className="text-foreground font-semibold">
              Full Stack Developer
            </strong>{" "}
            with professional experience building scalable, secure, and
            performant web applications using{" "}
            <strong className="text-foreground font-semibold">
              Next.js, TypeScript, Node.js, and MongoDB
            </strong>
            . I focus on writing clean, self-documenting code and designing
            well-structured database models and API layers.
          </p>

          <p>
            During my time at{" "}
            <strong className="text-foreground font-semibold">
              Pragnakalp Techlabs
            </strong>
            , I developed production frontend features, integrated REST APIs,
            and built secure authentication flows using{" "}
            <strong className="text-foreground font-semibold">
              NextAuth.js
            </strong>{" "}
            and <strong className="text-foreground font-semibold">JWT</strong>.
            I also managed complex state using{" "}
            <strong className="text-foreground font-semibold">Zustand</strong>{" "}
            and focused heavily on client-server optimization.
          </p>

          <p>
            I am passionate about the backend side of the stack, designing{" "}
            <strong className="text-foreground font-semibold">
              RESTful APIs
            </strong>{" "}
            with proper security middleware, implementing{" "}
            <strong className="text-foreground font-semibold">
              Role-Based Access Control (RBAC)
            </strong>
            , and tuning MongoDB/PostgreSQL performance. My ultimate goal is to
            grow as an impactful full-stack engineer who builds reliable
            solutions for real-world problems.
          </p>
        </motion.div>

        {/* QUICK INFO CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-4"
        >
          <Card className="border border-border/40 bg-card/50 backdrop-blur-xs shadow-xl">
            <CardContent className="p-6 space-y-5">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
                Quick Highlights
              </h3>

              <div className="grid gap-4">
                {quickInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 border border-border/10 hover:bg-muted/50 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-lg bg-background shadow-xs group-hover:scale-105 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">
                        {info.label}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
