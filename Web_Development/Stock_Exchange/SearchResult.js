class SearchResult {
    constructor(element) {
        this.container = element;
        this.results = []
        this.initContainer();
    }

    initContainer() {
        $(this.container).html('<ul id="results-list" class="results-list"></ul>');

        this.container.addEventListener('click', (event) => {
            
            if (!event.target.classList.contains('company-button')) {
                return
            }

            const symbol = event.target.dataset.symbol

            const company = this.results.find(company => company.symbol === symbol)

            console.log(company)

            const buttonEvent = new CustomEvent('buttonEvent-completed', { 
                detail: {
                    company: company,
                }
            });
            
            this.container.dispatchEvent(buttonEvent);

        });
    }

    highlight(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    }

    renderResults(results, query) {

        this.results = results

        $("#results-list").empty();

        for (let i = 0; i < results.length; i++) {
            const company = results[i];
            const change = parseFloat(company.changesPercentage);
            const color = change >= 0 ? "#22c55e" : "#ef4444";
            const sign = change >= 0 ? "+" : "";
            
            const highlightedName = this.highlight(company.name, query);
            const highlightedSymbol = this.highlight(company.symbol, query);

            $("#results-list").append(`
                <li class="result-item">
                    <img class="company-image" src="${company.image}" alt="logo">
                    <a href="company.html?symbol=${company.symbol}" class="result-link">
                        <span class="company-name">${highlightedName}</span>
                        <span class="company-symbol">${highlightedSymbol}</span>
                        <span class="company-change" style="color: ${color}">${sign}${change}%</span>
                    </a>
                    <button class="company-button" data-symbol="${company.symbol}">Compare</button>
                </li>
            `);
        }
    }
}