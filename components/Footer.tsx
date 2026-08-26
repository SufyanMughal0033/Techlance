import { Logo } from "@/components/Logo";
import { navLinks } from "@/data/nav";
import { services } from "@/data/services";
import { siteConfig, whatsappLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = services.slice(0, 5);

  return (
    <footer className="border-t border-border pb-8 pt-20 sm:pt-24">
      <div className="container-edge">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              A digital agency building websites, digital products and
              performance marketing for clients in Pakistan and
              internationally.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14.5px] text-ink/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {featuredServices.map((service) => (
                <li
                  key={service.number}
                  className="text-[14.5px] text-ink/80"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Get In Touch
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-ink/80 transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[14.5px] text-ink/80 transition-colors hover:text-accent"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-muted">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-muted">
            Designed &amp; built by Techlance.
          </p>
        </div>
      </div>
    </footer>
  );
}
