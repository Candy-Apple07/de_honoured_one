import santoriniImg from "@/assets/santorini.jpg";
import santorini2Img from "@/assets/santorini-2.jpg";
import santorini3Img from "@/assets/santorini-3.jpg";
import kyotoImg from "@/assets/kyoto.jpg";
import kyoto2Img from "@/assets/kyoto-2.jpg";
import kyoto3Img from "@/assets/kyoto-3.jpg";
import patagoniaImg from "@/assets/patagonia.jpg";
import patagonia2Img from "@/assets/patagonia-2.jpg";
import patagonia3Img from "@/assets/patagonia-3.jpg";

export interface Trip {
  slug: string;
  title: string;
  location: string;
  country: string;
  date: string;
  excerpt: string;
  image: string;
  gallery: string[];
  duration: string;
  highlights: string[];
  story: string[];
}

export const trips: Trip[] = [
  {
    slug: "santorini",
    title: "Azure Dreams in Santorini",
    location: "Santorini",
    country: "Greece",
    date: "September 2025",
    excerpt: "Lost in the labyrinth of whitewashed walls and cerulean domes, where every sunset paints the Aegean in liquid gold.",
    image: santoriniImg,
    gallery: [santorini2Img, santorini3Img],
    duration: "8 Days",
    highlights: ["Oia Sunset", "Caldera Cruise", "Wine Tasting", "Black Sand Beach"],
    story: [
      "There's a moment in Santorini when the sun begins its descent behind the caldera — the entire island holds its breath. The white-washed walls of Oia transform into canvases of rose gold and amber, and the Aegean Sea below catches fire.",
      "I arrived on a ferry from Athens, the volcanic island rising from the water like a crescent moon of stone and light. The first thing that strikes you is the verticality — stairs cascading down cliff faces, hotels carved into the rock, infinity pools hanging over the abyss.",
      "Each morning I wandered through narrow alleys where bougainvillea spilled over walls in violent purple cascades. The blue domes of churches punctuated the skyline like sapphires set in alabaster. I found a tiny café perched on the edge of the caldera where an old man served the strongest Greek coffee I've ever tasted.",
      "The highlight was a sunset sail around the volcanic islands. As our catamaran glided through the caldera, we swam in hot springs where the water turned rust-red from the earth's warmth below. That evening, watching the sun melt into the sea from the deck of the boat, I understood why people return to this island year after year."
    ],
  },
  {
    slug: "kyoto",
    title: "Autumn's Last Breath in Kyoto",
    location: "Kyoto",
    country: "Japan",
    date: "November 2025",
    excerpt: "Walking through ancient temples draped in crimson and gold, where every fallen leaf tells a thousand-year story.",
    image: kyotoImg,
    gallery: [kyoto2Img, kyoto3Img],
    duration: "12 Days",
    highlights: ["Fushimi Inari", "Tea Ceremony", "Bamboo Grove", "Temple Gardens"],
    story: [
      "Kyoto in autumn is not just a destination — it's a meditation. The city wraps itself in layers of crimson, amber, and gold, as if the landscape itself is exhaling after a long, warm summer.",
      "I spent my first morning at Kinkaku-ji, the Golden Pavilion, arriving before the crowds. The temple floated on its mirror-lake like a dream made solid, every surface catching the early light. The surrounding maples were at peak color, their reflections turning the water into a painting.",
      "The bamboo grove of Arashiyama became my daily pilgrimage. Walking through those towering green columns, listening to the wind create its own symphony overhead — it's the closest I've come to hearing silence sing. Each visit revealed something new: a shaft of light, a swaying rhythm, a hidden path.",
      "But it was a private tea ceremony in a 400-year-old machiya that left the deepest impression. The host moved with a precision that felt like choreography, every gesture intentional, every pause meaningful. In the silence between the whisking of matcha and the placing of a sweet, I found a stillness I didn't know I was searching for."
    ],
  },
  {
    slug: "patagonia",
    title: "Edge of the World: Patagonia",
    location: "Patagonia",
    country: "Argentina",
    date: "January 2026",
    excerpt: "At the southern edge of the continent, where glaciers meet granite and the wind speaks in a language older than time.",
    image: patagoniaImg,
    gallery: [patagonia2Img, patagonia3Img],
    duration: "14 Days",
    highlights: ["Torres del Paine", "Perito Moreno", "Glacier Trekking", "Gaucho Camp"],
    story: [
      "Patagonia doesn't welcome you — it dares you. From the moment I stepped off the bus in El Chaltén, the wind was already testing my resolve, whipping across the steppe with a ferocity that made my eyes water and my heart race.",
      "The trek to the base of Fitz Roy began at dawn, the granite spires hidden behind clouds like a secret the mountain wasn't ready to share. Hours of walking through lenga forests painted in autumn gold, crossing glacial streams that ran turquoise with mineral flour. Then, at the final viewpoint, the clouds parted — and there it was. Fitz Roy, in all its impossible verticality, lit by the rising sun.",
      "Perito Moreno glacier is another kind of revelation. Standing on the walkways, hearing the ice crack and groan like a living thing, watching house-sized chunks calve into the lake below — it recalibrates your sense of scale. Time moves differently here, measured in millennia instead of minutes.",
      "My last night was spent at a gaucho estancia, where weathered horsemen cooked lamb over an open fire and told stories of the land. Under a sky so full of stars it felt heavy, with the wind finally at rest, I understood that Patagonia isn't a place you visit. It's a place that visits you — and never quite leaves."
    ],
  },
];
