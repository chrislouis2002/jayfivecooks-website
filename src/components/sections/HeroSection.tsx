import Link from "next/link";
import Image from "next/image";
import MasterClassSection from "@/components/sections/MasterClassSection";

export function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#100d10] text-[#fff9fb]">
        {/* Brand header */}
        <header className="border-b border-white/10 px-7 py-7 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="inline-block">
              <span className="block font-serif text-2xl tracking-[0.08em]">
                NOSATAH&apos;S
              </span>
              <span className="mt-2 block text-[10px] font-semibold tracking-[0.35em] text-[#c9b9c2]">
                SCHOOL OF CREATIVITY
              </span>
            </Link>
          </div>
        </header>


        {/* Hero introduction */}
        
        <div className="relative mx-auto max-w-6xl px-7 pb-16 pt-20 sm:px-10 sm:pt-24">
<MasterClassSection />
          <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#8b526b]/10 blur-[130px]" />


          <div className="relative">
            {/* <p className="max-w-lg text-xs font-bold uppercase leading-7 tracking-[0.28em] text-[#efb2ca] sm:text-sm">
              A COMPLETE CREATIVE LEARNING EXPERIENCE
            </p> */}


            <h1 className="mt-12 max-w-5xl font-serif text-[clamp(3.5rem,10vw,7.6rem)] leading-[0.91] tracking-[-0.055em]">
              Turn your
              <br />
              creativity into
              <br />
              <span className="text-[#efaec7]">
                content, skills &
                <br />
                income.
              </span>
            </h1>


            {/* <p className="mt-12 max-w-3xl text-lg leading-[1.8] text-[#c9c0c6] sm:text-xl sm:leading-[1.85]">
              Explore the world of AI video creation, cinematic production,
              digital course creation and professional video editing — in one
              practical masterclass led by{" "}
              <strong className="font-semibold text-white">Jayfivecooks.</strong>
            </p> */}


            <div className="mt-12 flex flex-col items-start gap-8">
              <Link
                href="https://nestuge.com/wn_wzs-xh"
                className="flex min-h-[78px] w-full max-w-[440px] items-center justify-between bg-[#efb2ca] px-8 text-sm font-bold tracking-[0.13em] text-[#21151b] transition-all duration-300 hover:bg-[#f7c5d8] sm:px-11"
              >
                GET ACCESS
                <span className="text-xl">↗</span>
              </Link>


              {/* <Link
                href="#showcase"
                className="border-b border-[#d6a0b6] pb-2 text-base text-[#eee3e9] transition-colors hover:text-[#efb2ca] sm:text-lg"
              >
                Explore the masterclass
              </Link> */}

              <p className="border-b border-[#d6a0b6] pb-2 text-base text-[#eee3e9] transition-colors hover:text-[#efb2ca] sm:text-lg">
               Meet Your Instructor.
              </p>


              {/* <p className="max-w-2xl text-sm leading-7 text-[#b9aeb5] sm:text-base">
                Masterclass investment and enrolment details will be announced
                here.
              </p> */}
            </div>
          </div>


          {/* Instructor portrait placeholder */}
         

<div className="relative mt-20 sm:mt-24">
  <div className="absolute -right-5 -top-5 h-full w-full border border-[#9e7185]/60" />


  <div className="relative aspect-[4/5] max-h-[850px] w-full overflow-hidden bg-[#38242f] sm:aspect-[5/4]">
    <Image
      src="/img/NOSATAH.jpg"
      alt="Nosatah, instructor at Jayfivecooks School of Creativity"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover object-center"
    />
  </div>


  <div className="relative z-10 -mt-8 w-[90%] bg-[#fff9fb] px-5 py-6 text-[#21151b] sm:-mt-12 sm:w-[82%] sm:px-8 sm:py-8">
    <p className="text-xs tracking-[0.13em] sm:text-base sm:tracking-[0.16em]">
       @JAYFIVECOOKS
    </p>
  </div>
</div>
</div>


       


        {/* Learning highlights */}
        <div className="border-y border-white/15 bg-[#211a21] px-5 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl grid-cols-3">
            <div className="border-r border-white/15 px-2 text-center sm:px-6">
              <h3 className="font-serif text-lg leading-tight text-[#efb2ca] sm:text-3xl">
                4 learning pillars
              </h3>
              <p className="mt-4 text-[9px] leading-5 tracking-[0.12em] text-[#bdb0b8] sm:text-xs">
                ONE MASTERCLASS
              </p>
            </div>


            <div className="border-r border-white/15 px-2 text-center sm:px-6">
              <h3 className="font-serif text-lg leading-tight text-[#efb2ca] sm:text-3xl">
                7-day learning path
              </h3>
              <p className="mt-4 text-[9px] leading-5 tracking-[0.12em] text-[#bdb0b8] sm:text-xs">
                STRUCTURED LEARNING
              </p>
            </div>


            <div className="px-2 text-center sm:px-6">
              <h3 className="font-serif text-lg leading-tight text-[#efb2ca] sm:text-3xl">
                Lifetime access
              </h3>
              <p className="mt-4 text-[9px] leading-5 tracking-[0.12em] text-[#bdb0b8] sm:text-xs">
                LEARN AT YOUR PACE
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Fixed mobile enrolment button */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-[#100d10]/95 px-4 py-4 backdrop-blur-md md:hidden">
        <Link
          href="https://nestuge.com/wn_wzs-xh"
          className="flex min-h-[64px] w-full items-center justify-center bg-[#efb2ca] px-5 text-center text-sm font-bold tracking-[0.12em] text-[#21151b]"
        >
          ENROL FOR THE MASTERCLASS ↗
        </Link>
      </div>
    </>
  );
}
