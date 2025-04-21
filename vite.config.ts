import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@views': path.resolve(__dirname, 'src/views'),
    }
  },
  css:{
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/assets/style/common.less";`,
        javascriptEnabled: true,
      },
    },
  },
  server:{
    host:'0.0.0.0',
    port:9529,
    open:true
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:3000',
    //     changeOrigin:true,
    //     rewrite:path=>path.replace(/^\/api/,'')
    //   }
    // }
  }
})
