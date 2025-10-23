export interface PortfolioItem {
  id: number;
  title: string;
  category: 'kosi' | 'metviton' | 'projects';
  description: string;
}

export interface LanguageContent {
  nav: {
    home: string;
    kosi: string;
    metviton: string;
    portfolio: string;
    about: string;
    contact: string;
  };
  hero: {
    company: string;
    tagline: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    title: string;
    description: string;
  };
  pillars: {
    title: string;
    subtitle: string;
    kosi: {
      title: string;
      description: string;
      cta: string;
    };
    metviton: {
      title: string;
      description: string;
      cta: string;
    };
    portfolio: {
      title: string;
      description: string;
      cta: string;
    };
  };
  about: {
    title: string;
    bio: string;
    mission: string;
  };
  kosiPage: {
    title: string;
    subtitle: string;
    description: string;
    categories: {
      all: string;
      frames: string;
      boxes: string;
      ceramics: string;
    };
    cta: string;
  };
  metvitonPage: {
    title: string;
    subtitle: string;
    description: string;
    types: {
      all: string;
      lunch: string;
      networking: string;
      workshop: string;
    };
    cta: string;
    details: {
      date: string;
      location: string;
      price: string;
      capacity: string;
      spotsLeft: string;
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      kosi: string;
      metviton: string;
      projects: string;
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
      kosi: string;
      metviton: string;
      about: string;
      contact: string;
    };
  };
}

export type Language = 'en' | 'ka';
