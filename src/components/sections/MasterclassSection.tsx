

"use client";


import Image from "next/image";


const learningOutcomes = [
  "Create stunning AI videos using free and paid tools",
  "Produce advanced cinematic AI content",
  "Edit professional-quality videos",
  "Create your own digital course from scratch",
  "Develop digital products and learn how to monetize them",
];


export default function MasterclassSection() {
  return (
    <section
      id="masterclass"
      className="relative w-full overflow-hidden px-4 py-5 sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#171219] text-white shadow-xl sm:rounded-[32px]">


        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#E98EAB]/10 blur-[100px]" />


        <div className="relative grid items-center gap-7 p-5 sm:gap-9 sm:p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12">


          {/* LEFT CONTENT */}
          <div className="flex flex-col">


            {/* <span className="mb-3 inline-flex w-fit items-center rounded-full border border-[#F4A9CF]/30 bg-[#F4A9CF]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F4A9CF] sm:text-xs">
              ✦ JAYFIVECOOKS MASTERCLASS
            </span> */}


            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl xl:text-[54px]">
              Master the Art of{" "}
              <span className="text-[#F4A9CF]">
                AI Video Creation
              </span>
              , Editing & Digital Products.
            </h2>


            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
              You don't need previous experience. Learn how to create
              cinematic AI videos, edit professionally and build
              digital products you can monetize.
            </p>


            {/* Learning outcomes */}
            <div className="mt-6">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F4A9CF] sm:text-sm">
                What you'll learn
              </h3>


              <div className="grid gap-3 sm:grid-cols-2">
                {learningOutcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F4A9CF]/15 text-xs font-bold text-[#F4A9CF]">
                      ✓
                    </span>


                    <span className="text-xs leading-relaxed text-white/90 sm:text-sm">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>


            {/* CTA */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">


              <a
                href="https://nestuge.com/wn_wzs-xh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3ADD0] px-7 py-3.5 text-sm font-bold text-[#211520] shadow-lg shadow-pink-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7BEDA] hover:shadow-pink-500/20 sm:text-base"
              >
                Enrol for our course
                <span>↗</span>
              </a>


              {/* <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-white sm:text-3xl">
                    ₦35,000
                  </span>
                  <span className="text-sm text-white/40 line-through">
                    ₦45,000
                  </span>
                </div>


                <p className="text-[11px] text-white/55">
                  Limited early-bird pricing
                </p>
              </div> */}
            </div>


            {/* Benefits */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-wider text-[#F4A9CF] sm:text-xs">
              <span>7-Day Learning Path</span>
              <span>Lifetime Access</span>
              <span>Beginner Friendly</span>
            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">


            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#2B202D] sm:rounded-[28px]">


              <Image
                src="/img/masterclass.jpg"
                alt="JAYFIVECOOKS AI video creation and editing masterclass"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-[#171219]/50 via-transparent to-transparent" />


              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                <div className="inline-flex rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md sm:text-xs">
                  Learn · Create · Monetize
                </div>
              </div>
            </div>


            {/* Image caption */}
            <p className="mt-3 text-center text-xs text-white/45 sm:text-sm">
              Your journey into the world of AI creativity starts here.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}

