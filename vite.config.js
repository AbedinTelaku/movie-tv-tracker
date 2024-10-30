import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Lejon qasje nga pajisjet e tjera në rrjet
    port: 3000, // Ndrysho portën në 3000 (ose çfarëdo tjetër që dëshiron)
  },
})
