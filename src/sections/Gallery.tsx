import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Polaroid from "../components/Polaroid";
import { gallery } from "../data/photos";

// Draggable scattered polaroids on top of a calm masonry grid.
export default function Gallery() {
  const rotations = [-5, 3, -2, 4, -4, 2, -3, 5, -1, 3, -5, 2, -3, 4, -2, 5, -4, 1, -2, 3, -5, 2, -3, 4];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f6efe0] via-ivory to-cream py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-gold">
            us, in little frames
          </Reveal>
          <Reveal as="h2" delay={1} className="mt-3 font-display text-4xl italic text-plum sm:text-5xl">
            drag them around — they're yours
          </Reveal>
        </div>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {gallery.map((photo, i) => (
            <motion.div
              key={photo.src + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className="break-inside-avoid"
            >
              <Polaroid photo={photo} rotate={rotations[i % rotations.length]} draggable />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
