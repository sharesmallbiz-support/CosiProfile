import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/unnamed_1760549168809.jpg';

export function Hero() {
  const { content } = useLanguage();

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  if (!content) return null;

  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4" data-testid="text-hero-name">
          {content.hero.name}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-2 font-medium" data-testid="text-hero-tagline">
          {content.hero.tagline}
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-testid="text-hero-intro">
          {content.hero.intro}
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
          onClick={scrollToPortfolio}
          data-testid="button-hero-cta"
        >
          {content.hero.cta}
        </Button>
      </div>

      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
