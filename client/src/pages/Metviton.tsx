import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, DollarSign } from 'lucide-react';
import type { Event } from '@shared/schema';

export default function Metviton() {
  const { content, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  if (!content) return null;

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'ka-GE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6" data-testid="text-metviton-title">
              {content.metvitonPage.title}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4" data-testid="text-metviton-subtitle">
              {content.metvitonPage.subtitle}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-metviton-description">
              {content.metvitonPage.description}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {(['all', 'lunch', 'networking', 'workshop'] as const).map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter)}
                  data-testid={`button-filter-${filter}`}
                >
                  {content.metvitonPage.types[filter]}
                </Button>
              ))}
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="aspect-video bg-muted rounded-t-md" />
                    <CardHeader>
                      <div className="h-6 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-1/2 mt-2" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="hover-elevate transition-all duration-300" data-testid={`card-event-${event.id}`}>
                    <div 
                      className="aspect-video bg-muted/50 rounded-t-md flex items-center justify-center"
                      data-testid={`img-event-${event.id}`}
                    >
                      <Users className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl" data-testid={`text-event-title-${event.id}`}>
                        {language === 'en' ? event.titleEn : event.titleKa}
                      </CardTitle>
                      <CardDescription data-testid={`text-event-description-${event.id}`}>
                        {language === 'en' ? event.descriptionEn : event.descriptionKa}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span data-testid={`text-event-date-${event.id}`}>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span data-testid={`text-event-location-${event.id}`}>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span data-testid={`text-event-price-${event.id}`}>${event.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span data-testid={`text-event-capacity-${event.id}`}>
                          {event.capacity} {content.metvitonPage.details.spotsLeft}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" data-testid={`button-event-cta-${event.id}`}>
                        {content.metvitonPage.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {!isLoading && filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
