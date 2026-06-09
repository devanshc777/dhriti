import { motion } from "framer-motion";

export default function ScrollCue({ label = "scroll" }: { label?: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-ink/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
    >
      <span className="text-[10px] uppercase tracking-[0.35em]">{label}</span>
      <motion.div
        className="h-9 w-[1.5px] rounded bg-gradient-to-b from-gold/70 to-transparent"
        animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originY: 0 }}
      />
    </motion.div>
  );
}
