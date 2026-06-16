const API_KEY = 'wS89bXz2K91pLmQvR4tN7xY0zA3bCdEf';
const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=cats&limit=1`;

fetch(url)
    .then(response => response.json())
    .then(apiData => {
        const embedUrl = apiData.data[0].embed_url;
        document.getElementById('gif-embed').src = embedUrl;
    });