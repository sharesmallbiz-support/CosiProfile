import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutImage from '@assets/stock_images/artisan_workspace_ha_16dc79c5.webp';

export function About() {
  const { content } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  if (!content) return null;

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 px-6"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-5 gap-12 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="md:col-span-3">
            <img
              src={aboutImage}
              alt="Nini's workspace"
              className="w-full h-auto rounded-md shadow-lg"
              data-testid="img-about"
            />
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground" data-testid="text-about-title">
              {content.about.title}
            </h2>
            <div className="space-y-4">
              {content.about.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid={`text-about-bio-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="text-lg font-medium text-primary italic" data-testid="text-about-mission">
              {content.about.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
