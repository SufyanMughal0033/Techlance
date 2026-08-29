import { AnimatedSection, StaggerGroup } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import type { Service } from "@/data/services";

interface ServiceCategoryProps {
  id: string;
  number: string;
  title: string;
  intro: string;
  items: Service[];
}

export function ServiceCategory({
  id,
  number,
  title,
  intro,
  items,
}: ServiceCategoryProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <AnimatedSection>
        <div className="flex items-baseline gap-3">
          <span className="font-display text-sm font-medium tracking-widish text-accent">
            {number}
          </span>
          <h3 className="font-display text-2xl font-semibold tracking-tighter text-ink sm:text-[1.75rem]">
            {title}
          </h3>
        </div>
        <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-muted">
          {intro}
        </p>
      </AnimatedSection>

      <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </StaggerGroup>
    </div>
  );
}
