import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fine dining experience"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-cream/80">
          Est. 2024
        </p>
        <h1 className="mb-6 font-serif text-5xl font-medium leading-tight text-cream md:text-7xl lg:text-8xl">
          Scarlet Truffle
        </h1>
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-accent" />
          <span className="font-serif text-lg italic text-accent">
            Fine Dining Experience
          </span>
          <span className="h-px w-12 bg-accent" />
        </div>
        <p className="mx-auto max-w-lg font-sans text-lg leading-relaxed text-cream/90">
          A celebration of seasonal ingredients, crafted with passion and served with elegance.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-xs uppercase tracking-widest">Explore Menu</span>
          <svg
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
