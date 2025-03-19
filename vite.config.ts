import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './',  // Ensures relative path for assets after deployment
  build: {
    assetsDir: 'assets', // Explicitly sets the assets directory
  },
});
