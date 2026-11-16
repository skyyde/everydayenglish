import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:'/everydayenglish/',plugins:[react(),tailwindcss(),VitePWA({registerType:'autoUpdate',manifest:{name:'Everyday English',short_name:'Everyday English',description:'English practice for everyday life',theme_color:'#FAFAF9',background_color:'#FAFAF9',display:'standalone',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,ico,json}']}})]});
