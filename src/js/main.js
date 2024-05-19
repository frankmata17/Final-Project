// src/js/main.js
import { fetchTop100Movies } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const moviesContainer = document.getElementById('movies-container');
    const movies = await fetchTop100Movies();

    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            moviesContainer.appendChild(movieCard);
        });
    } else {
        moviesContainer.innerHTML = '<p>Unable to fetch movies at this time. Please try again later.</p>';
    }
});

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const image = document.createElement('img');
    image.src = movie.image;
    image.alt = movie.title;

    const content = document.createElement('div');
    content.className = 'movie-card-content';

    const title = document.createElement('h2');
    title.className = 'movie-card-title';
    title.textContent = movie.title;

    const description = document.createElement('p');
    description.className = 'movie-card-description';
    description.textContent = movie.synopsis || 'No description available.';

    content.appendChild(title);
    content.appendChild(description);
    card.appendChild(image);
    card.appendChild(content);

    return card;
}
