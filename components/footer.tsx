"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-border/40 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Jignesh Tandel. All rights reserved.
        </p>

        {/* Middle: Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Jigneshtandel27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jigneshtandel27/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

        {/* Right Side: Back to top button */}
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="sm"
          className="rounded-full gap-2 border-border/60 hover:bg-accent/40"
        >
          <ArrowUp className="h-4 w-4" />
          Back to Top
        </Button>
      </div>
    </footer>
  );
}
