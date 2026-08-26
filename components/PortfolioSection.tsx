import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioCard } from "@/components/PortfolioCard";
import { StaggerGroup } from "@/components/AnimatedSection";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Early projects from the practice that built Techlance."
            description="A first set of projects developed while building the skills behind Techlance. Full case studies with live links are being prepared."
          />
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
