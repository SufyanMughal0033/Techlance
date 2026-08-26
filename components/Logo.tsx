import Link from "next/link";

/**
 * Temporary text-based wordmark. The Techlance logo is still being
 * finalized — swap the contents of this component for the real mark
 * when it's ready; the header layout does not need to change.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#home"
      aria-label="Techlance — home"
      className={`group inline-flex items-center gap-2 font-display text-[1.05rem] font-semibold tracking-tightest text-ink ${className ?? ""}`}
    >
      <span className="relative flex h-2 w-2 shrink-0 rotate-45 bg-accent transition-transform duration-500 ease-premium group-hover:rotate-[135deg]" />
      Techlance
    </Link>
  );
}
