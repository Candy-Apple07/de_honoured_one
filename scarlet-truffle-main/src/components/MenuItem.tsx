import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  className?: string;
}

const MenuItem = ({ name, description, price, image, className }: MenuItemProps) => {
  return (
    <div className={cn("menu-item-card group bg-card", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-medium text-foreground">{name}</h3>
          <span className="price-tag text-lg">${price}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
