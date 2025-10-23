import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import { Link, useLocation } from 'wouter';

export function Header() {
  const { language, setLanguage, content } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  if (!content) return null;

  const isHomePage = location === '/' || location === '/~/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-serif text-2xl font-bold hover-elevate active-elevate-2 rounded-md px-2 py-1 transition-colors"
              data-testid="button-logo"
            >
              {content.hero.company}
            </button>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  data-testid="link-about"
                >
                  {content.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  data-testid="link-portfolio"
                >
                  {content.nav.portfolio}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  data-testid="link-contact"
                >
                  {content.nav.contact}
                </button>
              </>
            ) : (
              <>
                <Link href="/">
                  <button className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-home">
                    {content.nav.home}
                  </button>
                </Link>
                <Link href="/kosi">
                  <button className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-kosi">
                    {content.nav.kosi}
                  </button>
                </Link>
                <Link href="/metviton">
                  <button className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-metviton">
                    {content.nav.metviton}
                  </button>
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ka' : 'en')}
              className="font-medium"
              data-testid="button-language-toggle"
            >
              {language === 'en' ? 'KA' : 'EN'}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              data-testid="button-theme-toggle"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  data-testid="link-about-mobile"
                >
                  {content.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  data-testid="link-portfolio-mobile"
                >
                  {content.nav.portfolio}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  data-testid="link-contact-mobile"
                >
                  {content.nav.contact}
                </button>
              </>
            ) : (
              <>
                <Link href="/">
                  <button className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 w-full" data-testid="link-home-mobile">
                    {content.nav.home}
                  </button>
                </Link>
                <Link href="/kosi">
                  <button className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 w-full" data-testid="link-kosi-mobile">
                    {content.nav.kosi}
                  </button>
                </Link>
                <Link href="/metviton">
                  <button className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 w-full" data-testid="link-metviton-mobile">
                    {content.nav.metviton}
                  </button>
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
