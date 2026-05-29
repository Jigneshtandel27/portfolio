"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import SectionHeading from "./section-heading";

import { projects } from "@/data/projects";

import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <SectionHeading title="Featured Projects" />

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >
            <Card className="overflow-hidden h-full group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    {project.featured && (
                      <Badge className="mt-2">Featured</Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="icon" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}

                    <Button size="icon" variant="outline" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm flex gap-2">
                      <span className="text-blue-600">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
