class Marquee {
    constructor(element) {
        this.container = element;
    }

    async load() {
        try {
            const response = await fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji');
            const allStocks = await response.json();

            const limitedStocks = Array.isArray(allStocks) ? allStocks.slice(0, 30) : [];

            this.render(limitedStocks);

            setInterval(() => this.updateData(), 60000);
        } catch (error) {
            console.error("Marquee load failed:", error);
        }
    }

    render(marqueeStocks) {
        $(this.container).addClass("marquee-container");
        $(this.container).html('<div id="marquee-content" class="marquee-content"></div>');

        marqueeStocks.forEach(stock => {
            const price = stock.price ? parseFloat(stock.price).toFixed(2) : "0.00";

            $("#marquee-content").append(`
                <span class="marquee-item" data-symbol="${stock.symbol}">
                    <span class="marquee-symbol">${stock.symbol}</span>
                    <span class="marquee-price">$${price}</span>
                </span>
            `);
        });
    }

    async updateData() {
        try {
            const response = await fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji');
            const allStocks = await response.json();

            const limitedStocks = Array.isArray(allStocks) ? allStocks.slice(0, 30) : [];

            limitedStocks.forEach(stock => {
                const $item = $(this.container).find(`[data-symbol="${stock.symbol}"]`);

                if ($item.length > 0) {
                    const price = stock.price ? parseFloat(stock.price).toFixed(2) : "0.00";
                    $item.find('.marquee-price').text(`$${price}`);
                }
            });
        } catch (error) {
            console.error("Marquee update failed:", error);
        }
    }
}