import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  base: './',

  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        imgmod: './src/imgmod.html',
        ags: './src/ags.html',
        timesheet: './src/timesheet.html',
        research2: './src/research2.html',
        research1: './src/research1.html',
        coach: './src/coach.html'
      }
    }
  }
});

