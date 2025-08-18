import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: "/tienda/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:3000', // Cambia esta URL al backend correspondiente
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Opcional: elimina el prefijo /api
  //     },
  //   },
  // },
})
