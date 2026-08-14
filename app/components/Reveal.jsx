"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const { ref, inView } = useInView();

  const hidden =
    direction === "up"
      ? "opacity-0 translate-y-6"
      : direction === "left"
        ? "opacity-0 -translate-x-6"
        : direction === "right"
          ? "opacity-0 translate-x-6"
          : "opacity-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
