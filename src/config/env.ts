// Environment configuration
export const config = {
  baseUrl: import.meta.env.DEV ? '' : (import.meta.env.VITE_BASE_URL?.replace(/\/$/, '') || 'https://backend.hajez.4hoste.com'),
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://backend.hajez.4hoste.com',
  appName: import.meta.env.VITE_APP_NAME || 'Haddaf',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const;

// Helper function to get full URL
export const getFullUrl = (path: string) => {
  return `${config.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

// Helper function to get API URL
export const getApiUrl = (endpoint: string) => {
  // Always use full API URL
  return `${config.apiBaseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
};
