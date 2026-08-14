import { Play } from "lucide-react";
import Reveal from "./Reveal";

const VIDEO_EMBED_URL = "";

function embedUrl(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be") || parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v") || parsed.pathname.split("/").pop();
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      const id = parsed.pathname.replace(/\//g, "");
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
  } catch {
    return url;
  }
  return url;
}

export default function VideoSection() {
  const src = embedUrl(VIDEO_EMBED_URL);

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
              {src ? (
                <iframe
                  className="h-full w-full"
                  src={src}
                  title="Murasaki Beauty Rosacea-Prone Anti-Redness Cream video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/10 via-bg-muted to-primary/20 px-6 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:h-24 sm:w-24">
                    <Play className="ml-1 h-9 w-9 fill-current sm:h-10 sm:w-10" />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">
                    Video coming soon
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
