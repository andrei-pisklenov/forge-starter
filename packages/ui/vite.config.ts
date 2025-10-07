import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

/* https://vitejs.dev/config/ */
export default defineConfig({
  base: '',
  plugins: [react(), eslint(), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  build: {
    outDir: './build',
  },
  server: {
    port: 3003,
  },
});
