import { AnimatedSection } from "@/components/AnimatedSection";
import type { Founder } from "@/data/founders";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function FounderCard({
  founder,
  delay = 0,
}: {
  founder: Founder;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface p-7 transition-colors duration-400 ease-premium hover:border-accent/40 sm:p-9">
        <div className="relative flex aspect-[5/4] w-full items-center justify-center overflow-hidden rounded-md border border-border bg-surface-2">
          <span
            className="font-display text-5xl font-semibold tracking-tightest text-ink/15"
            aria-hidden="true"
          >
            {initials(founder.name)}
          </span>
          <span className="absolute right-5 top-5 h-2 w-2 rotate-45 bg-accent" />
          <span className="absolute bottom-5 left-5 text-[11px] font-medium uppercase tracking-widish text-muted">
            Photo Coming Soon
          </span>
        </div>

        <div className="mt-8">
          <h3 className="font-display text-2xl font-semibold tracking-tighter text-ink">
            {founder.name}
          </h3>
          <p className="mt-1.5 text-sm font-medium uppercase tracking-widish text-accent">
            {founder.role}
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            {founder.bio}
          </p>
        </div>
      </article>
    </AnimatedSection>
  );
}
