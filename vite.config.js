import { defineConfig } from 'vite';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  root: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/index.html'),
        favorites: path.resolve(__dirname, 'public/favorites.html'),
        movieDetails: path.resolve(__dirname, 'public/movie-details.html')
      }
    }
  },
  server: {
    port: 9000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/js')
    }
  },
  define: {
    'process.env': {
      RAPIDAPI_KEY: JSON.stringify(process.env.RAPIDAPI_KEY)
    }
  }
});
