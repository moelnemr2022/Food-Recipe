import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //  base: "/Food",
  plugins: [react()],
  
  test :{
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/unitTest/setup.js',
  include : ['./src/unitTest/*.test.jsx']}})

