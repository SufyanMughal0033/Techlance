import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/AnimatedSection";
import { values } from "@/data/values";

export function ValuesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="What We Stand On"
          title="A short list of things we won't compromise on."
          className="mb-16"
        />

        <StaggerGroup className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <StaggerItem key={value.title} className="border-t border-border pt-6">
              <h3 className="font-display text-lg font-semibold tracking-tighter text-ink">
                {value.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                {value.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
