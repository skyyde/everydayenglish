import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./e2e',timeout:30000,use:{baseURL:'http://127.0.0.1:4174/everydayenglish/',browserName:'chromium',trace:'retain-on-failure'},webServer:{command:'npm run preview -- --host 127.0.0.1 --port 4174',url:'http://127.0.0.1:4174/everydayenglish/',reuseExistingServer:false,timeout:30000}});
