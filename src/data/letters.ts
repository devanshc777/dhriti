export type Letter = {
  id: string;
  seal: string; // emoji on the envelope
  flap: string; // short label on the closed envelope
  title: string;
  body: string[];
  signoff: string;
};

// Drafted from Devansh's notes — edit freely, this is the single source of truth.
export const letters: Letter[] = [
  {
    id: "art",
    seal: "🎨",
    flap: "for your art",
    title: "to your art journey",
    body: [
      "i need you to know how proud i am of you. not the quiet, polite kind of proud — the kind that makes my chest go tight when i watch you do the thing you love.",
      "d2creates started as a brave little idea and you turned it into a room full of kids who can't wait to make a mess with you. the photo frame workshop wasn't just a success, it was a smashing one, and i got to watch it happen.",
      "you give them colour, patience, and the feeling that what they made matters. that's rare. that's you.",
      "keep going. i'll be in the front row every single time, clapping the loudest.",
    ],
    signoff: "so proud of you — always",
  },
  {
    id: "call",
    seal: "🌙",
    flap: "the call",
    title: "the night we slept on call",
    body: [
      "i was having one of those college days where everything felt too heavy and too loud at once. and then there was you, on the other end of the line, not going anywhere.",
      "we didn't even do much. we just stayed. and somewhere in the quiet i fell asleep listening to you breathe — and honestly? best sleep i have ever gotten. nothing has come close since.",
      "i don't think i ever told you properly what that night did for me. you didn't fix the day. you did something better — you made it survivable, and then you made it soft.",
      "that's the thing about you. you're the safe place i didn't know i was allowed to have.",
    ],
    signoff: "still the best sleep of my life",
  },
  {
    id: "eyes",
    seal: "👀",
    flap: "your eyes",
    title: "your eyes",
    body: [
      "my favourite thing i ever get to say to you: your eyes are so pretty because they're big and small at the same time.",
      "i don't know how to explain it better than that. they go wide when you're excited and they scrunch up when you laugh and both versions undo me completely.",
      "people talk about pretty eyes like it's about colour or shape. yours are pretty because they're so fully you — every feeling you have shows up there first, before you even say a word.",
      "i could look at them for a very long time. i intend to.",
    ],
    signoff: "yours, staring",
  },
  {
    id: "future",
    seal: "🏡",
    flap: "someday",
    title: "the mother you'll be",
    body: [
      "watching you with those kids does something to me. the way you kneel down to their level, the way you make every single one feel like the most important artist in the room — i sit there thinking, god, she's going to be the best mother.",
      "i want that with you. a home that's ours, somewhere the beach and the hills are both close enough to argue about which to visit first. mornings that are slow. a door that's always a little open.",
      "and our kids — i want them to have your eyes. big and small at the same time. i want them to inherit the exact thing i fell for.",
      "i may not always say it right. but i love you. i love love love you so. the mostest.",
    ],
    signoff: "forever, your devansh",
  },
];
