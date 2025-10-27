import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { PortfolioItem } from '@/types/language';

import portfolioImage1 from '@assets/stock_images/handmade_bespoke_gif_b3f3ebb4.jpg';
import portfolioImage2 from '@assets/stock_images/handmade_bespoke_gif_b2742060.jpg';
import portfolioImage3 from '@assets/stock_images/handmade_bespoke_gif_9307335b.jpg';
import portfolioImage4 from '@assets/stock_images/handmade_bespoke_gif_11754104.jpg';
import portfolioImage5 from '@assets/stock_images/handmade_bespoke_gif_bba9cc82.jpg';
import portfolioImage6 from '@assets/stock_images/handmade_bespoke_gif_5754d7b7.jpg';

const portfolioImages = [
  portfolioImage1,
  portfolioImage2,
  portfolioImage3,
  portfolioImage4,
  portfolioImage5,
  portfolioImage6,
];

export function Portfolio() {
  const { content } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; item: PortfolioItem } | null>(null);

  if (!content) return null;

  const filteredItems = activeFilter === 'all' 
    ? content.portfolio.items 
    : content.portfolio.items.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 bg-muted/30" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4" data-testid="text-portfolio-title">
            {content.portfolio.title}
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-portfolio-subtitle">
            {content.portfolio.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['all', 'gifts', 'custom', 'featured'] as const).map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              data-testid={`button-filter-${filter}`}
            >
              {content.portfolio.filters[filter]}
            </Button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage({ src: portfolioImages[index % portfolioImages.length], item })}
              data-testid={`card-portfolio-${item.id}`}
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={portfolioImages[index % portfolioImages.length]}
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-portfolio-${item.id}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-xl font-semibold mb-1" data-testid={`text-portfolio-title-${item.id}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90" data-testid={`text-portfolio-description-${item.id}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0" data-testid="dialog-portfolio-lightbox">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.item.title}
                className="w-full h-auto"
                data-testid="img-lightbox"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2" data-testid="text-lightbox-title">
                  {selectedImage.item.title}
                </h3>
                <p className="text-muted-foreground" data-testid="text-lightbox-description">
                  {selectedImage.item.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
