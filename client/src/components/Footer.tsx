import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { content } = useLanguage();

  if (!content) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-card border-t border-card-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2" data-testid="text-footer-company">
              {content.hero.company}
            </h3>
            <p className="text-muted-foreground flex items-center gap-2" data-testid="text-footer-tagline">
              {content.footer.tagline}
              <span className="inline-block text-sage">🇬🇪</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-about"
              >
                {content.footer.links.about}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-portfolio"
              >
                {content.footer.links.portfolio}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-contact"
              >
                {content.footer.links.contact}
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              {content.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
