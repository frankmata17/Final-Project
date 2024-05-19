import { fetchTop100Movies } from './api.js';
import { renderMovies, renderFavorites } from './ui.js';
import { getFavorites } from './favorites.js';
import { initializeAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', async () => {
    const movies = await fetchTop100Movies();
    renderMovies(movies);

    document.getElementById('home-link').addEventListener('click', () => renderMovies(movies));
    document.getElementById('favorites-link').addEventListener('click', () => renderFavorites(getFavorites()));
    
    initializeAnimations();
});
