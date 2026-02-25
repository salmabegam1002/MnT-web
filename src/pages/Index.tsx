import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import EnterpriseBackground from "@/components/animations/EnterpriseBackground";
import AuthoritySection from "@/components/home/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import PartnersSection from "@/components/home/PartnersSection";
import VideoSection from "@/components/home/VideoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import FinalCTASection from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <main className="relative">
      <EnterpriseBackground />
      <ScrollProgress
        showDots={true}
        sections={["hero", "services", "products", "authority", "video", "portfolio", "partners", "testimonials"]}
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <AuthoritySection />
      <VideoSection />
      <PortfolioSection />
      <PartnersSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
