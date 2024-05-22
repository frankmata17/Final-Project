import { fetchTop100Movies } from './api.js';
import { addFavorite } from './favorites.js';

document.addEventListener('DOMContentLoaded', async () => {
    const moviesContainer = document.getElementById('movies-container');
    const searchInput = document.getElementById('search-input');
    const genreSelect = document.getElementById('genre-select');
    const sortSelect = document.getElementById('sort-select');
    const removeFiltersButton = document.getElementById('remove-filters');

    let movies = await fetchTop100Movies();

    function displayMovies(movies) {
        moviesContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-card-content">
                    <h2 class="movie-card-title">${movie.title}</h2>
                    <p class="movie-card-description">${movie.description}</p>
                    <p class="movie-card-genre">Genre: ${movie.genre}</p>
                    <p class="movie-card-year">Year: ${movie.year}</p>
                    <p class="movie-card-rank">Rank: ${movie.rank}</p>
                    <button class="favorite-button" data-id="${movie.id}">Add to Favorites</button>
                </div>
            `;
            moviesContainer.appendChild(movieCard);
        });
        document.querySelectorAll('.favorite-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const movieId = e.target.dataset.id;
                const movie = movies.find(m => m.id == movieId);
                addFavorite(movie);
                showNotification(`${movie.title} has been added to your favorites!`);
            });
        });
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }

    function filterAndSortMovies() {
        let filteredMovies = movies;

        const searchQuery = searchInput.value.toLowerCase();
        if (searchQuery) {
            filteredMovies = filteredMovies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery)
            );
        }

        const selectedGenre = genreSelect.value;
        if (selectedGenre !== 'all') {
            filteredMovies = filteredMovies.filter(movie =>
                movie.genre.toLowerCase().includes(selectedGenre)
            );
        }

        const selectedSort = sortSelect.value;
        switch (selectedSort) {
            case 'a-z':
                filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'z-a':
                filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case '1-100':
                filteredMovies.sort((a, b) => a.rank - b.rank);
                break;
            case '100-1':
                filteredMovies.sort((a, b) => b.rank - a.rank);
                break;
        }

        displayMovies(filteredMovies);
    }

    searchInput.addEventListener('input', filterAndSortMovies);
    genreSelect.addEventListener('change', filterAndSortMovies);
    sortSelect.addEventListener('change', filterAndSortMovies);
    removeFiltersButton.addEventListener('click', () => {
        searchInput.value = '';
        genreSelect.value = 'all';
        sortSelect.value = '1-100';
        displayMovies(movies);
    });

    displayMovies(movies);
});
