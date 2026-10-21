"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Banner besar: video di-scrub mengikuti scroll (ScrollTrigger).
 *  Taruh video di /public/video/hero.mp4 dan poster di /public/images/poster.jpg */
export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current!;
    const section = sectionRef.current!;
    let tween: gsap.core.Tween | undefined;
    let fade: gsap.core.Tween | undefined;

    const setup = () => {
      if (!video.duration || tween) return;
      tween = gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "+=250%", scrub: 0.4, pin: true },
      });
      fade = gsap.to(textRef.current, {
        opacity: 0, y: -40, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "+=60%", scrub: true },
      });
    };

    video.pause();
    if (video.readyState >= 1) setup();
    else video.addEventListener("loadedmetadata", setup, { once: true });

    return () => {
      tween?.scrollTrigger?.kill(); tween?.kill();
      fade?.scrollTrigger?.kill(); fade?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[calc(100svh-6.25rem)] min-h-[480px] w-full overflow-hidden bg-brand-diag">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        poster="/images/poster.jpg"
        muted playsInline preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <div ref={textRef} className="absolute bottom-10 left-0 right-0 mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl">
          Portofolio desain <span className="text-brand">Zagab</span>
        </h1>
        <p className="mt-4 max-w-lg text-white/80">Scroll ke bawah untuk memutar videonya.</p>
      </div>
    </section>
  );
}
