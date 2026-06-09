import { asset } from "../lib/motion";

export type Photo = { src: string; alt: string; caption?: string };

const p = (name: string, alt: string, caption?: string): Photo => ({
  src: asset(`photos/${name}.webp`),
  alt,
  caption,
});

// Single hero couple shot (verified) — soft gaze on the grass.
export const heroCouple = p("p29", "Dhriti and Devansh lying on the grass, looking at each other");

// The eyes centerpiece (verified) — the big-and-small-at-the-same-time face.
export const eyesPhoto = p("p48", "Dhriti's face up close, one eye wide, one scrunched in a laugh");

// The film-overlay couple polaroid (verified) — used as an accent.
export const filmCouple = p("p21", "A camcorder-style frame of the two of them on the grass");

// Us, on the grass (verified couple) — used in the 'our dream' section.
export const dreamPhoto = p("p25", "Dhriti and Devansh lying on the grass together");

// Gallery pool — the scattered film polaroids + portraits, each with a little note.
export const gallery: Photo[] = [
  p("p29", "the two of them on the grass", "us 🤍"),
  p("p21", "camcorder frame on the grass", "rewind this one"),
  p("p25", "lying together, smiling", "my favourite"),
  p("p16", "close together on the grass", "sun-warmed"),
  p("p17", "photobooth strip of the two of them", "every frame, you"),
  p("p20", "side by side on the grass", "you & me"),
  p("p22", "a quiet moment together", "stay here"),
  p("p23", "noses almost touching", "closer"),
  p("p24", "laughing together", "you make me laugh"),
  p("p26", "golden hour, the two of them", "golden hour"),
  p("p27", "the two of them, close up", "just us"),
  p("p33", "together", "ours"),
  p("p49", "Dhriti in a floral kurti", "pretty you"),
  p("p47", "Dhriti, all dressed up", "all dressed up"),
  p("p14", "Dhriti in an orange saree", "sunshine"),
  p("p35", "Dhriti by the lake", "lake day"),
  p("p70", "Dhriti at a cafe", "that smile"),
  p("p05", "Dhriti, candid", "candid you"),
  p("p12", "Dhriti outdoors", "out & about"),
  p("p13", "Dhriti smiling", "this smile"),
  p("p15", "Dhriti, golden light", "golden"),
  p("p19", "Dhriti, flower in her hair", "flower in your hair"),
  p("p03", "a little photobooth strip", "photobooth!"),
  p("p04", "another photobooth strip", "again 📸"),
];

// d2creates art-brand images for the workshop section.
export const art = {
  logo: asset("photos/art/d2-logo.webp"),
  workshop: asset("photos/art/workshop-frame.webp"),
  learned: asset("photos/art/workshop-learned.webp"),
};

export const instagram = "https://www.instagram.com/d2creates/";
