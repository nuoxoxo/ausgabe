import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/ausgabe/',
    /*
    base: '/',
    */
  }
  /*
  if (command !== 'serve') {
    config.base = '/ausgabe'
  }
  */

  return config
})