"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerItem } from "@/components/AnimatedSection";
import type { PortfolioItem } from "@/data/portfolio";

function PortfolioVisual({ index }: { index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface-2">
      <div
        className="absolute inset-0 opacity-[0.35] transition-transform duration-700 ease-premium group-hover:scale-105"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgb(var(--border)) 0, rgb(var(--border)) 1px, transparent 1px, transparent 34px)",
        }}
        aria-hidden="true"
      />
      <span className="absolute left-6 top-6 h-2 w-2 rotate-45 bg-accent transition-transform duration-500 ease-premium group-hover:rotate-[135deg]" />
      <span
        aria-hidden="true"
        className="absolute bottom-4 right-6 font-display text-[3.5rem] font-semibold leading-none tracking-tightest text-ink/[0.08] transition-colors duration-500 group-hover:text-accent/[0.16]"
      >
        {num}
      </span>
    </div>
  );
}

export function PortfolioCard({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-4 transition-colors duration-400 ease-premium hover:border-accent/40 sm:p-5"
    >
      <PortfolioVisual index={index} />

      <div className="flex flex-1 flex-col justify-between px-2 pt-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widish text-muted">
            {item.category}
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tighter text-ink">
            {item.title}
          </h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
            {item.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              View Project
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted/60">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
