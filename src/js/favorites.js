export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

export function addFavorite(movie) {
    const favorites = getFavorites();
    if (!favorites.find(fav => fav.id === movie.id)) {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export function removeFavorite(movieId) {
    let favorites = getFavorites();
    favorites = favorites.filter(movie => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
