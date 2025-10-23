import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/unnamed_1760549168809.jpg';

export function Hero() {
  const { content } = useLanguage();

  const scrollToIntro = () => {
    const element = document.getElementById('intro');
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
    <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6" 
          data-testid="text-hero-company"
          style={{ letterSpacing: '0.02em' }}
        >
          {content.hero.company}
        </h1>
        <p className="text-2xl md:text-3xl text-white/95 mb-4 font-light tracking-wide" data-testid="text-hero-tagline">
          {content.hero.tagline}
        </p>
        <p className="text-lg md:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          {content.hero.subtitle}
        </p>
        <Button
          size="lg"
          className="bg-primary border border-primary-border text-primary-foreground font-medium px-10 py-6 text-lg"
          onClick={scrollToIntro}
          data-testid="button-hero-cta"
        >
          {content.hero.cta}
        </Button>
      </div>

      <button
        onClick={scrollToIntro}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
}
