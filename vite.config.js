import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HydRenal/', // <--- ADD THIS (use your repo name)
})