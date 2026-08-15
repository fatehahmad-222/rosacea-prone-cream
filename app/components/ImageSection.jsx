import Image from "next/image";
import Reveal from "./Reveal";

export default function ImageSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal direction="left">
            <Image
              src="/Frame%20278.png"
              alt="Murasaki Beauty Rosacea-Prone Anti-Redness Cream"
              width={1600}
              height={1200}
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>
          <Reveal direction="right">
            <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
              Calm, Comforted, Confident Skin
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              Murasaki Beauty's Rosacea-Prone Anti-Redness Cream pairs targeted
              barrier-repair actives — PDRN, Ectoin, and Ceramide NP — with a
              lightweight, fragrance-free finish to help soothe the look of
              redness and keep reactive skin comfortable all day.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
