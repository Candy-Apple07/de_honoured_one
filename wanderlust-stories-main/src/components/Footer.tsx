import { Compass, MapPin, Plane, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 mt-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-10">
            {/* Travel icons strip */}
            <div className="flex items-center gap-6 text-muted-foreground/40">
              <Plane size={16} className="animate-float" style={{ animationDelay: "0s" }} />
              <Globe size={16} className="animate-float" style={{ animationDelay: "0.5s" }} />
              <Compass size={16} className="animate-float" style={{ animationDelay: "1s" }} />
              <MapPin size={16} className="animate-float" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Brand */}
            <div className="flex items-center gap-3">
              <Compass size={20} className="text-primary" />
              <span className="font-display text-xl font-bold text-foreground">Wanderlust</span>
            </div>

            <p className="font-body text-sm text-muted-foreground text-center max-w-md">
              Stories from the road — one journey at a time.
            </p>

            {/* Signature divider */}
            <div className="w-16 h-px bg-border" />

            {/* Creator signature */}
            <div className="flex flex-col items-center gap-3">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Crafted by
              </p>
              <p className="font-display text-2xl italic text-foreground/80">
                Shreyas Rongde
              </p>
              {/* Handwritten-style signature */}
              <svg
                viewBox="0 0 200 50"
                className="w-36 h-auto text-primary/60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 35 C20 15, 30 10, 40 25 C45 32, 48 35, 55 20 C60 10, 65 15, 70 25 C75 33, 78 30, 82 22" />
                <path d="M88 30 C92 15, 98 12, 105 25 C108 30, 112 32, 118 20 C122 12, 128 15, 132 28" />
                <path d="M138 22 C142 15, 148 18, 152 28 C155 34, 160 30, 165 20 C170 12, 178 18, 185 30" />
                <path d="M40 42 L160 42" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} />
              <span className="font-body text-sm">Currently: Buenos Aires</span>
            </div>

            <p className="font-body text-xs text-muted-foreground/50">
              © 2026 Wanderlust. All stories & photographs by Shreyas Rongde.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
