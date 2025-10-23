import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@shared/schema';

export default function Kosi() {
  const { content, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  if (!content) return null;

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6" data-testid="text-kosi-title">
              {content.kosiPage.title}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4" data-testid="text-kosi-subtitle">
              {content.kosiPage.subtitle}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-kosi-description">
              {content.kosiPage.description}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {(['all', 'frames', 'boxes', 'ceramics'] as const).map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter)}
                  data-testid={`button-filter-${filter}`}
                >
                  {content.kosiPage.categories[filter]}
                </Button>
              ))}
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="aspect-square bg-muted rounded-t-md" />
                    <CardHeader>
                      <div className="h-6 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-1/2 mt-2" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover-elevate transition-all duration-300" data-testid={`card-product-${product.id}`}>
                    <div 
                      className="aspect-square bg-muted/50 rounded-t-md flex items-center justify-center"
                      data-testid={`img-product-${product.id}`}
                    >
                      <span className="text-6xl">🎁</span>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl" data-testid={`text-product-title-${product.id}`}>
                        {language === 'en' ? product.titleEn : product.titleKa}
                      </CardTitle>
                      <CardDescription className="text-2xl font-bold text-primary" data-testid={`text-product-price-${product.id}`}>
                        ${product.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground" data-testid={`text-product-description-${product.id}`}>
                        {language === 'en' ? product.descriptionEn : product.descriptionKa}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" data-testid={`button-product-cta-${product.id}`}>
                        {content.kosiPage.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {!isLoading && filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
