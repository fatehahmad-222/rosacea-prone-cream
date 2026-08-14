"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInView } from "./Reveal";

const INGREDIENTS = [
  {
    name: "PDRN (Sodium DNA)",
    benefit: "Supports skin renewal",
    image: "/images/Mask group.png",
    width: 378,
    height: 585,
  },
  {
    name: "Ceramide NP",
    benefit: "Helps strengthen the skin barrier",
    image: "/images/Mask group-1.png",
    width: 378,
    height: 585,
  },
  {
    name: "Ectoin",
    benefit: "Helps protect against moisture loss",
    image: "/images/Mask group-2.png",
    width: 378,
    height: 585,
  },
  {
    name: "Squalane",
    benefit: "Provides long-lasting nourishment",
    image: "/images/Mask group-3.png",
    width: 378,
    height: 585,
  },
  {
    name: "Panthenol",
    benefit: "Provides lightweight, long-lasting hydration",
    image: "/images/Mask group-4.png",
    width: 378,
    height: 585,
  },
  {
    name: "Bisabolol",
    benefit: "Helps soothe visible redness and irritation",
    image: "/images/Mask group-5.png",
    width: 378,
    height: 585,
  },
  {
    name: "Meadowfoam & Jojoba Oils",
    benefit: "Help replenish moisture, leaving skin soft and supple",
    image: "/images/Mask group-6.png",
    width: 378,
    height: 585,
  },
];

function IngredientRow({ name, benefit, image, width, height, index }) {
  const { ref, inView } = useInView(0.35);

  return (
    <li
      ref={ref}
      className={`group transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 md:p-8">

        <div className="relative grid grid-cols-[minmax(0,1.6fr)_auto_minmax(0,1fr)] items-center gap-3 md:gap-4">
          <div className="min-w-0">
            <span className="inline-flex h-[clamp(32px,4vw,36px)] w-[clamp(32px,4vw,36px)] items-center justify-center rounded-full border-2 border-accent bg-white">
              <span className="h-[clamp(14px,1.8vw,16px)] w-[clamp(14px,1.8vw,16px)] rounded-full bg-accent" />
            </span>
            <h3 className="mt-4 text-[clamp(1.05rem,1rem+0.3vw,1.2rem)] font-bold text-ink">
              {name}
            </h3>
            <p className="mt-1 text-[clamp(0.85rem,0.82rem+0.2vw,1rem)] leading-relaxed text-ink/65">
              {benefit}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <span className="flex h-[clamp(36px,5vw,52px)] w-[clamp(36px,5vw,52px)] items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-white shadow-lg shadow-accent/30 ring-1 ring-inset ring-white/30 transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-accent/50">
              <ArrowRight
                aria-hidden
                className="h-[clamp(18px,2vw,20px)] w-[clamp(18px,2vw,20px)]"
              />
            </span>
          </div>

          <div className="mx-auto">
            <div className="aspect-[378/585] w-full max-w-[clamp(90px,19vw,190px)] overflow-hidden rounded-2xl shadow-md shadow-ink/10 transition-transform duration-300 ease-out group-hover:scale-[1.02]">
              <Image
                src={image}
                alt={name}
                width={width}
                height={height}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Ingredients() {
  return (
    <section id="ingredients" className="scroll-mt-16 bg-bg-muted py-16 md:scroll-mt-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-accent">
            POWERFUL INGREDIENTS
          </p>
          <h2 className="mt-4 text-3xl font-bold text-balance text-primary sm:text-4xl">
            More Than Just a Moisturizer
          </h2>
          <p className="mt-3 text-base text-ink/70 sm:text-lg">
            A thoughtfully curated blend of skin-replenishing actives
          </p>
          <span className="mx-auto mt-6 block h-1 w-20 rounded-full bg-gradient-to-r from-accent to-primary" />
        </div>

        <ol className="mx-auto mt-12 max-w-2xl space-y-5 md:space-y-6">
          {INGREDIENTS.map((ingredient, i) => (
            <IngredientRow key={ingredient.name} {...ingredient} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
