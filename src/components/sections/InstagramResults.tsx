"use client";


import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const screenshots = [
  { image: "/img/ig-results/ss1.jpg", title: "Video Performance 01" },
  { image: "/img/ig-results/ss2.jpg", title: "Video Performance 02" },
  { image: "/img/ig-results/ss3.jpg", title: "Video Performance 03" },
  { image: "/img/ig-results/ss4.jpg", title: "Video Performance 04" },
  { image: "/img/ig-results/ss5.jpg", title: "Video Performance 05" },
];


export function InstagramResults() {
  console.log("INSTAGRAM COMPONENT RENDERED");
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = screenshots.length;


  const nextSlide = () => {
    console.log("NEXT BUTTON CLICKED");
    setActiveIndex((current) => (current + 1) % total);
  };


  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };


  useEffect(() => {
    console.log("INSTAGRAM CAROUSEL MOUNTED");
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4000);


    return () => window.clearInterval(timer);
  }, [total]);


  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };


  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;


    const difference =
      touchStartX.current - event.changedTouches[0].clientX;


    if (difference > 45) nextSlide();
    if (difference < -45) previousSlide();


    touchStartX.current = null;
  };


  return (
    <section
      id="instagram-results"
      className="relative overflow-hidden bg-[#100D11] px-5 py-24 text-white sm:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#EBAFC5]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#EBAFC5]/10 blur-[120px]" />


      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#EBAFC5]">
            THE NUMBERS SPEAK
          </p>


          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Creativity that
            <span className="block italic text-[#EBAFC5]">
              gets noticed.
            </span>
          </h2>


          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/50 sm:text-base">
            A glimpse into the content, creativity and engagement.
            Real moments from the Instagram journey.
          </p>
        </div>


        <div className="mt-8 flex justify-center">
          <a
            href="https://www.instagram.com/YOUR_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-medium text-[#EBAFC5] transition-all duration-300 hover:border-[#EBAFC5]/50 hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
            </svg>
            Follow on Instagram ↗
          </a>
        </div>


        {/* CAROUSEL */}
        <div
          className="relative mx-auto mt-16 flex h-[440px] w-full max-w-5xl items-center justify-center overflow-hidden sm:mt-20 sm:h-[570px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {screenshots.map((screenshot, index) => {
            let offset = index - activeIndex;


            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;


            const isActive = offset === 0;
            const isSide = Math.abs(offset) === 1;
            const isVisible = isActive || isSide;


            return (
              <button
                key={screenshot.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${screenshot.title}`}
                aria-current={isActive ? "true" : undefined}
                tabIndex={isVisible ? 0 : -1}
                className="absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border transition-[transform,opacity,filter] duration-700 ease-out"
                style={{
                  width: "min(78%, 480px)",
                  height: "min(390px, 88%)",
                  transform: `translate(-50%, -50%) translateX(${offset * 82}%) scale(${isActive ? 1 : 0.78})`,
                  opacity: isActive ? 1 : isSide ? 0.4 : 0,
                  filter: isActive ? "blur(0px)" : "blur(1px)",
                  zIndex: isActive ? 20 : isSide ? 10 : 0,
                  pointerEvents: isVisible ? "auto" : "none",
                  borderColor: isActive
                    ? "rgba(235,175,197,0.6)"
                    : "rgba(255,255,255,0.1)",
                  boxShadow: isActive
                    ? "0 25px 100px rgba(235,175,197,0.18)"
                    : "none",
                }}
              >
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  sizes="(max-width: 640px) 78vw, 480px"
                  priority={index === 0}
                  draggable={false}
                  className="select-none bg-[#1c151a] object-contain"
                />


                {!isActive && (
                  <span className="absolute inset-0 bg-[#100D11]/20" />
                )}
              </button>
            );
          })}
        </div>


        {/* NAVIGATION */}
        <div className="mt-8 flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous screenshot"
            className="relative z-30 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-[#EBAFC5] hover:bg-[#EBAFC5] hover:text-[#542638]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>


          <div className="flex items-center gap-2">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to screenshot ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-9 bg-[#EBAFC5]"
                    : "w-2 bg-white/25 hover:bg-white/60"
                }`}
              />
            ))}
          </div>


          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="relative z-30 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-[#EBAFC5] hover:bg-[#EBAFC5] hover:text-[#542638]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>


        {/* SLIDE COUNTER */}
        <p
          className="mt-7 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-white/35"
          aria-live="polite"
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}


export default InstagramResults;
