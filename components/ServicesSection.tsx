import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StaggerGroup } from "@/components/AnimatedSection";
import { services } from "@/data/services";

export function ServicesSection() {
  const development = services.filter((s) => s.category === "development");
  const marketing = services.filter((s) => s.category === "marketing");

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="What We Do"
          title="Websites and digital products, built with intent."
          description="From single-page sites to full e-commerce builds, every project is engineered around your goals — not a template."
        />

        <div className="mt-16">
          <p className="mb-7 text-sm font-medium uppercase tracking-widish text-muted">
            Web Development
          </p>
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {development.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </StaggerGroup>
        </div>

        <div className="mt-9 hairline" />

        <div className="mt-16">
          <p className="mb-7 text-sm font-medium uppercase tracking-widish text-muted">
            Digital Marketing
          </p>
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketing.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
