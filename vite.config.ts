import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import polyFills from 'vite-plugin-node-stdlib-browser';
import nodePolyfills from 'rollup-plugin-polyfill-node';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()]
    }
  },
  plugins: [react(), polyFills()]
});
