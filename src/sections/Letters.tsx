import Reveal from "../components/Reveal";
import LetterCard from "../components/LetterCard";
import { letters } from "../data/letters";

export default function Letters() {
  return (
    <section className="grain relative bg-gradient-to-b from-[#f1dfe1] via-cream to-ivory py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-gold">
            some things i needed to say
          </Reveal>
          <Reveal as="h2" delay={1} className="mt-3 font-display text-4xl italic text-plum sm:text-5xl">
            four letters, for you
          </Reveal>
          <Reveal as="p" delay={2} className="mt-3 font-serif text-lg italic text-ink/60">
            tap each one. take your time.
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {letters.map((l, i) => (
            <LetterCard key={l.id} letter={l} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
