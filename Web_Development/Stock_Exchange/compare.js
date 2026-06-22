class Compare {

    constructor(element, symbols) {
        this.element = element;
        this.symbols = symbols; 
    }

    async load() {
        const symbols_fetch = this.symbols.join(',');
        
        const response = await fetch(`https://financialmodelingprep.com/stable/company-profile?symbol=${symbols_fetch}&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const data     = await response.json();

        const profiles = Array.isArray(data) ? data : [data];

        const compareListHtml = profiles.map(company => {
            const change = parseFloat(company.changesPercentage);

            let color = "";
            let sign = "";

            if (change >= 0) {
                color = "#22c55e"; 
                sign = "+";
            } else {
                color = "#ef4444"; 
                sign = ""; 
            }
        
            return `<div class="company-to-compare">
                <div class="company-card">
                    <img class="company-img" src="${company.image}" alt="${company.companyName}">
                    <h2 class="company-name">${company.companyName}</h2>
                    <span class="company-symbol">(${company.symbol})</span>
                    <p class="company-desc">${company.description}</p>
                    <div class="stock-info">
                        <span class="stock-price">$${company.price}</span>
                        <span class="stock-change" style="color: ${color}">${sign}${change}%</span>
                    </div>
                    <a class="company-website" href="${company.website}" target="_blank">Website</a>
                    
                    <div class="chart-container" style="position: relative; height:300px; width:100%">
                        <canvas class="history-chart" data-symbol="${company.symbol}"></canvas>
                    </div>
                </div>
            </div>`;
        }).join('');

        $(this.element).html(`
            <div class="compare-company">
                ${compareListHtml}
            </div>
        `);

        const responseHistory = await fetch(`https://financialmodelingprep.com/stable/historical-price-full?symbol=${symbols_fetch}&serietype=line&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const dataHistory = await responseHistory.json();

        const canvases = $(this.element).find(".history-chart");

        canvases.each((index, canvasEl) => {
            const currentSymbol = $(canvasEl).data("symbol");

            const companyStockInfo = dataHistory.historicalStockList.find(item => item.symbol === currentSymbol);
            
            const historical = companyStockInfo ? companyStockInfo.historical : [];

            const labels = [];
            const prices = [];
            const limitData = historical.slice(0, 30).reverse();

            for (let i = 0; i < limitData.length; i++) {
                labels.push(limitData[i].date);
                prices.push(limitData[i].close);
            }

            const ctx = canvasEl.getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: `${currentSymbol} Stock Price`,
                        data: prices,
                        borderColor: '#3182ce',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        });
    }
}

