import { Flower2 } from "lucide-react";

const PHRASES = [
  "FRAGRANCE-FREE",
  "NON-COMEDOGENIC",
  "ALCOHOL-FREE",
  "DERMATOLOGIST-TESTED",
  "NO ARTIFICIAL DYES",
  "CRUELTY-FREE",
];

export default function Marquee() {
  const items = [...PHRASES, ...PHRASES];

  return (
    <section aria-hidden className="overflow-hidden border-y border-white/10 bg-primary-deep py-4">
      <div className="flex w-max animate-marquee">
        {items.map((phrase, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 px-4">
            <span className="text-xs font-bold tracking-[0.3em] text-white/80">
              {phrase}
            </span>
            <Flower2 className="h-4 w-4 shrink-0 text-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}
