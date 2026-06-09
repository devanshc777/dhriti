import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../components/Reveal";
import { dreamPhoto } from "../data/photos";

// "Someday" — a home where the beach and the hills both reach.
export default function Dream() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const sun = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const hills = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const photoY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a1422] via-[#cfe3e6] to-[#f6efe0] pb-0 pt-28"
    >
      {/* sun */}
      <motion.div
        style={{ y: sun }}
        className="absolute left-1/2 top-[22%] h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ffe9b8] to-[#ffb37a] blur-[1px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-moss">
          the dream i keep
        </Reveal>
        <Reveal as="h2" delay={1} className="mt-3 font-display text-4xl italic text-plum sm:text-6xl">
          someday, a home that's ours
        </Reveal>
        <Reveal as="p" delay={2} className="mx-auto mt-5 max-w-xl font-serif text-xl italic text-ink/75">
          somewhere the beach and the hills are both close enough to argue about
          which to visit first. slow mornings. a door that's always a little
          open. and kids who have{" "}
          <span className="text-rose">your eyes</span> — big and small at the
          same time.
        </Reveal>
      </div>

      {/* floating photo */}
      <motion.div
        style={{ y: photoY }}
        className="relative z-10 mx-auto mt-12 w-56 sm:w-64"
      >
        <div className="rounded-[6px] bg-white p-3 pb-8 shadow-[0_22px_50px_-16px_rgba(58,50,56,0.5)]">
          <img src={dreamPhoto.src} alt={dreamPhoto.alt} loading="lazy" className="rounded-[3px]" />
          <p className="mt-2 text-center font-hand text-2xl text-plum/80">us, someday</p>
        </div>
      </motion.div>

      {/* layered hills + sea (SVG, parallax) */}
      <motion.svg
        style={{ y: hills }}
        viewBox="0 0 1440 320"
        className="relative z-0 -mt-16 w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="#a8bba0" d="M0 200 Q360 90 720 180 T1440 160 V320 H0 Z" opacity="0.7" />
        <path fill="#7f9678" d="M0 240 Q420 150 860 230 T1440 220 V320 H0 Z" opacity="0.85" />
        <path fill="#5f7a86" d="M0 285 Q500 250 980 285 T1440 280 V320 H0 Z" />
      </motion.svg>
    </section>
  );
}
