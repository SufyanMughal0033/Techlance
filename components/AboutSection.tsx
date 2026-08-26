import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="About Techlance"
              title="Started in Pakistan. Built for a wider market."
            />
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium tracking-tight text-muted">
                Established {siteConfig.founded}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <AnimatedSection>
              <p className="text-lg leading-relaxed text-ink sm:text-xl">
                Techlance was established in {siteConfig.founded}, working
                closely with clients in Pakistan to build websites and
                digital products from the ground up.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                That early work — local projects, direct client
                relationships, and hands-on development — shaped how the
                company operates today: carefully, and with real attention
                to each project.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.16}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Techlance is now expanding that focus beyond Pakistan,
                building the systems and processes needed to work with
                international clients while keeping the same standard of
                craft in every project, regardless of where it&rsquo;s based.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.24}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                We believe good digital work comes from clear communication,
                modern engineering and design that serves the business
                behind it &mdash; not from cutting corners to move faster.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
