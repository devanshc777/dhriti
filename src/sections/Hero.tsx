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

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.45em] text-gold"
        >
          08 · 06 · for you
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
