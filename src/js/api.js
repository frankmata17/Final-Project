const API_URL = 'https://imdb-top-100-movies.p.rapidapi.com';
const API_KEY = '4316720cb0mshe25c650e7170ca3p195d6ajsnf2c7ab10afb5';

export async function fetchTop100Movies() {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching top 100 movies:', error);
        return [];
    }
}
