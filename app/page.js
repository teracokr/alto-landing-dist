import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import CarouselSection from './components/CarouselSection';
import YouTubeSection from './components/YouTubeSection';
import CallToActionSection from './components/CallToActionSection';
import RecipeSection from './components/RecipeSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <CarouselSection />
      <YouTubeSection />
      <CallToActionSection />
      <RecipeSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
