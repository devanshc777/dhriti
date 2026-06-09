import { useMemo } from "react";
import { useReducedMotion } from "../lib/motion";

// Soft petals drifting down/across. Pure CSS animation, GPU-friendly.
type Props = { count?: number; className?: string; tone?: "blush" | "white" };

const PETAL_PATH = "M0 0 C -7 -14 -4 -32 0 -46 C 4 -32 7 -14 0 0 Z";

export default function PetalField({ count = 16, className = "", tone = "blush" }: Props) {
  const reduced = useReducedMotion();
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: -Math.random() * 18,
        dur: 14 + Math.random() * 16,
        size: 10 + Math.random() * 16,
        rot: Math.random() * 360,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.35 + Math.random() * 0.4,
        key: i,
      })),
    [count]
  );

  if (reduced) return null;

  const fill = tone === "white" ? "#ffffff" : "#e8b4b8";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {petals.map((p) => (
        <span
          key={p.key}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: "-8%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `petalFall ${p.dur}s linear ${p.delay}s infinite`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        >
          <svg width={p.size} height={p.size * 1.4} viewBox="-10 -48 20 48">
            <path d={PETAL_PATH} fill={fill} transform={`rotate(${p.rot})`} />
          </svg>
        </span>
      ))}
      <style>{`
        @keyframes petalFall {
          0%   { transform: translate(0, -10vh) rotate(0deg); }
          100% { transform: translate(var(--drift), 110vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
