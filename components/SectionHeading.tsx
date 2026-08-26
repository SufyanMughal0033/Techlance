import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="font-display text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-tightest text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
