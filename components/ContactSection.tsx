import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig, whatsappLink } from "@/data/site";

const socialLinks = [
  { key: "facebook", label: "Facebook", icon: Facebook, href: siteConfig.social.facebook },
  { key: "instagram", label: "Instagram", icon: Instagram, href: siteConfig.social.instagram },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your project."
            description="The fastest way to reach us right now is WhatsApp. Send a message with a short outline of what you need."
          />

          <AnimatedSection delay={0.1}>
            <a
              href={whatsappLink("Hi Techlance, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-8 rounded-lg border border-border bg-surface p-8 transition-colors duration-400 ease-premium hover:border-whatsapp/50 sm:flex-row sm:items-center sm:p-10"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-whatsapp/10">
                  <MessageCircle size={24} className="text-whatsapp" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium uppercase tracking-widish text-muted">
                    Message us on WhatsApp
                  </p>
                  <p className="mt-1.5 font-display text-xl font-semibold tracking-tighter text-ink sm:text-2xl">
                    {siteConfig.whatsappDisplay}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform duration-300 ease-premium group-hover:translate-x-1 dark:bg-accent dark:text-accent-ink sm:self-auto">
                Start Chat
              </span>
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                if (!social.href) {
                  return (
                    <span
                      key={social.key}
                      aria-disabled="true"
                      title={`${social.label} — link coming soon`}
                      className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-border text-muted/40"
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                  );
                }
                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-ink transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
