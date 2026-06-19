class SearchResult {
    constructor(element) {
        this.container = element;
        this.initContainer();
    }

    initContainer() {
        $(this.container).html('<ul id="results-list" class="results-list"></ul>');
    }

    highlight(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    }

    renderResults(results, query) {
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
                </li>
            `);
        }
    }
}