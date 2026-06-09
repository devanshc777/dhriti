import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Letter } from "../data/letters";

// A sealed envelope that opens into a handwritten-style letter.
export default function LetterCard({ letter, index }: { letter: Letter; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* closed envelope */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, rotate: index % 2 ? 1.5 : -1.5 }}
        className="group relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-b from-cream to-[#ece0c9] p-6 text-center shadow-[0_12px_30px_-12px_rgba(58,50,56,0.4)]"
      >
        {/* envelope flap */}
        <div className="absolute inset-x-0 top-0 h-1/2 origin-top">
          <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,50%_85%)] bg-gradient-to-b from-[#efe4cd] to-[#e3d4b6]" />
        </div>
        {/* wax seal */}
        <div className="z-10 mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-rose/90 text-2xl shadow-inner ring-4 ring-rose/30 transition-transform group-hover:scale-110">
          {letter.seal}
        </div>
        <span className="z-10 mt-3 font-hand text-2xl text-plum/80">{letter.flap}</span>
        <span className="z-10 mt-1 text-[11px] uppercase tracking-[0.25em] text-ink/40">
          tap to open
        </span>
      </motion.button>

      {/* opened letter modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-plum/40 backdrop-blur-sm" />
            <motion.article
              role="dialog"
              aria-label={letter.title}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="grain relative max-h-[86vh] w-full max-w-xl overflow-y-auto rounded-xl bg-[#fffdf7] p-8 shadow-2xl sm:p-12"
              style={{ backgroundImage: "linear-gradient(#fffdf7,#fffdf7)" }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink/40 transition hover:bg-ink/5 hover:text-ink"
              >
                ✕
              </button>
              <p className="mb-1 text-center text-3xl">{letter.seal}</p>
              <h3 className="mb-6 text-center font-display text-3xl italic text-plum sm:text-4xl">
                {letter.title}
              </h3>
              <div className="space-y-4">
                {letter.body.map((para, i) => (
                  <p key={i} className="font-hand text-2xl leading-snug text-ink/85 sm:text-[1.7rem]">
                    {para}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-right font-hand text-3xl text-rose">{letter.signoff}</p>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
