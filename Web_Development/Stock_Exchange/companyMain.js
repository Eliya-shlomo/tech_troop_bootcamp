const main = async function () {
    const params = new URLSearchParams(location.search);
    const symbol = params.get('symbol');
    const compInfo = new CompanyInfo(document.getElementById('compInfo'), symbol);
    await compInfo.load();
    await compInfo.addChart();
  }

  main()