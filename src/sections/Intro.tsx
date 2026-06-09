import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LilyBloom from "../components/LilyBloom";

// Full-screen gate: a closed bud + greeting. Tap blooms the lily, then enters.
export default function Intro({ onEnter }: { onEnter: () => void }) {
  const [bloom, setBloom] = useState(false);
  const [gone, setGone] = useState(false);

  const enter = () => {
    if (bloom) return;
    setBloom(true);
    setTimeout(() => setGone(true), 1700);
    setTimeout(onEnter, 1500); // start audio / reveal site just before overlay lifts
  };

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-gradient-to-b from-ivory via-cream to-[#f0e2cf]"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            type="button"
            onClick={enter}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="mb-2 text-xs uppercase tracking-[0.4em] text-gold"
              animate={{ opacity: bloom ? 0 : 1 }}
            >
              eight months of you
            </motion.p>
            <motion.div animate={{ scale: bloom ? 1.05 : 1 }} transition={{ duration: 1.4 }}>
              <LilyBloom open={bloom} size={300} className="drop-shadow-[0_10px_30px_rgba(217,138,154,0.4)]" />
            </motion.div>
            <motion.h1
              className="mt-2 font-display text-4xl italic text-plum sm:text-5xl"
              animate={{ opacity: bloom ? 0 : 1, y: bloom ? -10 : 0 }}
            >
              Happy 8 Months, Dhriti
            </motion.h1>
            <motion.span
              className="mt-5 rounded-full border border-gold/40 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-ink/50"
              animate={{ opacity: bloom ? 0 : 1 }}
            >
              tap the bud to bloom
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
