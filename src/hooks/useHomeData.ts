import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { HomeApiResponse } from '@/types/api';

// Hook to use home data
export const useHomeData = () => {
  return useQuery<HomeApiResponse>({
    queryKey: ['home'],
    queryFn: () => api.home.getHomeData(),
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
