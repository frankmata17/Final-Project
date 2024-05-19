export function renderMovies(movies) {
    if (!Array.isArray(movies)) {
        console.error('Expected an array of movies, but got:', movies);
        const moviesContainer = document.getElementById('movies-container');
        moviesContainer.innerHTML = '<p>Unable to fetch movies at this time. Please try again later.</p>';
        return;
    }

    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesContainer.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const image = document.createElement('img');
    image.src = movie.image || 'https://via.placeholder.com/150';
    image.alt = movie.title;

    const content = document.createElement('div');
    content.className = 'movie-card-content';

    const title = document.createElement('h2');
    title.className = 'movie-card-title';
    title.textContent = movie.title;

    const description = document.createElement('p');
    description.className = 'movie-card-description';
    description.textContent = movie.synopsis || 'No description available.';

    const genre = document.createElement('p');
    genre.className = 'movie-card-genre';
    genre.textContent = `Genre: ${movie.genre || 'N/A'}`;

    const rank = document.createElement('p');
    rank.className = 'movie-card-rank';
    rank.textContent = `Rank: ${movie.rank || 'N/A'}`;

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(genre);
    content.appendChild(rank);
    card.appendChild(image);
    card.appendChild(content);

    return card;
}
