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

// White-dress-by-the-lake (verified) — used in the 'our dream' section.
export const dreamPhoto = p("p35", "Dhriti in a white dress by the water");

// Gallery pool — the scattered film polaroids + portraits.
export const gallery: Photo[] = [
  p("p29", "the two of them on the grass", "us"),
  p("p21", "camcorder frame on the grass"),
  p("p25", "lying together, smiling"),
  p("p16", "close together on the grass"),
  p("p17", "the two of them, soft light"),
  p("p20", "side by side"),
  p("p22", "a quiet moment"),
  p("p23", "noses almost touching"),
  p("p24", "laughing together"),
  p("p26", "golden hour, the two of them"),
  p("p27", "close up, the two of them"),
  p("p33", "together"),
  p("p49", "Dhriti in a floral kurti", "you"),
  p("p47", "Dhriti in a maroon outfit"),
  p("p14", "Dhriti in an orange saree", "sunshine"),
  p("p35", "Dhriti by the lake"),
  p("p70", "Dhriti at a cafe", "that smile"),
  p("p05", "Dhriti, candid"),
  p("p12", "Dhriti outdoors"),
  p("p13", "Dhriti smiling"),
  p("p15", "Dhriti, golden light"),
  p("p19", "Dhriti, flower in her hair"),
  p("p03", "a little photobooth strip"),
  p("p04", "another photobooth strip"),
];

// d2creates art-brand images for the workshop section.
export const art = {
  logo: asset("photos/art/d2-logo.webp"),
  workshop: asset("photos/art/workshop-frame.webp"),
  learned: asset("photos/art/workshop-learned.webp"),
};

export const instagram = "https://www.instagram.com/d2creates/";
