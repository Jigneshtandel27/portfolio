"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "./section-heading";
import { contactSchema } from "@/lib/validators/contact-validator";
import { z } from "zod";

type ContactInput = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setErrorMsg("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit message.");
      }

      setSubmitted(true);
      reset(); // Reset form values cleanly using react-hook-form
      setTimeout(() => setSubmitted(false), 5000); // Reset toast status after 5s
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 scroll-mt-10">
      <SectionHeading title="Let's Connect" />

      <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
        {/* Left Column: Direct info and status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Ready to build something{" "}
              <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                extraordinary?
              </span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am open to full-time Full Stack opportunities where I can
              contribute to real-world codebases, optimize API services, and
              work within an engineering team.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 px-3.5 py-1.5 text-xs font-semibold bg-green-500/10 text-green-700 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Actively Interviewing
            </div>
          </div>

          <div className="space-y-3">
            {/* Email quick-card */}
            <a
              href="mailto:jigneshmaheshtandel@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/40 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200">
                <Mail className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-muted-foreground block">
                  Email Me Directly
                </span>
                <span className="text-sm font-semibold text-foreground truncate block">
                  jigneshmaheshtandel@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/jigneshtandel27/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/40 hover:border-indigo-500/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform duration-200">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">
                  Connect on LinkedIn
                </span>
                <span className="text-sm font-semibold text-foreground block">
                  linkedin.com/in/jigneshtandel27
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <Card className="border border-border/40 bg-card/50 backdrop-blur-xs shadow-xl h-full flex flex-col justify-center">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                >
                  <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-full">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you, Jignesh will get back to you as soon as possible
                    at the email address provided.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-background border ${
                        errors.name
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50"
                          : "border-border/65 focus:border-blue-500 focus:ring-blue-500/50"
                      } focus:ring-1 outline-hidden transition text-sm text-foreground placeholder:text-muted-foreground/50`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. john@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl bg-background border ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50"
                          : "border-border/65 focus:border-blue-500 focus:ring-blue-500/50"
                      } focus:ring-1 outline-hidden transition text-sm text-foreground placeholder:text-muted-foreground/50`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Hi Jignesh, let's talk about..."
                      {...register("message")}
                      className={`w-full px-4 py-3 rounded-xl bg-background border ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50"
                          : "border-border/65 focus:border-blue-500 focus:ring-blue-500/50"
                      } focus:ring-1 outline-hidden transition text-sm text-foreground placeholder:text-muted-foreground/50 resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl text-base font-semibold shadow-md bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transition duration-200 gap-2 text-white"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Global Database Error Display */}
                  {errorMsg && (
                    <p className="text-sm font-semibold text-rose-600 dark:text-rose-400 mt-3 text-center">
                      {errorMsg}
                    </p>
                  )}
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
