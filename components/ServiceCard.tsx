"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { staggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `service-panel-${service.number}`;

  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        "group rounded-lg border border-border bg-surface transition-colors duration-400 ease-premium",
        expanded ? "border-accent/40" : "hover:border-accent/40"
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-4 p-7 text-left sm:p-8"
      >
        <div className="flex items-start gap-4">
          <span className="pt-0.5 font-display text-sm font-medium tracking-widish text-muted">
            {service.number}
          </span>

          <div>
            <h4 className="font-display text-xl font-semibold tracking-tighter text-ink sm:text-[1.35rem]">
              {service.title}
            </h4>

            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={cn(
            "mt-1 shrink-0 text-muted transition-transform duration-300 ease-premium",
            expanded && "rotate-180 text-accent"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-7 pb-8 pt-6 sm:px-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  What&rsquo;s Included
                </p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-bg px-3 py-1.5 text-[13px] text-ink/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-md border border-border bg-bg px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  How This Service Helps
                </p>

                <p className="mt-2 text-[14.5px] leading-relaxed text-ink">
                  {service.description}
                </p>
              </div>

              <div className="mt-6">
                <Button href="#contact" variant="secondary" showArrow={false}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}