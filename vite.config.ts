import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // base: (mode == 'production' ? 'https://hajez.4hoste.com/' : '/'),
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // يسمح لحد 2MB قبل التحذير
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/index.css";`,
      },
    },
  },
}));
