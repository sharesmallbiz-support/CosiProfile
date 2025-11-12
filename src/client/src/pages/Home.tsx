import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Videos } from '@/components/Videos';
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
        <section id="intro" className="py-20 md:py-32 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Nini Chaladze
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A conceptual strategist of the visual future of brands. Her work unites brand vision development, visual strategy, and creative education — shaping a culture where beauty serves consciousness and ideas evolve into systems.
            </p>
            <p className="text-lg md:text-xl text-primary italic font-medium">
              "I create systems where meaning and aesthetics together build a conscious culture."
            </p>
          </div>
        </section>
        <About />
        <Videos />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
