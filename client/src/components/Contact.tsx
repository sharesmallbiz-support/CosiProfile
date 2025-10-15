import { useState } from 'react';
import { Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { content } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!content) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4" data-testid="text-contact-title">
            {content.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-contact-subtitle">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={content.contact.form.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={content.contact.form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Textarea
                  placeholder={content.contact.form.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? 'Sending...' : content.contact.form.submit}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6" data-testid="text-social-title">
                {content.contact.social.title}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/ni.chaladze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-all group"
                  data-testid="link-instagram"
                >
                  <div className="bg-primary/10 p-2 rounded-md group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">{content.contact.social.instagram}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nini-chaladze-425819178/?originalSubdomain=ge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-all group"
                  data-testid="link-linkedin"
                >
                  <div className="bg-sage/10 p-2 rounded-md group-hover:bg-sage/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-sage" />
                  </div>
                  <span className="font-medium">{content.contact.social.linkedin}</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC5ew6KjGzWdBDp6eRB9O2zA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-all group"
                  data-testid="link-youtube"
                >
                  <div className="bg-primary/10 p-2 rounded-md group-hover:bg-primary/20 transition-colors">
                    <Youtube className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">{content.contact.social.youtube}</span>
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="font-medium" data-testid="text-location">
                  {content.contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
