import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { isLoading, isTransitioning } = useLanguage();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
