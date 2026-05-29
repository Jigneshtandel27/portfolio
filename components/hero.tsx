"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Download, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-20 pb-12 md:pt-28 md:pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 px-3.5 py-1.5 text-xs font-semibold bg-green-500/10 text-green-700 dark:text-green-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-duration-1500"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Full Stack Opportunities
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Full Stack Developer
                <span className="block bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent mt-2">
                  Building Scalable Web Apps
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Building secure, scalable and production-ready web applications
                using Next.js, TypeScript, Node.js, Express and MongoDB.
                Passionate about APIs, authentication systems and backend
                architecture.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mt-6">
                <MapPin size={18} />
                <span>Navsari, Gujarat, India</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Button size="lg" asChild>
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <a href="/Jignesh_Tandel_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://github.com/Jigneshtandel27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border p-3 hover:bg-muted transition"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jigneshtandel27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border p-3 hover:bg-muted transition"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

              <Avatar className="h-72 w-72 border-4 border-border shadow-2xl relative">
                {/* <AvatarImage src="/jignesh.jpg" /> */}
                <AvatarFallback className="text-6xl font-bold bg-linear-to-br from-blue-500 to-cyan-500 text-white">
                  JT
                </AvatarFallback>
              </Avatar>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
