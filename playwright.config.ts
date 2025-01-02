import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 2,
  reporter: 'html',
  use: {
    baseURL: 'https://demo.quartexcollections.com/', // This is applictaion base URL
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },
});

