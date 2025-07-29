import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedCategories />
      <Footer />
    </div>
  );
};

export default Index;
