// API Configuration and utilities
import { getApiUrl } from '@/config/env';

// API Response wrapper - updated to match actual API structure
export interface ApiResponse<T = unknown> {
  key: string;
  msg: string;
  data: T;
}

// API Error class
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: Response
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic API fetch function
export const apiFetch = async <T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const url = getApiUrl(endpoint);
  
  const defaultOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      ...options.headers,
    },
    mode: 'cors',
    credentials: 'omit',
    ...options,
  };

  try {
    console.log('Making API request to:', url);
    
    const response = await fetch(url, defaultOptions);

    console.log('API Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      
      throw new ApiError(
        `HTTP error! status: ${response.status} - ${errorText}`,
        response.status,
        response
      );
    }

    const data = await response.json();
    console.log('API Success Response:', data);
    return data;
  } catch (error) {
    console.error('API Fetch Error:', error);
    
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new ApiError(
        'Network error: Unable to connect to server. Please check your internet connection.',
        0
      );
    }
    
    throw new ApiError(
      error instanceof Error ? error.message : 'Unknown error occurred',
      0
    );
  }
};

// Specific API functions
export const homeApi = {
  getHomeData: () => apiFetch<import('@/types/api').HomeApiData>('/api/home', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const aboutApi = {
  getAboutData: () => apiFetch<import('@/types/api').AboutApiData>('/api/about', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const contactsApi = {
  getContactsData: () => apiFetch<import('@/types/api').ContactsApiData>('/api/contacts', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const socialsApi = {
  getSocialsData: () => apiFetch<import('@/types/api').SocialsApiData>('/api/socials', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const storyValuesApi = {
  getStoryValuesData: () => apiFetch<import('@/types/api').StoryValuesApiData>('/api/story-values', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const statsApi = {
  getStatsData: () => apiFetch<import('@/types/api').StatsApiData>('/api/stats', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const stadiumsApi = {
  getStadiumsData: () => apiFetch<import('@/types/api').StadiumsApiData>('/api/stadiums', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
  getStadiumDetail: (id: string | number) => apiFetch<import('@/types/api').StadiumDetailApiData>(`/api/stadiums/${id}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
  getTimeSlots: (id: string | number, day: string) => apiFetch<import('@/types/api').TimeSlotsApiData>(`/api/stadiums/${id}/time-slots?day=${day}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const blogApi = {
  getBlogArticles: (page: number = 1) => apiFetch<import('@/types/api').BlogArticlesApiData>(`/api/blog-articles${page > 1 ? `?page=${page}` : ''}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
  getBlogArticleDetail: (id: string | number) => apiFetch<import('@/types/api').BlogPost>(`/api/blog-articles/${id}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const termsApi = {
  getTermsData: () => apiFetch<string>('/api/terms', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const privacyApi = {
  getPrivacyData: () => apiFetch<string>('/api/privacy', {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const newsApi = {
  getNews: (page: number = 1) => apiFetch<import('@/types/api').NewsApiData>(`/api/news${page > 1 ? `?page=${page}` : ''}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
  getNewsDetail: (id: string | number) => apiFetch<import('@/types/api').NewsItem>(`/api/news/${id}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const eventsApi = {
  getEvents: (page: number = 1) => apiFetch<import('@/types/api').EventsApiData>(`/api/events${page > 1 ? `?page=${page}` : ''}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
  getEventDetail: (id: string | number) => apiFetch<import('@/types/api').Event>(`/api/events/${id}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

export const eventAndNewsApi = {
  getEventAndNews: (page: number = 1) => apiFetch<import('@/types/api').EventAndNewsApiData>(`/api/event-and-news${page > 1 ? `?page=${page}` : ''}`, {
    headers: {
      'Origin': 'https://backend.hajez.4hoste.com',
    }
  }),
};

// Export the main API object
export const api = {
  home: homeApi,
  about: aboutApi,
  contacts: contactsApi,
  socials: socialsApi,
  storyValues: storyValuesApi,
  stats: statsApi,
  stadiums: stadiumsApi,
  blog: blogApi,
  terms: termsApi,
  privacy: privacyApi,
  news: newsApi,
  events: eventsApi,
  eventAndNews: eventAndNewsApi,
};
