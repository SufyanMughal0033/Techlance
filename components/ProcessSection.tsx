import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="How We Work"
          title="A straightforward process, followed the same way every time."
          className="mb-16"
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute bottom-0 left-[19px] top-3 w-px bg-border sm:left-[23px]"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.06}>
              <div className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg font-display text-[13px] font-semibold text-accent sm:h-12 sm:w-12">
                  {step.number}
                </div>
                <div className="pt-1.5 sm:pt-2.5">
                  <h3 className="font-display text-xl font-semibold tracking-tighter text-ink sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
