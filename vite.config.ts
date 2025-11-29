import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    // port: 8080, // Commented out to use default Vite port for Netlify dev compatibility
  },
  plugins: [react()],
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
          ui: [
            'framer-motion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-toast'
          ],
          utils: [
            'zod',
            '@tanstack/react-query',
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ],
        },
      },
    },
  },
}));
