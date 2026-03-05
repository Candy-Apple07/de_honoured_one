import heroImg from "@/assets/hero-travel.jpg";
import TripCard from "@/components/TripCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { trips } from "@/data/trips";
import { ArrowDown, Plane, Globe, Map } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Traveler standing on cliff overlooking ocean at sunset"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Floating travel elements */}
        <div className="absolute top-32 left-8 md:left-16 text-primary-foreground/10 animate-float" style={{ animationDelay: "0s" }}>
          <Plane size={40} />
        </div>
        <div className="absolute top-48 right-12 md:right-24 text-primary-foreground/10 animate-float" style={{ animationDelay: "1.5s" }}>
          <Globe size={36} />
        </div>
        <div className="absolute bottom-40 left-16 md:left-32 text-primary-foreground/10 animate-float" style={{ animationDelay: "2.5s" }}>
          <Map size={32} />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="animate-reveal font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-6">
            A Travel Journal
          </p>
          <h1 className="animate-reveal-delayed font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] max-w-4xl">
            Stories From
            <br />
            <span className="italic font-normal">The Road</span>
          </h1>
          <p className="animate-reveal-delayed-2 font-body text-lg md:text-xl text-primary-foreground/70 mt-8 max-w-xl leading-relaxed">
            Three journeys across continents — moments of wonder, solitude, and the beauty of getting lost.
          </p>

          <div className="absolute bottom-12 animate-float">
            <ArrowDown size={20} className="text-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Stats ribbon */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { label: "Countries", value: "3" },
              { label: "Days Traveled", value: "34" },
              { label: "Photos Taken", value: "2,400+" },
              { label: "Stories Written", value: "3" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center group cursor-default">
                  <p className="font-display text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trips Section */}
      <section className="container mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Featured Journeys
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Recent Adventures
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <ScrollReveal key={trip.slug} delay={index * 0.1}>
              <TripCard
                slug={trip.slug}
                title={trip.title}
                location={trip.location}
                date={trip.date}
                excerpt={trip.excerpt}
                image={trip.image}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery preview strip */}
      <section className="overflow-hidden py-16">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary text-center mb-8">
            Moments Captured
          </p>
        </ScrollReveal>
        <div className="flex gap-4 animate-scroll-x">
          {trips.flatMap((t) => [t.image, ...t.gallery]).map((img, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-44 rounded-lg overflow-hidden group">
              <img
                src={img}
                alt={`Travel moment ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <ScrollReveal>
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display text-3xl md:text-4xl italic text-foreground leading-snug">
              "The world is a book, and those who do not travel read only one page."
            </blockquote>
            <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mt-6">
              — Saint Augustine
            </p>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Index;
