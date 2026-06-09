import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { art, instagram } from "../data/photos";

const confetti = ["#ff4fa3", "#1fb1c4", "#ffd23f", "#8b5cf6", "#ff8a3d"];

export default function ArtJourney() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff3fb] via-[#fef7e6] to-[#eafaff] py-28">
      {/* confetti dots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: 8 + (i % 4) * 4,
              height: 8 + (i % 4) * 4,
              background: confetti[i % confetti.length],
              opacity: 0.5,
            }}
            animate={{ y: [0, -14, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <Reveal as="p" className="text-xs font-extrabold uppercase tracking-[0.4em] text-d2-pink">
            your art journey
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mt-3 font-sans text-4xl font-extrabold text-d2-purple sm:text-6xl"
          >
            a <span className="text-d2-pink">smashing</span>{" "}
            <span className="text-d2-teal">success</span>.
          </Reveal>
          <Reveal as="p" delay={2} className="mx-auto mt-4 max-w-xl text-lg text-ink/70">
            you built <strong className="text-d2-orange">d2creates</strong> from a brave little idea
            into a whole room of kids who can't wait to make a mess with you. i'm so proud i could
            burst.
          </Reveal>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-3">
          <motion.img
            src={art.workshop}
            alt="Dhriti's fun art photo-frame workshop with the kids"
            loading="lazy"
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="rounded-2xl shadow-[0_20px_50px_-15px_rgba(255,79,163,0.45)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <img src={art.logo} alt="d2creates logo" loading="lazy" className="w-full max-w-[220px]" />
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-d2-pink px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:scale-105 hover:bg-d2-purple"
            >
              visit @d2creates →
            </a>
          </motion.div>
          <motion.img
            src={art.learned}
            alt="5 things I learned from our photo frame workshop"
            loading="lazy"
            initial={{ opacity: 0, y: 40, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="rounded-2xl shadow-[0_20px_50px_-15px_rgba(31,177,196,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
