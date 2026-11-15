"use client";


import { useEffect, useRef, useState } from "react";


const videos = [
  {
    number: "01",
    label: "AI VIDEO CREATION",
    src: "/videos/video-showcase/01-video-showcase.mp4",
  },
  {
    number: "02",
    label: "AI VIDEO EDITING",
    src: "/videos/video-showcase/02-video-showcase.mp4",
  },
  {
    number: "03",
    label: "CREATIVE STORYTELLING",
    src: "/videos/video-showcase/03-video-showcase.mp4",
  },
  {
    number: "04",
    label: "CONTENT CREATION",
    src: "/videos/video-showcase/04-video-showcase.mp4",
  },
];


function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);


  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement === containerRef.current
      );
    };


    document.addEventListener("fullscreenchange", handleFullscreenChange);


    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);


  const togglePlayback = () => {
    const player = videoRef.current;
    if (!player) return;


    if (player.paused) {
      player.play().catch(() => {});
    } else {
      player.pause();
    }
  };


  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;


    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (container.requestFullscreen) {
        await container.requestFullscreen();
      }
    } catch (error) {
      console.error("Could not open fullscreen:", error);
    }
  };


  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-[#1c171d] transition-all duration-300 hover:border-[#edb4ca]/50">
      <div
        ref={containerRef}
        className={`relative aspect-[4/5] overflow-hidden bg-[#171018] ${
          isFullscreen
            ? "!fixed !inset-0 !z-[9998] !flex !h-[100dvh] !w-screen !items-center !justify-center !rounded-none !bg-black !p-0"
            : ""
        }`}
      >
        <video
          ref={videoRef}
          playsInline
          preload="metadata"
          controls={false}
          onClick={togglePlayback}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className={`h-full w-full cursor-pointer object-contain ${
            isFullscreen ? "!h-full !w-full" : "absolute inset-0"
          }`}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support video playback.
        </video>


        {!isFullscreen && (
          <>
            <span className="pointer-events-none absolute left-3 top-3 z-20 text-[9px] tracking-[0.15em] text-white/80 sm:left-6 sm:top-6 sm:text-[10px]">
              SHOWCASE {video.number}
            </span>


            <button
              type="button"
              onClick={togglePlayback}
              aria-label={playing ? "Pause video" : "Play video"}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white shadow-lg backdrop-blur-sm sm:h-14 sm:w-14 ${
                  playing
                    ? "opacity-0 transition-opacity hover:opacity-100"
                    : "opacity-100"
                }`}
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                    <path d="M7 4v16l13-8z" />
                  </svg>
                )}
              </span>
            </button>


            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-6">
              <p className="text-[9px] font-semibold tracking-[0.12em] text-[#f5d0de] sm:text-xs sm:tracking-[0.18em]">
                {video.label}
              </p>
            </div>
          </>
        )}


        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "Close fullscreen" : "Open fullscreen"}
          className={`absolute right-3 top-3 z-[9999] flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/65 text-white shadow-lg backdrop-blur-md transition hover:bg-black ${
            isFullscreen ? "!right-4 !top-4 !h-12 !w-12" : "sm:right-5 sm:top-5"
          }`}
        >
          {isFullscreen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}


export function VideoShowcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-[#100d11] px-4 py-20 text-[#fff9fb] sm:px-10 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#b66f8d]/10 blur-[120px]" />


      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#edb4ca]">
            THE CREATIVE EXPERIENCE
          </span>


          <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            Imagine it.
            <span className="block italic text-[#edb4ca]">
              Create it with AI.
            </span>
          </h2>


          {/* <p className="mt-6 max-w-xl text-base leading-8 text-[#c9bbc3] sm:text-lg">
            Explore the creative possibilities of AI-powered video creation
            and editing. Learn how to turn your ideas into compelling visual
            content.
          </p> */}
        </div>


        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {videos.map((video) => (
            <VideoCard key={video.number} video={video} />
          ))}
        </div>


        <p className="mt-8 text-center text-xs tracking-wide text-[#a99aa3]">
          EXPLORE THE POSSIBILITIES OF AI VIDEO CREATION
        </p>
      </div>
    </section>
  );
}


export default VideoShowcase;
