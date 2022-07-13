import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const port = 3000
  return {
    // dev specific config
    plugins: [react()],
    server: {
      port
    }
  }
})
