const main = async function () {
    const marquee = new Marquee(document.getElementById('marquee'));
    marquee.load();
    
    const formElement = document.getElementById('form');
    const form = new SearchForm(formElement);
    const results = new SearchResult(document.getElementById('results'));
    
    formElement.addEventListener('search-completed', (event) => {
        const { companies, query } = event.detail;
        results.renderResults(companies, query);
    });
};

main();