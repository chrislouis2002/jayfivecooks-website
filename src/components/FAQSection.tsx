

"use client";


import { useState } from "react";


const faqs = [
  {
    question: "What does the masterclass cover?",
    answer:
      "It covers AI Video Creation, Cinematic AI Production, Digital Course Creation and Professional Video Editing.",
  },
  {
    question: "Is the training Live or Pre-recorded?",
    answer:
      "Yes, it is a Pre-recorded class .",
  },
  {
    question: "How long will i have access?",
    answer:
      "The programme includes lifetime access to the learning materials, allowing you to learn at your own pace and revisit the content whenever you need.",
  },
  {
    question: "How much does enrolment cost?",
    answer:
      "The current enrolment price is ₦35,000, payable securely through Nestude.",
  },
  {
    question: "How do I enrol?",
    answer:
      "Use any of the enrolment buttons on this page. You'll be taken to the Selar checkout to complete payment.",
  },

];


export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);


  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-5 py-20 text-[#542638] sm:px-10 sm:py-28 lg:py-32"
    >
      {/* Soft pink decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#f9dce5]/50 blur-[110px]" />


      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">


        {/* Left heading */}
        <div>
          <span className="inline-flex rounded-full border border-[#f2d5df] bg-[#fff4f7] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#bd718e]">
            GOT QUESTIONS?
          </span>


          <h2 className="mt-7 font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Frequently
            <span className="block italic text-[#d987a5]">
              Asked Questions.
            </span>
          </h2>


          <p className="mt-6 max-w-sm text-base leading-8 text-[#8a707b]">
            Everything you need to know about learning, creating and working
            together. Can&apos;t find what you&apos;re looking for? Get in touch.
          </p>


          <a
            href="https://wa.me/2347070951648"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#542638] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d987a5]"
          >
            Ask a question
            <span aria-hidden="true">↗</span>
          </a>
        </div>


        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;


            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#efc4d3] bg-[#fff8fa] shadow-[0_8px_30px_rgba(210,140,165,0.08)]"
                    : "border-[#f0e7eb] bg-white hover:border-[#e9b8c9]"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 text-xs font-medium text-[#d987a5]">
                      0{index + 1}
                    </span>


                    <span className="text-sm font-semibold leading-6 text-[#542638] sm:text-base">
                      {faq.question}
                    </span>
                  </span>


                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#542638] text-white"
                        : "bg-[#fff0f4] text-[#bd718e]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>


                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pl-12 text-sm leading-7 text-[#8a707b] sm:px-7 sm:pl-16">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}


export default FAQSection;

