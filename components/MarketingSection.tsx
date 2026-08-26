import { TrendingUp } from "lucide-react";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

const capabilities = [
  "Facebook Advertising",
  "Instagram Advertising",
  "Google Ads",
  "Lead Generation",
  "Campaign Strategy",
  "Performance Optimization",
];

export function MarketingSection() {
  return (
    <section className="border-y border-border bg-surface py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <AnimatedSection>
              <p className="eyebrow mb-6">
                <TrendingUp size={13} strokeWidth={2} className="text-accent" />
                Digital Marketing
              </p>
              <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tightest text-balance">
                Campaigns built around strategy, not guesswork.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Techlance plans and runs advertising campaigns across Meta
                and Google, focused on reaching the right audience and
                improving performance over time through testing and
                optimization.
              </p>
              <div className="mt-9">
                <Button href="#contact" variant="primary">
                  Discuss Your Project
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <StaggerItem
                key={item}
                className="rounded-md border border-border bg-bg px-5 py-5 text-[15px] font-medium tracking-tight text-ink transition-colors duration-300 hover:border-accent/40"
              >
                {item}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
