import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

let buildVersion = '1.0.0';
let buildDate = new Date().toISOString().split('T')[0];

try {
  // @ts-ignore
  if (typeof __BUILD_VERSION__ !== 'undefined') buildVersion = __BUILD_VERSION__;
  // @ts-ignore
  if (typeof __BUILD_DATE__ !== 'undefined') buildDate = __BUILD_DATE__;
} catch (e) {
  // Use defaults in development
}

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
              <span className="inline-block">🇬🇪</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/kosi">
                <button
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-kosi"
                >
                  {content.footer.links.kosi}
                </button>
              </Link>
              <Link href="/metviton">
                <button
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-metviton"
                >
                  {content.footer.links.metviton}
                </button>
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-about"
              >
                {content.footer.links.about}
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
        
        <div className="border-t border-card-border pt-6 mt-6">
          <p className="text-xs text-muted-foreground text-center" data-testid="text-footer-build-info">
            v{buildVersion} • Built on {buildDate}
          </p>
        </div>
      </div>
    </footer>
  );
}
