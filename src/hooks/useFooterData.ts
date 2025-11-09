import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { AboutApiResponse, ContactsApiResponse, SocialsApiResponse, StoryValuesApiResponse, StatsApiResponse, StadiumsApiResponse, StadiumDetailApiResponse, TimeSlotsApiResponse, BlogArticlesApiResponse, ApiResponse, BlogPost, NewsApiResponse, EventsApiResponse, EventAndNewsApiResponse } from '@/types/api';

// Hook to use about data
export const useAboutData = () => {
  return useQuery<AboutApiResponse>({
    queryKey: ['about'],
    queryFn: () => api.about.getAboutData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use contacts data
export const useContactsData = () => {
  return useQuery<ContactsApiResponse>({
    queryKey: ['contacts'],
    queryFn: () => api.contacts.getContactsData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use socials data
export const useSocialsData = () => {
  return useQuery<SocialsApiResponse>({
    queryKey: ['socials'],
    queryFn: () => api.socials.getSocialsData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use story values data
export const useStoryValuesData = () => {
  return useQuery<StoryValuesApiResponse>({
    queryKey: ['story-values'],
    queryFn: () => api.storyValues.getStoryValuesData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use stats data
export const useStatsData = () => {
  return useQuery<StatsApiResponse>({
    queryKey: ['stats'],
    queryFn: () => api.stats.getStatsData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use stadiums data
export const useStadiumsData = () => {
  return useQuery<StadiumsApiResponse>({
    queryKey: ['stadiums'],
    queryFn: () => api.stadiums.getStadiumsData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use stadium detail data
export const useStadiumDetailData = (id: string | number) => {
  return useQuery<StadiumDetailApiResponse>({
    queryKey: ['stadium-detail', id],
    queryFn: () => api.stadiums.getStadiumDetail(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!id, // Only run query if id is provided
  });
};

// Hook to use time slots data
export const useTimeSlotsData = (id: string | number, day: string) => {
  return useQuery<TimeSlotsApiResponse>({
    queryKey: ['time-slots', id, day],
    queryFn: () => api.stadiums.getTimeSlots(id, day),
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!id && !!day, // Only run query if both id and day are provided
  });
};

// Hook to use blog articles data
export const useBlogArticlesData = (page: number = 1) => {
  return useQuery<BlogArticlesApiResponse>({
    queryKey: ['blog-articles', page],
    queryFn: () => api.blog.getBlogArticles(page),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use blog article detail data
export const useBlogArticleDetailData = (id: string | number) => {
  return useQuery<ApiResponse<BlogPost>>({
    queryKey: ['blog-article-detail', id],
    queryFn: () => api.blog.getBlogArticleDetail(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!id, // Only run query if id is provided
  });
};

// Hook to use terms data
export const useTermsData = () => {
  return useQuery<ApiResponse<string>>({
    queryKey: ['terms'],
    queryFn: () => api.terms.getTermsData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use privacy data
export const usePrivacyData = () => {
  return useQuery<ApiResponse<string>>({
    queryKey: ['privacy'],
    queryFn: () => api.privacy.getPrivacyData(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: (failureCount, error) => {
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use news data
export const useNewsData = (page: number = 1) => {
  return useQuery<NewsApiResponse>({
    queryKey: ['news', page],
    queryFn: () => api.news.getNews(page),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use news detail data
export const useNewsDetailData = (id: string | number) => {
  return useQuery<ApiResponse<import('@/types/api').NewsItem>>({
    queryKey: ['news-detail', id],
    queryFn: () => api.news.getNewsDetail(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!id, // Only run query if id is provided
  });
};

// Hook to use events data
export const useEventsData = (page: number = 1) => {
  return useQuery<EventsApiResponse>({
    queryKey: ['events', page],
    queryFn: () => api.events.getEvents(page),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

// Hook to use event detail data
export const useEventDetailData = (id: string | number) => {
  return useQuery<ApiResponse<import('@/types/api').Event>>({
    queryKey: ['event-detail', id],
    queryFn: () => api.events.getEventDetail(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on network errors
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!id, // Only run query if id is provided
  });
};

// Hook to use combined event and news data
export const useEventAndNewsData = (page: number = 1) => {
  return useQuery<EventAndNewsApiResponse>({
    queryKey: ['event-and-news', page],
    queryFn: () => api.eventAndNews.getEventAndNews(page),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: (failureCount, error) => {
      if (error instanceof Error && error.message.includes('Network error')) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};
