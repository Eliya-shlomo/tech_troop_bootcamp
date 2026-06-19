const main = async function () {
    const marquee = new Marquee(document.getElementById('marquee'));
    marquee.load();
    
    const formElement = document.getElementById('form');
    const form = new SearchForm(formElement);
    const resultsElement = document.getElementById('results');
    const results = new SearchResult(resultsElement);
    
    formElement.addEventListener('search-completed', (event) => {
        const { companies, query } = event.detail;
        results.renderResults(companies, query);
    });
    resultsElement.addEventListener('buttonEvent-completed', (event) => {
        const { company } = event.detail;
        console.log(company);
    });
};

main();