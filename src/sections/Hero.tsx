import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LilyBloom from "../components/LilyBloom";
import PetalField from "../components/PetalField";
import ScrollCue from "../components/ScrollCue";
import Polaroid from "../components/Polaroid";
import { heroCouple } from "../data/photos";

export default function Hero({ entered }: { entered: boolean }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (entered) {
      const t = setTimeout(() => setOpen(true), 300);
      return () => clearTimeout(t);
    }
  }, [entered]);

  return (
    <section className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-b from-ivory via-[#fbf3ea] to-cream">
      <PetalField count={18} />

      {/* big soft lily behind the title */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-[58%] opacity-70">
        <LilyBloom open={open} size={620} className="animate-floaty" />
      </div>

      {/* hand-drawn note pointing at the bloom — desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="pointer-events-none absolute right-[4%] top-[42%] z-20 hidden w-[300px] -rotate-2 text-right lg:right-[7%] lg:block"
      >
        <p className="font-hand text-[2.1rem] leading-[1.05] text-rose">
          the lily — your favourite flower
        </p>
        <p className="mt-1 font-hand text-xl leading-tight text-ink/55">
          (my best stab at it… couldn't get you a real one, so i made you one !?
          hehe — happy anniversary)
        </p>
        {/* crude arrow curving left toward the lily */}
        <svg
          className="absolute -left-[118px] top-2 h-28 w-[120px] overflow-visible"
          viewBox="0 0 120 110"
          fill="none"
          aria-hidden
        >
          <motion.path
            d="M116 12 C 82 0 34 16 8 74"
            stroke="#d98a9a"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: open ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
          />
          <motion.path
            d="M8 74 L 28 67 M8 74 L 19 54"
            stroke="#d98a9a"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: open ? 1 : 0 }}
            transition={{ delay: 1.7, duration: 0.4 }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.45em] text-gold"
        >
          09 · 06 · for you
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[18vw] leading-[0.85] text-plum sm:text-[10rem]"
        >
          Dhriti
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="font-serif text-2xl italic text-ink/70 sm:text-3xl"
        >
          happy eight months, my love —{" "}
          <span className="text-shimmer font-semibold">i love you the mostest.</span>
        </motion.p>

        {/* hand-drawn note — mobile / tablet (points up at the bloom) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="-mt-2 lg:hidden"
        >
          <p className="font-hand text-2xl leading-tight text-rose">
            ↑ the lily — your favourite flower
          </p>
          <p className="mx-auto mt-1 max-w-xs font-hand text-lg leading-tight text-ink/55">
            (my best stab at it… couldn't get you a real one, so i made you one
            !? hehe — happy anniversary)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-2 w-44 sm:w-52"
        >
          <Polaroid photo={heroCouple} priority />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ScrollCue label="our story" />
      </div>
    </section>
  );
}
