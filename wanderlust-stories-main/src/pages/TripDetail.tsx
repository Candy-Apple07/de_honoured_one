import { useParams, Link } from "react-router-dom";
import { trips } from "@/data/trips";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Calendar, Clock, MapPin, Camera, Compass } from "lucide-react";
import { useState } from "react";

const TripDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const trip = trips.find((t) => t.slug === slug);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  if (!trip) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Trip not found</h1>
          <Link to="/" className="text-primary font-body hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [trip.image, ...trip.gallery];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Floating travel icon */}
        <div className="absolute top-28 right-8 md:right-16 text-primary-foreground/20 animate-float">
          <Compass size={48} />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6">
          <div className="container mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 font-body text-sm tracking-wide uppercase mb-8 hover:text-primary-foreground transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Stories</span>
            </Link>
            <h1 className="animate-reveal font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] max-w-3xl">
              {trip.title}
            </h1>

            <div className="animate-reveal-delayed flex flex-wrap items-center gap-6 mt-8 text-primary-foreground/70">
              <div className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <MapPin size={14} />
                <span className="font-body text-sm">{trip.location}, {trip.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span className="font-body text-sm">{trip.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span className="font-body text-sm">{trip.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights with animated icons */}
      <section className="container mx-auto px-6 py-16">
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {trip.highlights.map((highlight, i) => (
              <span
                key={highlight}
                className="px-5 py-2 rounded-full border border-border bg-secondary font-body text-sm text-secondary-foreground tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {highlight}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-6 pb-16">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Camera size={16} className="text-primary" />
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary">
              Photo Gallery
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
                onClick={() => setLightboxImg(img)}
              >
                <img
                  src={img}
                  alt={`${trip.title} photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <Camera size={24} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6 animate-fade-in cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Full view"
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}

      {/* Story */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          {trip.story.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className="font-body text-lg leading-[1.9] text-foreground/85 mb-8">
                {i === 0 && (
                  <span className="font-display text-5xl font-bold text-primary float-left mr-3 mt-1 leading-none">
                    {paragraph[0]}
                  </span>
                )}
                {i === 0 ? paragraph.slice(1) : paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Travel-themed divider */}
      <ScrollReveal>
        <div className="flex items-center justify-center gap-4 py-8">
          <div className="h-px w-16 bg-border" />
          <Compass size={16} className="text-primary animate-spin-slow" />
          <div className="h-px w-16 bg-border" />
        </div>
      </ScrollReveal>

      {/* Next Trip Navigation */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {trips
                .filter((t) => t.slug !== trip.slug)
                .slice(0, 2)
                .map((nextTrip) => (
                  <Link
                    key={nextTrip.slug}
                    to={`/trip/${nextTrip.slug}`}
                    className="group flex items-center gap-6 hover:opacity-80 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={nextTrip.image}
                        alt={nextTrip.title}
                        className="w-20 h-20 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                        Next Story
                      </p>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {nextTrip.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TripDetail;
