class SearchForm {
    constructor(element) {
        this.container = element;
        this.renderForm();
        this.searchCallback = null;
    }

    renderForm() {
        $(this.container).html(`
            <div class="search-bar">
                <input type="text" id="search-input" class="search-input" placeholder="Search company...">
                <button id="search-button" class="search-button">Search</button>
            </div>
            <div id="loading" class="loading-spinner hidden"></div>
        `);
    }

    onSearch(callback) {
        this.searchCallback = callback;
        this.initEventListeners();
    }

    initEventListeners() {
        const btnSearch = document.getElementById("search-button");

        btnSearch.onclick = async () => {
            const query = $("#search-input").val().trim();
            if (query === "") { return; }

            $("#loading").removeClass("hidden");

            const companies = await this.fetchData(query);

            $("#loading").addClass("hidden");

            const searchEvent = new CustomEvent('search-completed', { 
                detail: {
                    companies: companies,
                    query: query
                }
            });
            
            this.container.dispatchEvent(searchEvent);
        };

    }

    async fetchData(value) {
        const searchResponse = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${value}&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const Data = await searchResponse.json();
        let nasdaqCompanies = [];

        for (let i = 0; i < Data.length; i++) {
            if (nasdaqCompanies.length === 10) {
                break;
            }
            if (Data[i].exchange === "NASDAQ") {
                nasdaqCompanies.push(Data[i]);
            }
        }

        const symbolsArray = nasdaqCompanies.map(company => company.symbol);
        const symbolsString = symbolsArray.join(',');
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbolsString}?apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const dataProfiles = await response.json();

        const profiles = dataProfiles.companyProfile || [];

        const finalResults = nasdaqCompanies.map(company => {
            const profile = profiles.find(p => p.symbol === company.symbol);
            
            return {
                name: company.name,
                symbol: company.symbol,
                image: profile ? profile.image : '', 
                changesPercentage: profile ? profile.changesPercentage : '0'
            };
        });

        return finalResults;
    }
}