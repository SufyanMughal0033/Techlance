import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-edge">
        <AnimatedSection className="relative overflow-hidden rounded-xl border border-border bg-surface px-8 py-16 text-center sm:px-16 sm:py-24">
          <span
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-32 w-32 rotate-45 border border-accent/20 sm:h-44 sm:w-44"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-14 -left-14 h-40 w-40 rotate-45 border border-border sm:h-52 sm:w-52"
          />

          <p className="eyebrow mx-auto mb-6 w-fit">Start a Project</p>
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-tightest text-balance">
            Let&rsquo;s build something forward-moving together.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Tell us about your project and we&rsquo;ll get back to you with
            next steps — no pricing tables, just a conversation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" variant="primary">
              Get a Quote
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
