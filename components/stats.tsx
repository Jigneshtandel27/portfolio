"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "2",
    label: "Professional Roles",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "20+",
    label: "REST APIs",
  },
  {
    value: "8.88",
    label: "CGPA",
  },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
          >
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
