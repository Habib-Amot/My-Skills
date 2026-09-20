import path from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, "src/components")
    }
  },
  server:{
    proxy:{
      "/app/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: false
      }
    }
  }
})
