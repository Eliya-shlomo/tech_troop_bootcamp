const main = async function () {
    const params = new URLSearchParams(location.search);
    const symbolsString = params.get('symbols');

    if (!symbolsString) {
        console.error("No symbols found in URL parameters.");
        return;
    }

    const symbolsArray = symbolsString.split(','); // יהפוך ל- ["AAPL", "MSFT", "GOOG"]

    const compare = new Compare(document.getElementById('compare-cards'), symbolsArray);
    
    await compare.load();
};

main();