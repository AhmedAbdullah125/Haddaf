// API Types based on actual response structure
export interface ApiResponse<T = unknown> {
  key: string;
  msg: string;
  data: T;
}

// Home API specific types
export interface Stadium {
  id: number;
  image: string;
  name: string;
  price_per_hour: string;
  currency: string;
  rates_avg: number;
  rates_count: number;
}

export interface Coach {
  id: number;
  image: string;
  name: string;
  description: string;
  phone: string;
  country_code: string;
  full_phone: string;
  experience_years: number;
  rates_avg: number;
  rates_count: number;
  price_per_month: number;
  currency: string;
}

export interface Academy {
  id: number;
  name: string;
  program_name: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  author_name: string;
  publish_date: string;
  status: string;
  status_text: string;
  created_at: string;
  categories: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  activity_date: string | null;
  type: string;
  type_text: string;
  created_at: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  activity_date: string;
  type: string;
  type_text: string;
  created_at: string;
  lat: number;
  lng: number;
  map_desc: string;
}

export interface HomeApiData {
  // Welcome Section
  welcome_title: string;
  welcome_description: string;
  welcome_image: string;
  
  // Stadiums Section
  stadiums_section_title: string;
  stadiums_section_description: string;
  stadiums: Stadium[];
  
  // Coaches Section
  coaches_section_title: string;
  coaches_section_description: string;
  coaches: Coach[];
  
  // Academies Section
  academies_section_title: string;
  academies_section_description: string;
  academies: Academy[];
  
  // Blog Section
  blog_section_title: string;
  blog_section_description: string;
  blogs: BlogPost[];
  
  // News and Events Section
  news_and_events_section_title: string;
  news_and_events_section_description: string;
  news: NewsItem[];
  events: Event[];
  
  // Board Message Section
  board_message_image: string;
  board_message_title: string;
  board_message_description: string;
  
  // Partners Section
  parteners: string[];
}

export type HomeApiResponse = ApiResponse<HomeApiData>;

// About API Types
export type AboutApiData = string; // About data is just a string description

export type AboutApiResponse = ApiResponse<AboutApiData>;

// Contacts API Types
export interface ContactsApiData {
  email: string;
  whatsapp: string;
  address: string;
}

export type ContactsApiResponse = ApiResponse<ContactsApiData>;

// Socials API Types
export interface SocialMedia {
  link: string;
  name: string;
  icon: string;
}

export type SocialsApiData = SocialMedia[]; // Socials data is an array of social media

export type SocialsApiResponse = ApiResponse<SocialsApiData>;

// Story Values API Types
export interface Value {
  title: string;
  description: string;
}

export interface Story {
  title: string;
  description: string;
}

export interface StoryValuesApiData {
  story: Story;
  values: Value[];
}

export type StoryValuesApiResponse = ApiResponse<StoryValuesApiData>;

// Stats API Types
export interface StatsApiData {
  successful_bookings: string;
  professional_coaches: string;
  sports_stadiums: string;
}

export type StatsApiResponse = ApiResponse<StatsApiData>;

// Stadiums API Types
export interface StadiumsPagination {
  total_items: number;
  count_items: number;
  per_page: number;
  total_pages: number;
  current_page: number;
  next_page_url: string;
  perv_page_url: string;
}

export interface StadiumsApiData {
  data: Stadium[];
  pagination: StadiumsPagination;
}

export type StadiumsApiResponse = ApiResponse<StadiumsApiData>;

// Stadium Detail API Types
export interface WorkDay {
  key: string;
  value: string;
}

export interface StadiumDetailApiData {
  id: number;
  image: string;
  name: string;
  description: string;
  price_per_hour: string;
  currency: string;
  rates_avg: number;
  rates_count: number;
  features: string[];
  lat: number;
  lng: number;
  map_desc: string;
  work_days: WorkDay[];
}

export type StadiumDetailApiResponse = ApiResponse<StadiumDetailApiData>;

// Time Slots API Types
export interface TimeSlot {
  from_time: string;
  to_time: string;
}

export type TimeSlotsApiData = TimeSlot[];

export type TimeSlotsApiResponse = ApiResponse<TimeSlotsApiData>;

// Blog Articles API Types
export interface BlogArticlesPagination {
  total_items: number;
  count_items: number;
  per_page: number;
  total_pages: number;
  current_page: number;
  next_page_url: string;
  perv_page_url: string;
}

export interface BlogArticlesApiData {
  data: BlogPost[];
  pagination: BlogArticlesPagination;
}

export type BlogArticlesApiResponse = ApiResponse<BlogArticlesApiData>;

// News API Types
export interface NewsPagination {
  total_items: number;
  count_items: number;
  per_page: number;
  total_pages: number;
  current_page: number;
  next_page_url: string;
  perv_page_url: string;
}

export interface NewsApiData {
  data: NewsItem[];
  pagination: NewsPagination;
}

export type NewsApiResponse = ApiResponse<NewsApiData>;

// Events API Types
export interface EventsPagination {
  total_items: number;
  count_items: number;
  per_page: number;
  total_pages: number;
  current_page: number;
  next_page_url: string;
  perv_page_url: string;
}

export interface EventsApiData {
  data: Event[];
  pagination: EventsPagination;
}

export type EventsApiResponse = ApiResponse<EventsApiData>;

// Event and News combined API Types
export interface EventOrNewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  activity_date: string | null;
  type: 'event' | 'news' | string;
  type_text: string;
  created_at: string;
  // optional for events
  lat?: number | null;
  lng?: number | null;
  map_desc?: string | null;
}

export interface EventAndNewsPagination {
  total_items: number;
  count_items: number;
  per_page: number;
  total_pages: number;
  current_page: number;
  next_page_url: string;
  perv_page_url: string;
}

export interface EventAndNewsApiData {
  data: EventOrNewsItem[];
  pagination: EventAndNewsPagination;
}

export type EventAndNewsApiResponse = ApiResponse<EventAndNewsApiData>;
