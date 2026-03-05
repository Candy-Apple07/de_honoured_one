import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TripCardProps {
  slug: string;
  title: string;
  location: string;
  date: string;
  excerpt: string;
  image: string;
  index: number;
}

const TripCard = ({ slug, title, location, date, excerpt, image, index }: TripCardProps) => {
  return (
    <Link
      to={`/trip/${slug}`}
      className="group trip-card-hover block overflow-hidden rounded-lg bg-card"
      style={{
        animationDelay: `${index * 0.15}s`,
        boxShadow: "var(--card-shadow)",
      }}
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="trip-card-image image-zoom w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-body tracking-widest uppercase text-primary font-semibold">
            {location}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="text-xs font-body tracking-wide text-muted-foreground">
            {date}
          </span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-primary font-body text-sm font-semibold tracking-wide uppercase">
          <span>Read Story</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
