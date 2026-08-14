import Image from "next/image";

export default function ProblemStrip() {
  return (
    <section aria-label="Who this cream is for">
      <div className="hidden md:block">
        <Image
          src="/images/nourish-restore-model-wide-b.png"
          alt="Daily Barrier Repair for Sensitive, Redness-Prone Skin — targets visible redness, skin reactivity, barrier weakness, and dry sensitive skin"
          width={2928}
          height={1200}
          className="h-auto w-full"
        />
      </div>
      <div className="md:hidden">
        <Image
          src="/images/symptom-list-badges-tall.png"
          alt="Daily Barrier Repair for Sensitive, Redness-Prone Skin — targets visible redness, skin reactivity, barrier weakness, and dry sensitive skin"
          width={1800}
          height={1350}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
