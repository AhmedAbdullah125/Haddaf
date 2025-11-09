export type PitchId = string;

export interface Pitch {
  id: PitchId;
  name: string;           // "Haddaf 1" .. "Haddaf 4"
  hourPrice: number;      // SAR/hour
  photos: string[];
  amenities: string[];    // ["إضاءة", "غرف تبديل", ...]
  weeklyTemplate: Record<string, { from: string; to: string }[]>; // per weekday slots
  rating?: number;
  visibleToPublic?: boolean; // default true
}

export interface Academy {
  id: string;
  name: string;                 // برشلونة / الزمالك / الأهلي / الإنتر
  logo?: string;
  linkedPitchId: PitchId;       // one of Haddaf 1..4
  scheduleTemplate: Record<string, { from: string; to: string }[]>;
  description?: string;
}

export interface Coach {
  id: string;
  fullName: string;
  photo: string;
  bio?: string;
  specialties: string[];
  yearsOfExperience: number;
  rating?: number;
  academies: string[];          // academy ids the coach serves
  subscriptionPrice: number;    // SAR / month (per academy)
  visibleToPublic?: boolean;    // default true (members see all anyway)
}

export interface AcademyMember {
  id: string;
  fullName: string;
  age: number;
  email: string;
  phone: string;
  academyId: string;
  pitchId: PitchId;
  selectedCoachId: string;
  planMonthStart: string;       // ISO
  planMonthEnd: string;         // ISO (+30 days)
  qrSvg: string;
  attendance: string[];         // ISO dates
  nextSession?: string;         // ISO datetime
}

export interface IndividualBooking {
  id: string;
  pitchId: PitchId;
  date: string;                 // ISO date
  timeSlot: { from: string; to: string };
  playersCount: number;         // for QR sharing
  amount: number;
  status: "pending" | "paid" | "canceled";
  paymentRef?: string;
  qrSvg?: string;
}

export interface StoreProduct {
  id: string;
  title: string;
  category: string;             // كرات/أحذية/إكسسوارات…
  price: number;                // SAR
  images: string[];
  stock: number;
  tags?: string[];
  isFeatured?: boolean;
  fulfill: "pickup" | "delivery" | "both"; // NEW
  visibleToPublic?: boolean;    // default true
}

export interface News {
  id: string;
  title: string;
  summary: string;
  content: string;
  cover: string;
  date: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  cover: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover: string;
  tags: string[];
  author: string;
  date: string;
}

export interface ChairmanMessage {
  title: string;
  content: string;
  portrait: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
}
