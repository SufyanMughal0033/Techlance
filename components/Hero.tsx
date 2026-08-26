"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";

const tiles = [
  { delay: 0, filled: false },
  { delay: 0.05, filled: false },
  { delay: 0.1, filled: true },
  { delay: 0.15, filled: false },
  { delay: 0.2, filled: false },
  { delay: 0.25, filled: false },
  { delay: 0.3, filled: false },
  { delay: 0.35, filled: false },
  { delay: 0.4, filled: false },
];

function HeroMark() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <motion.line
          x1="4"
          y1="96"
          x2="96"
          y2="4"
          stroke="rgb(var(--accent))"
          strokeWidth="0.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <motion.circle
          cx="96"
          cy="4"
          r="2.4"
          fill="rgb(var(--accent))"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 1.5 }}
        />
      </svg>

      <div className="grid h-full grid-cols-3 grid-rows-3 gap-3 sm:gap-4">
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.3 + tile.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`rounded-xl border transition-colors duration-500 ${
              tile.filled
                ? "border-accent/40 bg-accent/10"
                : "border-border bg-surface"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      <div className="container-edge">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.05 }}
              className="eyebrow mb-7"
            >
              Digital Agency — Pakistan &amp; International
            </motion.p>

            <h1 className="font-display text-[clamp(2.5rem,6.2vw,4.75rem)] font-semibold leading-[1.02] tracking-tightest text-balance">
              {"We build digital experiences that move businesses forward."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    className="mr-[0.28em] inline-block"
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: shouldReduceMotion ? 0 : 0.12 + index * 0.045,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.55 }}
              className="mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              Techlance designs and builds websites, digital products and
              performance marketing for businesses in Pakistan and
              internationally — with a focus on clean engineering and
              considered design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.68 }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <Button href="#contact" variant="primary">
                Get a Quote
              </Button>
              <Button href="#work" variant="secondary">
                Explore Our Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HeroMark />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
