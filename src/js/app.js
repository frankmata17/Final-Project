import { fetchTop100Movies } from './api.js';
import { renderMovies } from './ui.js';
import 'path-browserify';
import 'os-browserify/browser';
import 'crypto-browserify';
import 'vm-browserify';
import 'buffer';
import 'stream-browserify';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const movies = await fetchTop100Movies();
        renderMovies(movies);
    } catch (error) {
        console.error('Error initializing application:', error);
        const moviesContainer = document.getElementById('movies-container');
        moviesContainer.innerHTML = '<p>Unable to load movies at this time. Please try again later.</p>';
    }
});
