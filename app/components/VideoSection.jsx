"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-accent">
            IN ACTION
          </p>
          <h2 className="mt-4 text-3xl font-bold text-balance text-primary sm:text-4xl">
            See the Anti-Redness Cream in Action
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-primary/10 bg-bg-muted shadow-xl">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="/Rosacea.mp4"
                title="Murasaki Beauty Rosacea-Prone Anti-Redness Cream video"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
