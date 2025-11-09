export interface Academy {
  id: string;
  name: string;
  linkedPitchId: string;
  scheduleTemplate: string;
  description: string;
  logo: string;
}

export interface Stadium {
  id: string;
  name: string;
  address: string;
  pricePerHour: number;
  amenities: string[];
  photos: string[];
  weeklyTemplate: WeeklyAvailability;
  rating: number;
  visibleToPublic?: boolean;
}

export interface WeeklyAvailability {
  [key: string]: TimeSlot[]; // e.g., "السبت": [{start: "16:00", end: "17:00", available: true}, ...]
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

export interface Coach {
  id: string;
  fullName: string;
  nationality: string;
  photo: string;
  bio: string;
  specialties: string[];
  yearsOfExperience: number;
  rating: number;
  ageGroupMin: number;
  ageGroupMax: number;
  academyIds: string[];
  phone: string;
  subscriptionPrice?: number;
  visibleToPublic?: boolean;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  currency: string;
  brand: string;
  stock: number;
  images: string[];
  tags: string[];
  isFeatured: boolean;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface Booking {
  id: string;
  type: "individual" | "academy";
  stadium: string;
  sport: string;
  date: string;
  timeSlot: string;
  coach?: string;
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  playersCount: number;
  amount: number;
  discount?: number;
  status: "pending" | "paid" | "canceled";
  paymentRef?: string;
  qrCodeSvg?: string;
  createdAt: string;
}

export interface AcademyMember {
  id: string;
  fullName: string;
  age: number;
  email: string;
  phone: string;
  academyId: string;
  selectedCoach: string;
  homeStadium: string;
  planMonthStart: string;
  planMonthEnd: string;
  qrCodeSvg?: string;
  status: "active" | "expired";
}

export interface AcademyProduct {
  id: string;
  title: string;
  category: string;
  price: number;
  images: string[];
  stock: number;
  tags: string[];
  isFeatured: boolean;
  pickupLocation: string;
  visibleToPublic?: boolean;
}

export interface MemberOrder {
  id: string;
  memberId: string;
  items: { productId: string; qty: number; price: number }[];
  total: number;
  status: "pending" | "paid";
  pickupOn: string;
  paymentRef?: string;
}

export interface CommercialBookingRequest {
  id: string;
  startMonthDate: string;
  durationMonths: number;
  purposeType: "أكاديمية" | "مدرسة" | "شركة" | "عائلة" | "أخرى";
  purposeNotes: string;
  expectedAttendees: number;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  createdAt: string;
  ticketNo: string;
  status: "received" | "in_review" | "closed";
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
