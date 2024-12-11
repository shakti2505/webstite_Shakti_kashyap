import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the server accessible on your local network
    port: 3000,      // You can change the port if needed
  },
})

