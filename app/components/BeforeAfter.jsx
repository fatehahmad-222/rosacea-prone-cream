import Image from "next/image";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
            Barrier Repair, Before &amp; After
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="hidden md:block">
            <Image
              src="/images/before-after-barrier-wide.png"
              alt="Before: compromised skin barrier. After: healthy-looking skin barrier."
              width={2928}
              height={1200}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="md:hidden">
            <Image
              src="/images/before-after-barrier-tall.png"
              alt="Before: compromised skin barrier. After: healthy-looking skin barrier."
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
