"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ProductPlaceholder } from "./ProductPlaceholder";

type Slide = { src?: string; alt: string; placeholderLabel?: string };

export function PadCarousel({
  slides,
  label,
}: {
  slides: Slide[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || isHoveredOrFocused || prefersReducedMotion || slides.length < 2) return;

    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, isHoveredOrFocused, prefersReducedMotion, slides.length]);

  return (
    <div
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
      className="surface-card relative mb-6 min-w-0 overflow-hidden bg-white"
      onMouseEnter={() => setIsHoveredOrFocused(true)}
      onMouseLeave={() => setIsHoveredOrFocused(false)}
      onFocusCapture={() => setIsHoveredOrFocused(true)}
      onBlurCapture={(event) => {
        if (
          !(event.relatedTarget instanceof Node) ||
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setIsHoveredOrFocused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
      }}
    >
      <div
        className="flex w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        aria-live="off"
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.src ?? slide.placeholderLabel}
            aria-hidden={slideIndex !== index}
            className="grid aspect-[4/3] w-full min-w-0 shrink-0 basis-full place-items-center p-4"
          >
            {slide.src ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-contain"
              />
            ) : (
              <ProductPlaceholder title={slide.placeholderLabel ?? slide.alt} detail={slide.alt} />
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label={isPaused ? "Start automatic slide show" : "Pause automatic slide show"}
        onClick={() => setIsPaused((paused) => !paused)}
        className="absolute right-2 top-2 grid min-h-11 min-w-11 place-items-center rounded-full bg-white text-ink shadow-sm"
      >
        {isPaused ? <Play size={16} /> : <Pause size={16} />}
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-sm"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-sm"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src ?? s.placeholderLabel}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className="grid min-h-11 min-w-11 place-items-center"
          >
            <span
              aria-hidden="true"
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-5 bg-bloom" : "w-2 bg-ink/50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}