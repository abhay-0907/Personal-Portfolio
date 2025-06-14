import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  darkMode: ['selector','[data-mode="dark"]'],
  plugins: [react()],
   server: {
    host: '0.0.0.0',
    port: 5173, // or any other available port
  },
})
