import Image from "next/image";
import Reveal from "./Reveal";

export default function VisibleDailyCare() {
  return (
    <section className="bg-bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
            Visible Daily Care*
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="hidden md:block">
            <Image
              src="/images/visible-daily-care-4panel-wide.png"
              alt="Visible daily care across four panels — skin hydration, barrier recovery, skin comfort, and healthy-looking skin"
              width={2928}
              height={1200}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="md:hidden">
            <Image
              src="/images/visible-daily-care-4panel-tall.png"
              alt="Visible daily care across four panels — skin hydration, barrier recovery, skin comfort, and healthy-looking skin"
              width={1800}
              height={1350}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </Reveal>

        <Reveal>
          
        </Reveal>
      </div>
    </section>
  );
}
