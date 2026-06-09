import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../lib/motion";

// In-view fade-up wrapper used across sections.
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "h2" | "p" | "span" | "li";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
    >
      {children}
    </Comp>
  );
}
