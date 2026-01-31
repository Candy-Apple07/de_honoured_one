import MenuItem from "./MenuItem";

interface MenuItemData {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  items: MenuItemData[];
}

const MenuSection = ({ title, subtitle, items }: MenuSectionProps) => {
  return (
    <section className="py-16">
      <div className="divider-ornament">
        <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      
      <div className="mb-12 text-center">
        <h2 className="category-title mb-3">{title}</h2>
        {subtitle && (
          <p className="mx-auto max-w-md text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.name}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <MenuItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
