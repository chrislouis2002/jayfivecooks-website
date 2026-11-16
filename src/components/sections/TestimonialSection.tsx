

"use client";


import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const testimonials = [
  {
    src: "/img/testimonials/student-review-1.jpg",
    alt: "Student feedback about the AI video class",
    title: "Student Review 01",
  },
  {
    src: "/img/testimonials/student-review-2.jpg",
    alt: "Student feedback",
    title: "Student Review 02",
  },
  {
    src: "/img/testimonials/student-review-3.jpg",
    alt: "Student feedback",
    title: "Student Review 03",
  },
  {
    src: "/img/testimonials/student-review-4.jpg",
    alt: "Student feedback",
    title: "Student Review 04",
  },
  {
    src: "/img/testimonials/student-review-5.jpg",
    alt: "Student feedback",
    title: "Student Review 05",
  },
];


export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = testimonials.length;


  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % total);
  };


  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };


  useEffect(() => {
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
      id="testimonials"
      className="relative overflow-hidden bg-[#100D10] px-5 py-20 text-white sm:px-10 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#EBAFC5]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#EBAFC5]/10 blur-[120px]" />


      <div className="relative mx-auto max-w-6xl">


        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#EBAFC5]">
            REAL STUDENT FEEDBACK
          </p>


          <h2 className="mt-8 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            What our students are
            <span className="block italic text-[#EBAFC5]">
              saying.
            </span>
          </h2>


          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#C5B9C0] sm:text-xl">
            Feedback shared by learners from Jayfivecooks’
            previous classes.
          </p>
        </div>


        {/* TESTIMONIAL CAROUSEL */}
        <div
          className="relative mx-auto mt-16 flex h-[440px] w-full max-w-5xl items-center justify-center overflow-hidden sm:mt-20 sm:h-[570px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {testimonials.map((item, index) => {
            let offset = index - activeIndex;


            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;


            const isActive = offset === 0;
            const isSide = Math.abs(offset) === 1;
            const isVisible = isActive || isSide;


            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.title}`}
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
                  src={item.src}
                  alt={item.alt}
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


          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonial"
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


          {/* DOTS */}
          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-9 bg-[#EBAFC5]"
                    : "w-2 bg-white/25 hover:bg-white/60"
                }`}
              />
            ))}
          </div>


          {/* NEXT */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
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


        {/* CLOSING MESSAGE + OFFER */}
        <div className="mt-20 border-t border-white/10 pt-10 text-center sm:mt-24">


          <p className="font-serif text-3xl italic text-[#EBAFC5] sm:text-4xl">
            Your creative journey could be next.
          </p>


          <div className="mt-7 flex flex-col items-center">


            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Special offer
            </span>


            <div className="mt-3 flex items-center justify-center gap-4">
              <span className="text-lg text-white/40 line-through decoration-2">
                ₦45,000
              </span>


              <span className="rounded-full bg-[#EBAFC5] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#542638]">
                Discounted price
              </span>
            </div>


            <p className="mt-2 font-serif text-5xl font-bold text-[#EBAFC5] sm:text-6xl">
              ₦35,000
            </p>


            <p className="mt-2 text-sm text-white/60">
              Save ₦15,000 on your enrolment!
            </p>
          </div>


          <a
            href="https://nestuge.com/wn_wzs-xh"
            className="mt-8 inline-flex items-center justify-center bg-[#EBAFC5] px-10 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#542638] transition-all duration-300 hover:bg-white"
          >
            Enrol for our course ↗
          </a>
        </div>


      </div>
    </section>
  );
}


export default TestimonialsSection;

