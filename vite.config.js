import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/f4_crypto/', // Match your repository name
  plugins: [react()],
});
