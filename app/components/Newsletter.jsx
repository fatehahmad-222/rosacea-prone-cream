"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
          Interested in Our Newsletter?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink/70 sm:text-lg">
          Get the latest updates, exclusive offers, and product news.
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-semibold text-primary">
            <CircleCheck className="h-5 w-5" />
            Thank you for subscribing!
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-ink/20 bg-white px-5 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
            >
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
