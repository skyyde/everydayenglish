import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:'/everydayenglish/',plugins:[react(),tailwindcss(),VitePWA({registerType:'prompt',manifest:{name:'Everyday English',short_name:'Everyday English',description:'English practice for everyday life',theme_color:'#FAFAF9',background_color:'#FAFAF9',display:'standalone',start_url:'/everydayenglish/',scope:'/everydayenglish/',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,ico,json}']}})]});
