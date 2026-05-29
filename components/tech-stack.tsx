"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Database as DbIcon, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "./section-heading";
import { techStack } from "@/data/tech-stack";

// Map category configurations to establish a beautiful unique color design system
const categoryConfig: Record<
  string,
  {
    icon: React.ReactNode;
    glowColor: string;
    borderHover: string;
    textGradient: string;
    badgeHover: string;
  }
> = {
  Frontend: {
    icon: <Code2 className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
    glowColor: "bg-blue-500/10 dark:bg-blue-500/5",
    borderHover: "hover:border-blue-500/40 dark:hover:border-blue-500/30",
    textGradient:
      "from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400",
    badgeHover:
      "hover:bg-blue-500/10 hover:border-blue-500/30 dark:hover:bg-blue-500/20 dark:hover:border-blue-400/40",
  },
  Backend: {
    icon: <Terminal className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />,
    glowColor: "bg-indigo-500/10 dark:bg-indigo-500/5",
    borderHover: "hover:border-indigo-500/40 dark:hover:border-indigo-500/30",
    textGradient:
      "from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-400",
    badgeHover:
      "hover:bg-indigo-500/10 hover:border-indigo-500/30 dark:hover:bg-indigo-500/20 dark:hover:border-indigo-400/40",
  },
  Database: {
    icon: <DbIcon className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />,
    glowColor: "bg-emerald-500/10 dark:bg-emerald-500/5",
    borderHover: "hover:border-emerald-500/40 dark:hover:border-emerald-500/30",
    textGradient:
      "from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400",
    badgeHover:
      "hover:bg-emerald-500/10 hover:border-emerald-500/30 dark:hover:bg-emerald-500/20 dark:hover:border-emerald-400/40",
  },
  Tools: {
    icon: <Wrench className="h-5 w-5 text-amber-500 dark:text-amber-400" />,
    glowColor: "bg-amber-500/10 dark:bg-amber-500/5",
    borderHover: "hover:border-amber-500/40 dark:hover:border-amber-500/30",
    textGradient:
      "from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400",
    badgeHover:
      "hover:bg-amber-500/10 hover:border-amber-500/30 dark:hover:bg-amber-500/20 dark:hover:border-amber-400/40",
  },
};

// Animation variants for card scroll entrances
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut" as const, // Cast to constant literal to satisfy Framer Motion union types
    },
  }),
};

// Staggered list container variants for technology chips
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

// Technology chip variants
const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const, // Cast to constant literal to satisfy Framer Motion type check
      stiffness: 110,
      damping: 14,
    },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 scroll-mt-10">
      <SectionHeading title="My Tech Stack" />

      <div className="grid md:grid-cols-2 gap-6">
        {techStack.map((category, index) => {
          const config = categoryConfig[category.title] || {
            icon: <Code2 />,
            glowColor: "bg-primary/5",
            borderHover: "hover:border-primary/30",
            textGradient: "from-foreground to-muted-foreground",
            badgeHover: "hover:bg-accent/10",
          };

          return (
            <motion.div
              key={category.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
            >
              <Card
                className={`relative overflow-hidden h-full border border-border/40 bg-card/30 backdrop-blur-xs shadow-md transition-all duration-300 ${config.borderHover}`}
              >
                {/* Glow backlight shape inside the card */}
                <div
                  className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-[50px] pointer-events-none -z-10 ${config.glowColor}`}
                />

                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                  <div className="p-2 rounded-lg bg-background border border-border/20 shadow-xs">
                    {config.icon}
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">
                    <span
                      className={`bg-linear-to-r bg-clip-text text-transparent ${config.textGradient}`}
                    >
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Staggered animated layout for technology chips */}
                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        variants={chipVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`text-sm px-3.5 py-1.5 rounded-xl border border-border/45 bg-muted/40 text-muted-foreground hover:text-foreground font-medium shadow-2xs transition-colors cursor-default select-none ${config.badgeHover}`}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
