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
      className="relative w-full overflow-hidden bg-[#171219] py-14 text-white sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-32 h-[450px] w-[450px] rounded-full bg-[#E98EAB]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#E98EAB]/10 blur-[130px]" />


      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-14 lg:px-16 xl:px-20">


        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <span className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#F4A9CF] sm:text-sm">
            JAYFIVECOOKS MASTERCLASS
          </span>


          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Master the Art of{" "}
            <span className="text-[#F4A9CF]">
              AI Video Creation
            </span>
            , Editing &amp; Digital Products.
          </h2>


          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
            You don&apos;t need previous experience. Learn how to create
            cinematic AI videos, edit professionally and build digital
            products you can monetize.
          </p>


          {/* Learning outcomes */}
          <div className="mt-9">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#F4A9CF] sm:text-base">
              What you&apos;ll learn
            </h3>


            <div className="grid gap-4 sm:grid-cols-2">
              {learningOutcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A9CF]/15 text-sm font-bold text-[#F4A9CF]">
                    ✓
                  </span>


                  <span className="text-sm leading-relaxed text-white/90 sm:text-base">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {/* CTA */}
          <div className="mt-9">
            <a
              href="https://nestuge.com/wn_wzs-xh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[58px] items-center justify-center gap-4 bg-[#F3ADD0] px-8 text-sm font-bold text-[#211520] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7BEDA] sm:px-10 sm:text-base"
            >
              Enrol for our course
              <span className="text-xl">↗</span>
            </a>
          </div>


          {/* Benefits */}
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/15 pt-6 text-[10px] font-semibold uppercase tracking-wider text-[#F4A9CF] sm:text-xs">
            <span>7-Day Learning Path</span>
            <span>Lifetime Access</span>
            <span>Beginner Friendly</span>
          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#2B202D] sm:aspect-[4/3] lg:aspect-[5/6]">
            <Image
              src="/img/master-class.png"
              alt="JAYFIVECOOKS AI video creation and editing masterclass"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />


            <div className="absolute inset-0 bg-gradient-to-t from-[#171219]/60 via-transparent to-transparent" />


            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <span className="inline-flex border border-white/30 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:text-xs">
                Learn · Create · Monetize
              </span>
            </div>
          </div>


          <p className="mt-4 text-center text-sm text-white/50 sm:text-base">
            Your journey into the world of AI creativity starts here.
          </p>
        </div>
      </div>
    </section>
  );
}
