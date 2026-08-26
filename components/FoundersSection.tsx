import { SectionHeading } from "@/components/SectionHeading";
import { FounderCard } from "@/components/FounderCard";
import { founders } from "@/data/founders";

export function FoundersSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the people behind Techlance."
          align="center"
          className="mb-16"
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.name}
              founder={founder}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
