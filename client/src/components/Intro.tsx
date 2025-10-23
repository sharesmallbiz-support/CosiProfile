import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Intro() {
  const { content } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  if (!content) return null;

  return (
    <section 
      id="intro" 
      className="py-20 md:py-28 px-6 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6" data-testid="text-intro-title">
            {content.intro.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto" data-testid="text-intro-description">
            {content.intro.description}
          </p>
        </div>
      </div>
    </section>
  );
}
