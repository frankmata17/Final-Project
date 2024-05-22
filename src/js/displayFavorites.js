// src/js/displayFavorites.js

import { getFavorites, removeFavorite } from '/src/js/favorites.js';

document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.getElementById('favorites-container');
    const favorites = getFavorites();

    if (favorites && favorites.length > 0) {
        favorites.forEach(movie => {
            const movieCard = createMovieCard(movie);
            favoritesContainer.appendChild(movieCard);
        });
    } else {
        favoritesContainer.innerHTML = '<p>No favorites added yet.</p>';
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

    const genre = document.createElement('p');
    genre.className = 'movie-card-genre';
    genre.textContent = `Genre: ${movie.genre}`;

    const rank = document.createElement('p');
    rank.className = 'movie-card-rank';
    rank.textContent = `Rank: ${movie.rank}`;

    const year = document.createElement('p');
    year.className = 'movie-card-year';
    year.textContent = `Year: ${movie.year}`;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-favorite-button';
    removeButton.textContent = 'Remove from Favorites';
    removeButton.addEventListener('click', () => {
        removeFavorite(movie.id);
        card.remove();
    });

    content.appendChild(title);
    content.appendChild(genre);
    content.appendChild(rank);
    content.appendChild(year);
    content.appendChild(removeButton);
    card.appendChild(image);
    card.appendChild(content);

    return card;
}
