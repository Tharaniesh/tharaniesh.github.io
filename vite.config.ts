import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/PortFolio/',
  build: {
    sourcemap: false,
    target: 'es2020'
  }
});
