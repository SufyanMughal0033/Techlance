import {
  Layers,
  Globe2,
  MessageSquare,
  Gauge,
  ShieldCheck,
  Repeat,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";

const reasons = [
  {
    icon: Gauge,
    title: "Modern technology",
    description:
      "Built on current frameworks and tooling, not outdated stacks kept alive out of habit.",
  },
  {
    icon: Layers,
    title: "Clean UI/UX",
    description:
      "Interfaces designed around clarity and usability, with attention paid to every detail.",
  },
  {
    icon: ShieldCheck,
    title: "Business-focused solutions",
    description:
      "Every technical decision is made in service of your actual business outcomes.",
  },
  {
    icon: Repeat,
    title: "Scalable foundations",
    description:
      "Sites and products built to be extended, not rebuilt, as your needs grow.",
  },
  {
    icon: Globe2,
    title: "International mindset",
    description:
      "Structured and communicated in a way that works for clients beyond Pakistan.",
  },
  {
    icon: MessageSquare,
    title: "Client-focused communication",
    description:
      "Clear, direct updates throughout — no disappearing after the contract is signed.",
  },
];

export function WhyTechlance() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why Techlance"
            title="Built for long-term partnerships, not one-off jobs."
            className="lg:sticky lg:top-32 lg:self-start"
          />

          <div>
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <AnimatedSection key={reason.title} delay={index * 0.05}>
                  <div className="group flex items-start gap-6 border-t border-border py-7 first:border-t-0 sm:py-8">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-surface transition-colors duration-300 group-hover:border-accent/40">
                      <Icon size={18} strokeWidth={1.75} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tighter text-ink">
                        {reason.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
