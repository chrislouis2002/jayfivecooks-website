import Link from "next/link";


const prizes = [
  { number: "02", name: "Blender", description: "A little something for your kitchen." },
  { number: "03", name: "Air Fryer", description: "Make everyday cooking more exciting." },
  { number: "04", name: "Tripods", description: "For your next creative production." },
  { number: "05", name: "LED Light", description: "Bring your content to life." },
];


export function PrizeShowcase() {
  return (
    <section
      id="prizes"
      className="relative overflow-hidden bg-[#fffafb] px-6 py-24 text-[#291923] sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ad7189]">
            A LITTLE SOMETHING EXTRA
          </p>


          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Learn. Create.
            <span className="block italic text-[#c17d99]">Win big.</span>
          </h2>


          {/* <p className="mt-6 max-w-2xl text-base leading-8 text-[#76636d] sm:text-lg">
            The creative experience comes with exciting prizes.
            Here's a look at what's up for grabs.
          </p> */}
        </div>


        {/* Grand prize */}
        <div className="mt-16 grid overflow-hidden border border-[#ead5de] bg-white lg:grid-cols-2">
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <span className="w-fit border border-[#d8a7b9] px-4 py-2 text-[10px] font-bold tracking-[0.25em] text-[#a96882]">
              THE GRAND PRIZE
            </span>


            <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#a17d8b]">
              THE BIG GIVEAWAY
            </p>


            <h3 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
              iPhone 17
              <span className="block italic text-[#c17d99]">Pro Max.</span>
            </h3>


            {/* <p className="mt-6 max-w-md leading-8 text-[#76636d]">
              One incredible phone. One very special grand prize.
              Could it be yours?
            </p> */}


            

<div className="mt-9 border-l-2 border-[#dbaabd] pl-5">
  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967985]">
    GRAND PRIZE SPONSORED BY
  </p>


  <p className="mt-2 font-serif text-3xl italic text-[#a96882]">
    Dee Unique
  </p>


  <p className="mt-2 text-sm text-[#897781]">
    Partner sponsor of the iPhone grand prize.
  </p>


  <a
    href="https://www.instagram.com/deeuniquegadgets/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#a96882] transition-colors hover:text-[#542638]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
    </svg>
    Visit @deeuniquegadgets on Instagram ↗
  </a>
</div>


          </div>

         

{/* iPhone 17 Pro Max video showcase */}
<div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-white p-6 sm:min-h-[500px]">


  {/* Soft pink glow behind the phone */}
  <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#ffffff] opacity-70 blur-[90px] sm:h-96 sm:w-96" />


  {/* Floating iPhone animation */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    aria-label="Floating and rotating iPhone 17 Pro Max"
    className="relative z-10 h-[540px] w-full object-contain sm:h-[460px]"
  >
    <source
      src="/videos/iphone-prize.mp4"
      type="video/mp4"
    />
  </video>


</div>


        </div>


        {/* Other prizes */}
        <div className="mt-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ad7189]">
            MORE EXCITING REWARDS
          </p>


          <h3 className="mt-4 font-serif text-4xl sm:text-5xl">
            And there&apos;s more...
          </h3>


          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {prizes.map((prize) => (
              <article
                key={prize.number}
                className="border border-[#ead5de] bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#c17d99] hover:shadow-xl hover:shadow-[#dbaabd]/10 sm:p-7"
              >
                <span className="text-xs tracking-[0.2em] text-[#b18c9c]">
                  {prize.number}
                </span>


                <div className="my-10 flex h-20 items-center justify-center bg-[#faedf2] font-serif text-4xl italic text-[#bd7b96]">
                  {prize.number}
                </div>


                <h4 className="font-serif text-2xl text-[#59384a] sm:text-3xl">
                  {prize.name}
                </h4>


                <p className="mt-3 text-sm leading-6 text-[#897781]">
                  {prize.description}
                </p>
              </article>
            ))}
          </div>
        </div>


        <div className="mt-20 text-center">
          <p className="font-serif text-3xl italic text-[#a96882] sm:text-4xl">
            Your next big win could be waiting.
          </p>


          <Link
            href="https://nestuge.com/wn_wzs-xh"
            className="mt-8 inline-flex min-h-14 items-center justify-center bg-[#efb2ca] px-9 text-xs font-bold tracking-[0.15em] text-[#291923] transition-all duration-300 hover:bg-[#e5a0ba]"
          >
            EXPLORE THE MASTERCLASS ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
