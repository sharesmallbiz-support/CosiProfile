export interface PortfolioItem {
  id: number;
  title: string;
  category: 'gifts' | 'custom' | 'featured';
  description: string;
}

export interface LanguageContent {
  nav: {
    about: string;
    videos: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    name: string;
    tagline: string;
    company: string;
    intro: string;
    cta: string;
  };
  about: {
    title: string;
    bio: string;
    mission: string;
  };
  videos: {
    title: string;
    subtitle: string;
    channelLink: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      gifts: string;
      custom: string;
      featured: string;
    };
    items: PortfolioItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    social: {
      title: string;
      instagram: string;
      linkedin: string;
      youtube: string;
    };
    location: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    links: {
      about: string;
      portfolio: string;
      contact: string;
    };
  };
}

export type Language = 'en' | 'ka';
