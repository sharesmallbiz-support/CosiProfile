import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Users, Briefcase } from 'lucide-react';
import { Link } from 'wouter';

export function Pillars() {
  const { content } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  if (!content) return null;

  const pillars = [
    {
      id: 'kosi',
      icon: Gift,
      title: content.pillars.kosi.title,
      description: content.pillars.kosi.description,
      cta: content.pillars.kosi.cta,
      link: '/kosi',
    },
    {
      id: 'metviton',
      icon: Users,
      title: content.pillars.metviton.title,
      description: content.pillars.metviton.description,
      cta: content.pillars.metviton.cta,
      link: '/metviton',
    },
    {
      id: 'portfolio',
      icon: Briefcase,
      title: content.pillars.portfolio.title,
      description: content.pillars.portfolio.description,
      cta: content.pillars.portfolio.cta,
      link: '#portfolio',
    },
  ];

  const handlePortfolioClick = () => {
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

  return (
    <section 
      id="pillars" 
      className="py-20 md:py-32 px-6"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4" data-testid="text-pillars-title">
            {content.pillars.title}
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-pillars-subtitle">
            {content.pillars.subtitle}
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isPorfolio = pillar.id === 'portfolio';
            
            return (
              <Card 
                key={pillar.id} 
                className="flex flex-col hover-elevate transition-all duration-300"
                data-testid={`card-pillar-${pillar.id}`}
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-md w-fit">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl" data-testid={`text-pillar-title-${pillar.id}`}>
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-pillar-description-${pillar.id}`}>
                    {pillar.description}
                  </p>
                </CardContent>
                <CardFooter>
                  {isPorfolio ? (
                    <Button 
                      className="w-full" 
                      onClick={handlePortfolioClick}
                      data-testid={`button-pillar-cta-${pillar.id}`}
                    >
                      {pillar.cta}
                    </Button>
                  ) : (
                    <Button 
                      asChild 
                      className="w-full"
                      data-testid={`button-pillar-cta-${pillar.id}`}
                    >
                      <Link href={pillar.link}>{pillar.cta}</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
