import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { startersItems, mainsItems, dessertsItems } from "@/data/menuItems";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4">
        <MenuSection
          title="Starters"
          subtitle="Begin your culinary journey with our carefully curated appetizers"
          items={startersItems}
        />

        <MenuSection
          title="Main Courses"
          subtitle="Exquisite dishes crafted with the finest seasonal ingredients"
          items={mainsItems}
        />

        <MenuSection
          title="Desserts"
          subtitle="Indulgent finales to complete your dining experience"
          items={dessertsItems}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
