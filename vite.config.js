import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path  from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@http": path.resolve(__dirname, "./src/axios"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  }
})

