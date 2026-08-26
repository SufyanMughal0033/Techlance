"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerItem } from "@/components/AnimatedSection";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface p-7 transition-all duration-400 ease-premium hover:border-accent/40 sm:p-8"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-sm font-medium tracking-widish text-muted">
            {service.number}
          </span>
          <ArrowUpRight
            size={18}
            className="text-muted opacity-0 transition-all duration-400 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
          />
        </div>

        <h3 className="mt-8 font-display text-xl font-semibold tracking-tighter text-ink sm:text-[1.4rem]">
          {service.title}
        </h3>
        <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
          {service.description}
        </p>
      </div>

      <div className="mt-9 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-tight text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-premium group-hover:scale-x-100" />
    </motion.article>
  );
}
