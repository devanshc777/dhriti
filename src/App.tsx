import { useState } from "react";
import { useSmoothScroll } from "./lib/scroll";
import Intro from "./sections/Intro";
import Hero from "./sections/Hero";
import Eyes from "./sections/Eyes";
import ArtJourney from "./sections/ArtJourney";
import Letters from "./sections/Letters";
import NightCall from "./sections/NightCall";
import Dream from "./sections/Dream";
import Gallery from "./sections/Gallery";
import Finale from "./sections/Finale";
import AudioToggle from "./components/AudioToggle";

export default function App() {
  const [entered, setEntered] = useState(false);
  useSmoothScroll(entered);

  return (
    <>
      <Intro onEnter={() => setEntered(true)} />
      <AudioToggle start={entered} />

      <main className={entered ? "" : "h-screen overflow-hidden"}>
        <Hero entered={entered} />
        <Eyes />
        <ArtJourney />
        <Letters />
        <NightCall />
        <Dream />
        <Gallery />
        <Finale />
        <footer className="bg-cream py-8 text-center text-xs uppercase tracking-[0.3em] text-ink/40">
          made with love · for dhriti · 8 months 🌸
        </footer>
      </main>
    </>
  );
}
