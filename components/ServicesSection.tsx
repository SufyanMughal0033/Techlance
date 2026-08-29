import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCategory } from "@/components/ServiceCategory";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { services, serviceCategories } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="What We Do"
          title="The complete digital journey, under one roof."
          description="From your first website to the traffic, content and systems that keep it growing — every service is built around your goals, not a template."
        />

        <AnimatedSection delay={0.1}>
          <nav
            aria-label="Service categories"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#service-${cat.id}`}
                className="rounded-full border border-border bg-surface px-4 py-2 text-[13px] font-medium tracking-tight text-muted transition-colors duration-300 hover:border-accent/40 hover:text-ink"
              >
                <span className="text-accent">{cat.number}</span>{" "}
                <span className="ml-1">{cat.title}</span>
              </a>
            ))}
          </nav>
        </AnimatedSection>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {serviceCategories.map((cat) => (
            <ServiceCategory
              key={cat.id}
              id={`service-${cat.id}`}
              number={cat.number}
              title={cat.title}
              intro={cat.intro}
              items={services.filter((s) => s.category === cat.id)}
            />
          ))}
        </div>

        <AnimatedSection className="mt-20 rounded-lg border border-border bg-surface px-8 py-12 text-center sm:px-14 sm:py-14">
          <p className="font-display text-xl font-semibold tracking-tighter text-ink sm:text-2xl">
            Not sure which service your business needs?
          </p>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted">
            Tell us what you&rsquo;re trying to achieve and we&rsquo;ll help
            you find the right digital solution — no pressure, no jargon.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="#contact" variant="primary">
              Get a Free Quote
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
