import { motion } from "framer-motion";
import type { Photo } from "../data/photos";

type Props = {
  photo: Photo;
  rotate?: number;
  draggable?: boolean;
  className?: string;
  priority?: boolean;
};

// A film-polaroid framed photo. Optional drag. Soft shadow + paper border.
export default function Polaroid({
  photo,
  rotate = 0,
  draggable = false,
  className = "",
  priority = false,
}: Props) {
  return (
    <motion.figure
      drag={draggable}
      dragMomentum={false}
      dragElastic={0.18}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 30 }}
      whileDrag={{ scale: 1.08, zIndex: 40 }}
      initial={{ rotate }}
      className={`group relative w-full ${draggable ? "cursor-grab active:cursor-grabbing" : "cursor-default"} rounded-[6px] bg-white p-3 pb-10 shadow-[0_18px_40px_-12px_rgba(58,50,56,0.45)] ${className}`}
      style={{ touchAction: draggable ? "none" : "auto" }}
    >
      <div className="overflow-hidden rounded-[3px] bg-cream">
        <img
          src={photo.src}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="block aspect-[4/5] w-full object-cover transition-[filter] duration-700 group-hover:saturate-[1.08]"
        />
      </div>
      {photo.caption && (
        <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-2xl text-plum/80">
          {photo.caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
