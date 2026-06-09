import { motion } from "framer-motion";

type Props = { open: boolean; size?: number; className?: string };

// A stylised lily that unfurls from a closed bud to a full bloom.
// Two petal rings + a golden centre. Pure SVG — weightless, never breaks.
// soft, wide water-lily petal with a rounded tip
const PETAL =
  "M0 0 C -44 -40 -40 -106 -10 -138 C -4 -145 4 -145 10 -138 C 40 -106 44 -40 0 0 Z";

function Ring({
  count,
  scale,
  fill,
  open,
  delayBase,
}: {
  count: number;
  scale: number;
  fill: string;
  open: boolean;
  delayBase: number;
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (360 / count) * i;
        return (
          <motion.path
            key={i}
            d={PETAL}
            fill={fill}
            initial={false}
            style={{ originX: "50%", originY: "100%" }}
            animate={{
              rotate: angle,
              scale: open ? scale : scale * 0.12,
              opacity: open ? 1 : 0.4,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 14,
              delay: delayBase + i * 0.05,
            }}
            transform={`translate(0 0) rotate(${angle})`}
          />
        );
      })}
    </>
  );
}

export default function LilyBloom({ open, size = 320, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-180 -180 360 360"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="petalOuter" cx="50%" cy="90%" r="80%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="55%" stopColor="#f6dfe2" />
          <stop offset="100%" stopColor="#e8b4b8" />
        </radialGradient>
        <radialGradient id="petalInner" cx="50%" cy="90%" r="80%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="70%" stopColor="#fbeef0" />
          <stop offset="100%" stopColor="#d98a9a" />
        </radialGradient>
        <radialGradient id="lilyCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f7e7b6" />
          <stop offset="100%" stopColor="#c9a24b" />
        </radialGradient>
      </defs>

      {/* outer ring */}
      <g>
        <Ring count={8} scale={1} fill="url(#petalOuter)" open={open} delayBase={0.1} />
      </g>
      {/* inner ring, offset */}
      <g transform="rotate(22)">
        <Ring count={6} scale={0.7} fill="url(#petalInner)" open={open} delayBase={0.25} />
      </g>

      {/* golden centre + stamens */}
      <motion.g
        initial={false}
        animate={{ scale: open ? 1 : 0.3, opacity: open ? 1 : 0 }}
        transition={{ delay: open ? 0.5 : 0, duration: 0.6 }}
      >
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (Math.PI * 2 * i) / 10;
          return (
            <circle
              key={i}
              cx={Math.cos(a) * 26}
              cy={Math.sin(a) * 26}
              r={5}
              fill="#c9a24b"
            />
          );
        })}
        <circle r={20} fill="url(#lilyCore)" />
      </motion.g>
    </svg>
  );
}
