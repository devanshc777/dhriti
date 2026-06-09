import { motion } from "framer-motion";
import PetalField from "../components/PetalField";
import LilyBloom from "../components/LilyBloom";

export default function Finale() {
  return (
    <section className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-[#f7e9ea] to-[#f1dfe1] py-28 text-center">
      <PetalField count={26} />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
        <LilyBloom open size={520} className="animate-floaty" />
      </div>

      <div className="relative z-10 max-w-2xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-rose"
        >
          before you go
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-5xl leading-tight text-plum sm:text-7xl"
        >
          i love <span className="italic text-rose">love love</span> you so.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 font-hand text-4xl text-gold sm:text-5xl"
        >
          the mostest. 🤍
        </motion.p>

        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="mt-10 rounded-full border border-gold/40 bg-ivory/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-ink/60 backdrop-blur transition hover:text-plum"
        >
          ↑ read it again
        </motion.button>
      </div>
    </section>
  );
}
