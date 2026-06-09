import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { asset } from "../lib/motion";

// Fixed mute/play control. OFF by default — music only starts when tapped.
// Drop a track at public/audio/song.mp3 — gracefully hides if missing.
export default function AudioToggle({ start: _start }: { start: boolean }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(true);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0.55;
      a.play().then(() => setPlaying(true)).catch(() => setHasAudio(false));
    }
  };

  return (
    <>
      <audio
        ref={ref}
        loop
        preload="auto"
        src={asset("audio/song.mp3")}
        onError={() => setHasAudio(false)}
      />
      {hasAudio && (
        <motion.button
          type="button"
          onClick={toggle}
          aria-label={playing ? "mute music" : "play music"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ivory/80 text-lg shadow-lg backdrop-blur transition hover:scale-110"
        >
          <span className={playing ? "animate-pulse" : ""}>{playing ? "🔊" : "🔈"}</span>
        </motion.button>
      )}
    </>
  );
}
