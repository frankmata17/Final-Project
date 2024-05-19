const API_URL = 'https://imdb-top-100-movies.p.rapidapi.com/';
const API_KEY = '4316720cb0mshe25c650e7170ca3p195d6ajsnf2c7ab10afb5';

export async function fetchTop100Movies() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(API_URL, options);

        if (!response.ok) {
            console.error('Error fetching top 100 movies:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Response text:', errorText);
            return [];
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching top 100 movies:', error);
        return [];
    }
}
