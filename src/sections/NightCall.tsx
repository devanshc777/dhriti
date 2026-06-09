import { useMemo } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function NightCall() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 4,
        key: i,
      })),
    []
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#241a2b] via-[#2c2138] to-[#1a1422] py-28 text-ivory">
      {/* stars */}
      <div className="absolute inset-0" aria-hidden>
        {stars.map((s) => (
          <span
            key={s.key}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* moon */}
      <motion.div
        className="absolute right-[12%] top-[16%] h-24 w-24 rounded-full bg-gradient-to-br from-[#fef6e0] to-[#d9c79a] shadow-[0_0_80px_30px_rgba(254,246,224,0.25)] animate-floaty"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-blush">
          my favourite memory of us
        </Reveal>
        <Reveal as="h2" delay={1} className="mt-4 font-display text-4xl italic leading-tight sm:text-5xl">
          the night we slept on call
        </Reveal>
        <Reveal as="p" delay={2} className="mt-6 font-serif text-xl italic leading-relaxed text-ivory/80">
          a college day had me at my heaviest. you stayed on the line and didn't
          go anywhere. somewhere in the quiet i fell asleep listening to you
          breathe —
        </Reveal>
        <Reveal as="p" delay={3} className="mt-4 font-hand text-3xl text-blush sm:text-4xl">
          the best sleep i have ever gotten.
        </Reveal>
        <Reveal as="p" delay={4} className="mt-6 text-base text-ivory/55">
          you didn't fix the day. you did something better — you made it soft.
          you're the safe place i didn't know i was allowed to have.
        </Reveal>
      </div>
    </section>
  );
}
