const main = async function () {
  const params = new URLSearchParams(location.search);
  const symbolsString = params.get('symbols');
  const symbolsArray = symbolsString.split(',');
  const compare = new Compare(document.getElementById('compareInfo'), symbolsArray);
  await compare.load();
};
main();