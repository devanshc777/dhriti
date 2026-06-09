import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../components/Reveal";
import { eyesPhoto } from "../data/photos";

export default function Eyes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-cream via-[#f7e9ea] to-[#f1dfe1] py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* the photo */}
        <motion.div style={{ y }} className="order-2 md:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 -rotate-2 rounded-2xl bg-white shadow-[0_24px_60px_-18px_rgba(74,51,64,0.45)]" />
            <img
              src={eyesPhoto.src}
              alt={eyesPhoto.alt}
              loading="lazy"
              className="relative rounded-xl object-cover"
            />
          </div>
        </motion.div>

        {/* the compliment */}
        <div className="order-1 space-y-6 md:order-2">
          <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-rose">
            my favourite thing to tell you
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="font-display text-4xl leading-tight text-plum sm:text-5xl"
          >
            “your eyes are so pretty —
            <br />
            <span className="italic text-rose">big and small</span> at the
            same&nbsp;time.”
          </Reveal>
          <Reveal as="p" delay={2} className="max-w-md font-serif text-xl italic text-ink/70">
            wide when you're excited, scrunched when you laugh. both versions
            undo me completely. i could look at them for a very long time — and i
            intend to.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
