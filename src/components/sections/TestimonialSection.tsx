

const testimonials = [
  {
    src: "/img/testimonials/student-review-1.jpg",
    alt: "Student feedback about the AI video class",
  },
  {
    src: "/img/testimonials/student-review-2.jpg",
    alt: "Student feedback",
  },
  {
    src: "/img/testimonials/student-review-3.jpg",
    alt: "Student feedback",
  },
  {
    src: "/img/testimonials/student-review-4.jpg",
    alt: "Student feedback",
  },
  {
    src: "/img/testimonials/student-review-5.jpg",
    alt: "Student feedback",
  },
 
];


export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#100D10] px-5 py-20 text-white sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">


        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#EBAFC5]">
            REAL STUDENT FEEDBACK
          </p>


          <h2 className="mt-8 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            What our students are
            <span className="block italic text-[#EBAFC5]">
              saying.
            </span>
          </h2>


          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#C5B9C0] sm:text-xl">
            Feedback shared by learners from Jayfivecooks’
            previous classes.
          </p>
        </div>


        {/* Responsive masonry gallery */}
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((item, index) => (
            <div
              key={item.src}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#1C171B] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading={index < 3 ? "eager" : "lazy"}
                className="block h-auto w-full"
              />
            </div>
          ))}
        </div>


        {/* Closing message */}
        

<div className="mt-16 border-t border-white/10 pt-10 text-center">
  <p className="font-serif text-3xl italic text-[#EBAFC5] sm:text-4xl">
    Your creative journey could be next.
  </p>


  <div className="mt-7 flex flex-col items-center">
    <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
      Special offer
    </span>


    <div className="mt-3 flex items-center justify-center gap-4">
      <span className="text-lg text-white/40 line-through decoration-2">
        ₦50,000
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

