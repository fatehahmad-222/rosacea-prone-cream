import { AtSign, Globe, Send } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Why Choose It", href: "#why-choose-it" },
  { label: "FAQ", href: "#faq" },
];

const SOCIAL = [
  { label: "Email", icon: AtSign },
  { label: "Website", icon: Globe },
  { label: "Updates", icon: Send },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-[0.18em] text-white">
                MURASAKI
              </span>
              <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.52em] text-accent-light">
                BEAUTY
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Daily barrier repair for sensitive, redness-prone skin — calm the
              look of redness and restore long-term comfort.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-accent-light">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-accent-light">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {SOCIAL.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/60">
            © 2026 Murasaki Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
