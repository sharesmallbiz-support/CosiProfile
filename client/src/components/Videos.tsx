import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/channel/UC5ew6KjGzWdBDp6eRB9O2zA';

// Featured video IDs - update these with your latest videos
const FEATURED_VIDEOS = [
  'YOUR_VIDEO_ID_1', // Replace with actual video IDs
  'YOUR_VIDEO_ID_2',
  'YOUR_VIDEO_ID_3',
];

export function Videos() {
  const { content } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  if (!content) return null;

  return (
    <section id="videos" className="py-20 md:py-32 px-6 bg-muted/30" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4" data-testid="text-videos-title">
            {content.videos.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-videos-subtitle">
            {content.videos.subtitle}
          </p>
        </div>

        {/* YouTube Channel Embed */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="aspect-video rounded-lg overflow-hidden bg-background shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed?listType=user_uploads&list=UC5ew6KjGzWdBDp6eRB9O2zA`}
              title="YouTube Channel Videos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="iframe-youtube-channel"
            />
          </div>
        </div>

        {/* View Channel Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2"
            data-testid="button-view-channel"
          >
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.videos.channelLink}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
