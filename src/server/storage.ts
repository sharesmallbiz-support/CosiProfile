import { type Product, type InsertProduct, type Event, type InsertEvent } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private events: Map<string, Event>;

  constructor() {
    this.products = new Map();
    this.events = new Map();
    this.seedData();
  }

  private seedData() {
    const sampleProducts: InsertProduct[] = [
      {
        titleEn: "Personalized Photo Frame",
        titleKa: "პერსონალიზებული ფოტო ჩარჩო",
        descriptionEn: "Handcrafted wooden photo frame with custom engraving, perfect for cherished memories.",
        descriptionKa: "ხელნაკეთი ხის ფოტო ჩარჩო პერსონალიზებული გრავირებით, იდეალური ძვირფასი მოგონებებისთვის.",
        price: "45.00",
        category: "frames",
        imageUrl: "/api/placeholder/400/400",
      },
      {
        titleEn: "Custom Gift Box",
        titleKa: "საჩუქრების პერსონალიზებული ყუთი",
        descriptionEn: "Curated gift box with Georgian artisan products, customized to your preferences.",
        descriptionKa: "საჩუქრების შერჩეული ყუთი ქართული ხელოსნების პროდუქტებით, თქვენი სურვილების მიხედვით.",
        price: "85.00",
        category: "boxes",
        imageUrl: "/api/placeholder/400/400",
      },
      {
        titleEn: "Handmade Ceramic Mug",
        titleKa: "ხელნაკეთი კერამიკული ფინჯანი",
        descriptionEn: "Unique ceramic mug crafted by Georgian artisans, with personalized message.",
        descriptionKa: "უნიკალური კერამიკული ფინჯანი ქართველი ხელოსნების მიერ, პერსონალიზებული წარწერით.",
        price: "32.00",
        category: "ceramics",
        imageUrl: "/api/placeholder/400/400",
      },
    ];

    sampleProducts.forEach(product => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });

    const sampleEvents: InsertEvent[] = [
      {
        titleEn: "Business Lunch: Leadership in Tech",
        titleKa: "ბიზნეს ლანჩი: ლიდერობა ტექნოლოგიებში",
        descriptionEn: "Join us for an inspiring business lunch discussing leadership strategies in the tech industry.",
        descriptionKa: "შემოგვიერთდით შთაგონებულ ბიზნეს ლანჩზე, სადაც განვიხილავთ ლიდერობის სტრატეგიებს ტექნოლოგიურ ინდუსტრიაში.",
        date: "2025-11-15",
        location: "Tbilisi, Georgia",
        price: "45.00",
        capacity: 30,
        type: "lunch",
        imageUrl: "/api/placeholder/600/400",
      },
      {
        titleEn: "Networking Event: Women Entrepreneurs",
        titleKa: "ქსელური ღონისძიება: ქალი მეწარმეები",
        descriptionEn: "Connect with ambitious women entrepreneurs and build meaningful professional relationships.",
        descriptionKa: "დაუკავშირდით ამბიციურ ქალ მეწარმეებს და შექმენით მნიშვნელოვანი პროფესიული ურთიერთობები.",
        date: "2025-11-22",
        location: "Tbilisi, Georgia",
        price: "35.00",
        capacity: 50,
        type: "networking",
        imageUrl: "/api/placeholder/600/400",
      },
      {
        titleEn: "Workshop: Personal Branding Strategies",
        titleKa: "სემინარი: პერსონალური ბრენდინგის სტრატეგიები",
        descriptionEn: "Learn how to build and maintain a strong personal brand in today's digital world.",
        descriptionKa: "ისწავლეთ როგორ შექმნათ და შეინარჩუნოთ ძლიერი პერსონალური ბრენდი დღევანდელ დიჯიტალურ სამყაროში.",
        date: "2025-12-05",
        location: "Tbilisi, Georgia",
        price: "75.00",
        capacity: 25,
        type: "workshop",
        imageUrl: "/api/placeholder/600/400",
      },
    ];

    sampleEvents.forEach(event => {
      const id = randomUUID();
      this.events.set(id, { ...event, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id };
    this.events.set(id, event);
    return event;
  }
}

export const storage = new MemStorage();
