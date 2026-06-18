class CompanyModel {
    constructor() {}

    async getProfile(symbol) {
        const response = await fetch(`https://financialmodelingprep.com/stable/company-profile?symbol=${symbol}&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const data = await response.json();
        return data;
    }

    async getHistory(symbol) {
        const response = await fetch(`https://financialmodelingprep.com/stable/historical-price-full?symbol=${symbol}&serietype=line&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const data = await response.json();
        return data.historical || [];
    }
}

class CompanyView {
    constructor() {
        this.model = new CompanyModel();
        this.init();
    }

    async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const symbol = urlParams.get('symbol');

        if (!symbol) {
            window.location.href = "index.html";
            return;
        }

        const profileData = await this.model.getProfile(symbol);
        const historyData = await this.model.getHistory(symbol);

        $("#loading").addClass("hidden");
        $("#company-card").removeClass("hidden");

        this.renderProfile(profileData);
        this.renderChart(historyData);
    }

    renderProfile(data) {
        const profile = data.companyProfile[0];

        $("#company-img").attr("src", profile.image);
        $("#company-name").text(profile.companyName);
        $("#company-symbol").text(profile.symbol);
        $("#company-desc").text(profile.description);
        $("#stock-price").text(`$${profile.price}`);
        $("#company-website").attr("href", profile.website);

        const change = parseFloat(profile.changesPercentage);
        const changeEl = $("#stock-change");
        
        if (change >= 0) {
            changeEl.text(`+${change}%`).css("color", "#22c55e");
        } else {
            changeEl.text(`${change}%`).css("color", "#ef4444");
        }
    }

    renderChart(historical) {
        const labels = [];
        const prices = [];

        const limitData = historical.slice(0, 30).reverse();

        for (let i = 0; i < limitData.length; i++) {
            labels.push(limitData[i].date);
            prices.push(limitData[i].close);
        }

        const ctx = document.getElementById('historyChart').getContext('2d');
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
}

const app = new CompanyView();