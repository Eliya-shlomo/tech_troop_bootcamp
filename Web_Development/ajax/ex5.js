const API_KEY = 'wS89bXz2K91pLmQvR4tN7xY0zA3bCdEf';

function searchGif() {
    const searchQuery = document.getElementById('search-input').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=1`;

    fetch(url)
        .then(response => response.json())
        .then(apiData => {
            if (apiData.data.length > 0) {
                const embedUrl = apiData.data[0].embed_url;
                document.getElementById('gif-embed').src = embedUrl;
            }
        });
}

document.getElementById('search-btn').addEventListener('click', searchGif);