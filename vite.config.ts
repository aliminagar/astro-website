import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/astro-website/",  // 👈 Add your repository name here
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
