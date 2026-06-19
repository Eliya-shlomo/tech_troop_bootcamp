class Marquee {
    constructor(element) {
        this.container = element;
    }

    async load() {
        const response = await fetch('https://financialmodelingprep.com/stable/quotes/nasdaq?apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji');
        const allStocks = await response.json();
        const limitedStocks = allStocks.slice(0, 30); 
        
        this.render(limitedStocks);
    }

    render(marqueeStocks) {
        $(this.container).addClass("marquee-container");
        $(this.container).html('<div id="marquee-content" class="marquee-content"></div>');

        marqueeStocks.forEach(stock => {
            const change = parseFloat(stock.changesPercentage);
            const color = change >= 0 ? "#22c55e" : "#ef4444";
            const sign = change >= 0 ? "+" : "";

            $("#marquee-content").append(`
                <span class="marquee-item">
                    <span class="marquee-symbol">${stock.symbol}</span>
                    <span class="marquee-price">$${stock.price.toFixed(2)}</span>
                    <span class="marquee-change" style="color: ${color}">${sign}${change.toFixed(2)}%</span>
                </span>
            `);
        });
    }
}