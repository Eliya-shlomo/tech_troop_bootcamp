class CompanyInfo {
    
    constructor(element, symbol) {
        this.element = element;
        this.symbol = symbol;
    }

    async addChart() {
        const response = await fetch(`https://financialmodelingprep.com/stable/historical-price-full?symbol=${this.symbol}&serietype=line&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const data = await response.json();
        const historical = data.historical || [];

        const labels = [];
        const prices = [];
        const limitData = historical.slice(0, 30).reverse();

        for (let i = 0; i < limitData.length; i++) {
            labels.push(limitData[i].date);
            prices.push(limitData[i].close);
        }

        const canvasEl = $(this.element).find(".history-chart")[0]; 
        if (!canvasEl) return; 

        const ctx = canvasEl.getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Stock Price (Close)',
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
    } 

    async load() {
        const response = await fetch(`https://financialmodelingprep.com/stable/company-profile?symbol=${this.symbol}&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const data = await response.json();

        const profile = data.companyProfile[0];
        const change = parseFloat(profile.changesPercentage);

        let color = "";
        let sign = "";

        if (change >= 0) {
            color = "#22c55e"; 
            sign = "+";
        } else {
            color = "#ef4444"; 
            sign = ""; 
        }

        $(this.element).html(`
            <div class="company-card">
                <img id="company-img" src="${profile.image}" alt="${profile.companyName}">
                <h2 id="company-name">${profile.companyName}</h2>
                <span id="company-symbol">(${profile.symbol})</span>
                <p id="company-desc">${profile.description}</p>
                <div class="stock-info">
                    <span id="stock-price">$${profile.price}</span>
                    <span id="stock-change" style="color: ${color}">${sign}${change}%</span>
                </div>
                <a id="company-website" href="${profile.website}" target="_blank">Website</a>
                
                <div class="chart-container" style="position: relative; height:300px; width:100%">
                    <canvas class="history-chart"></canvas>
                </div>
            </div>
        `);    

    }
}



