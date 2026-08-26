import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-bg dark:bg-accent dark:text-accent-ink hover:opacity-90",
  secondary:
    "border border-border text-ink hover:border-ink/40 dark:hover:border-ink/30 bg-transparent",
  ghost: "text-ink hover:text-accent px-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const isPill = variant !== "ghost";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(
        "group relative inline-flex items-center gap-2.5 text-sm font-medium tracking-tight transition-all duration-300 ease-premium",
        isPill && "rounded-full px-6 py-3.5",
        variantStyles[variant],
        className
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
