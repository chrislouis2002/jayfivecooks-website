

import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";


export function Footer() {
  // REPLACE THESE WITH HER REAL DETAILS
  const whatsappNumber = "234XXXXXXXXXX";
  const instagramUrl = "https://instagram.com/YOUR_USERNAME";
  const tiktokUrl = "https://tiktok.com/@YOUR_USERNAME";


  const whatsappLink = `https://wa.me/${whatsappNumber}`;


  return (
    <footer className="relative overflow-hidden bg-[#100D11] text-white">
      <Container>
        <div className="mx-auto max-w-screen-xl border-t border-white/10 py-16 sm:py-20">


          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">


            {/* BRAND */}
            <div>
              <Link
                href="/"
                className="font-serif text-3xl font-semibold tracking-wide text-[#EBAFC5]"
              >
                JAYFIVECOOKS<span className="text-white">.</span>
              </Link>


              <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                Creating, teaching and inspiring through AI, food and
                creativity. Let's bring your next big idea to life.
              </p>


              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#EBAFC5]/70">
                Learn · Create · Inspire
              </p>
            </div>


            {/* CONTACT */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#EBAFC5]">
                Let's talk
              </h3>


              <p className="mt-5 text-sm leading-7 text-white/50">
                Have a question about classes, collaborations or working
                together? Send a message directly on WhatsApp.
              </p>


              <a
                href="https://wa.me/2348124581257"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 border border-[#EBAFC5]/40 bg-[#EBAFC5] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#542638] transition-all duration-300 hover:bg-white hover:border-white"
              >
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.45-8.41ZM12.05 21.8a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.01 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.96 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>


                <span>Chat on WhatsApp</span>
                <span aria-hidden="true">↗</span>
              </a>


              <p className="mt-3 text-xs text-white/40">
                +234 812 458 1257
              </p>
            </div>


            {/* SOCIAL MEDIA */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#EBAFC5]">
                Follow the journey
              </h3>


              <p className="mt-5 text-sm leading-7 text-white/50">
                Stay connected for creative inspiration, AI tutorials
                and behind-the-scenes content.
              </p>


              <div className="mt-7 flex items-center gap-4">


                {/* Instagram */}
                <a
                  href="https://www.instagram.com/jayfivecooks?rpxt=ZHFoYzhieXB1aTRu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#EBAFC5] hover:bg-[#EBAFC5] hover:text-[#542638]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>


                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@jayfivecooks?_r=1&_t=ZS-9BQogPLoDJa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#EBAFC5] hover:bg-[#EBAFC5] hover:text-[#542638]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.56v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.22-.02-.44-.07-.65v-3.62a6.46 6.46 0 1 0 3.63 5.8V9.9a8.37 8.37 0 0 0 4.9 1.57V7.9a4.85 4.85 0 0 1-1.13-.21Z" />
                  </svg>
                </a>


                {/* WhatsApp */}
                <a
                  href= "https://wa.me/2348124581257"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#EBAFC5] hover:bg-[#EBAFC5] hover:text-[#542638]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.45-8.41ZM12.05 21.8a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.01 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.96 9.91Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          {/* COPYRIGHT */}
          <div className="mt-16 border-t border-white/10 pt-7 text-center">
            <p className="text-xs tracking-wide text-white/40">
              © {new Date().getFullYear()} JAYFIVECOOKS. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-white/30">
              Made with creativity and love.
            </p>
          </div>


        </div>
      </Container>
    </footer>
  );
}


export default Footer;

