import { addFavorite, removeFavorite, getFavorites } from './favorites.js';

export function renderMovies(movies) {
    const content = document.getElementById('content');
    content.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <button class="favorite-btn">Favorite</button>
        </div>
    `).join('');
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', handleFavorite);
    });
}

export function renderFavorites(favorites) {
    const content = document.getElementById('content');
    if (favorites.length === 0) {
        content.innerHTML = '<p>No favorite movies yet.</p>';
    } else {
        content.innerHTML = favorites.map(movie => `
            <div class="movie-card" data-id="${movie.id}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <button class="remove-favorite-btn">Remove Favorite</button>
            </div>
        `).join('');
        document.querySelectorAll('.remove-favorite-btn').forEach(button => {
            button.addEventListener('click', handleRemoveFavorite);
        });
    }
}

function handleFavorite(event) {
    const movieId = event.target.closest('.movie-card').dataset.id;
    const movie = findMovieById(movieId);
    addFavorite(movie);
}

function handleRemoveFavorite(event) {
    const movieId = event.target.closest('.movie-card').dataset.id;
    removeFavorite(movieId);
    renderFavorites(getFavorites());
}

function findMovieById(id) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    return movies.find(movie => movie.id == id);
}
