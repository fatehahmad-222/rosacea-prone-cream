"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What does this cream help with?",
    a: "Formulated for redness-prone, reactive skin, it helps calm the look of visible redness, replenish the skin barrier, and relieve tightness and dryness with daily use.",
  },
  {
    q: "When should I start seeing results?",
    a: "Many people notice improved comfort and hydration within 2 weeks of consistent daily use; barrier-support benefits build over time.",
  },
  {
    q: "How do I apply it?",
    a: "Apply a small amount to clean, dry skin morning and evening, gently massaging until fully absorbed.",
  },
  {
    q: "Is it suitable for sensitive skin?",
    a: "Yes — it's fragrance-free, alcohol-free, soap-free, and formulated to be gentle on reactive, sensitive, redness-prone skin.",
  },
  {
    q: "What are the key actives?",
    a: "PDRN (Sodium DNA) for skin renewal, Ectoin to help protect against moisture loss, and Ceramide NP to help strengthen the skin barrier.",
  },
  {
    q: "Can I use it with other skincare products?",
    a: "Yes — it layers well as the final step of your routine; introduce new actives gradually if you have very reactive skin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-16 bg-white py-16 md:scroll-mt-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70 sm:text-lg">
            Everything you need to know about using the Rosacea-Prone
            Anti-Redness Cream for calmer, more comfortable skin.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-base font-semibold transition-colors sm:text-lg ${
                        open ? "text-primary" : "text-ink"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        open
                          ? "rotate-45 bg-primary text-white"
                          : "bg-bg-muted text-primary"
                      }`}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-ink/70 sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
