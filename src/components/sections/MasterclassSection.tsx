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
      className="w-full bg-white px-3 py-10 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-[#171219] px-5 py-8 text-white shadow-2xl sm:rounded-[40px] sm:px-10 sm:py-12 md:px-14 md:py-14">


        {/* Main heading */}
        <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-[#F4A9CF] sm:text-4xl md:text-5xl">
          Learn AI Video Creation, Professional Editing &amp; Digital Product
          Creation — All in One Masterclass.
        </h2>


        {/* Masterclass image */}
        <div className="relative mb-7 aspect-[16/9] w-full overflow-hidden rounded-[22px] sm:rounded-[30px]">
          <Image
            src="/img/master-class.png"
            alt="AI video creation and editing masterclass creative studio"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </div>


        {/* Introduction */}
        <div className="mb-7">
          <h3 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            You don&apos;t need to be a professional. You don&apos;t even need
            experience.
          </h3>


          <p className="text-base leading-relaxed text-white/85 sm:text-xl md:text-2xl">
            Whether you&apos;re a complete beginner, content creator, aspiring
            digital entrepreneur or someone looking for a valuable skill to
            earn from, this masterclass will walk you through the process, step
            by step.
          </p>
        </div>


        {/* Learning outcomes */}
        <div className="mb-8 rounded-[24px] bg-[#2B202D] px-5 py-6 sm:px-8 sm:py-7">
          <h3 className="mb-5 text-xl font-bold leading-snug text-[#F4A9CF] sm:text-2xl">
            INSIDE THIS MASTERCLASS, YOU&apos;LL LEARN HOW TO:
          </h3>


          <ul className="space-y-4">
            {learningOutcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 sm:gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#F4A9CF] text-sm font-bold text-[#F4A9CF]">
                  ✓
                </span>
                <span className="text-base leading-relaxed text-white/95 sm:text-xl">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>


        {/* Learning path */}
        <div className="mx-auto mb-7 max-w-4xl text-center">
          <h3 className="mb-4 text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
            One Masterclass. Multiple Digital Skills. Endless Creative
            Possibilities.
          </h3>


          <p className="text-base leading-relaxed text-white/85 sm:text-xl">
            Learn at your own pace with our 7-day learning path. Get lifetime
            access to your lessons, plus access to our WhatsApp and Telegram
            learning communities.
          </p>
        </div>


        {/* Price card */}
        <a
          href="https://nestuge.com/wn_wzs-xh"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-8 block rounded-[24px] bg-[#F3ADD0] px-5 py-7 text-center text-[#211520] transition duration-300 hover:-translate-y-1 hover:bg-[#F7BEDA] hover:shadow-[0_12px_40px_rgba(243,173,208,0.2)] sm:rounded-[30px] sm:py-9"
        >
          <span className="block text-2xl font-bold uppercase sm:text-3xl">
            Join the Masterclass
          </span>


          <span className="my-2 block text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            ₦35,000
          </span>


          <span className="block text-base sm:text-xl">
            Early-bird price · Regular price{" "}
            <span className="line-through">₦45,000</span>
          </span>


          <span className="mt-4 inline-block rounded-full bg-[#171219] px-6 py-2 text-sm font-semibold text-white transition group-hover:bg-[#3B2638] sm:text-base">
            Enrol now ↗
          </span>
        </a>


        {/* Bottom details */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm font-semibold uppercase tracking-wide text-[#F4A9CF] sm:text-base">
          <span>7-Day Learning Path</span>
          <span className="hidden sm:inline">·</span>
          <span>Lifetime Access</span>
          <span className="hidden sm:inline">·</span>
          <span>Beginner Friendly</span>
        </div>
      </div>
    </section>
  );
}
