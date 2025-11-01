import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
     rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            forms: ['react-hook-form', '@hookform/resolvers'],
            ui: ['framer-motion', '@radix-ui/react-alert-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
            utils: ['zod', '@tanstack/react-query', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          },
       },
     },
   },
}));
