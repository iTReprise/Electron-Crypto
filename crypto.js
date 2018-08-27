/* global $ */
const fetch = require('node-fetch');

$(() => {
  let url;
  const cryptos = {
    Ethereum: 'ETH',
    Ripple: 'XRP',
    'Stellar Lumens': 'XLM',
    Bitcoin: 'BTC',
  };

  Object.keys(cryptos).forEach((key) => {
    url = `https://min-api.cryptocompare.com/data/price?fsym=${cryptos[key]}&tsyms=EUR&extraParams=Crypto_Electron_Viewer`;
    let value;

    fetch(url)
      .then(data => data.json())
      .then((data) => {
        value = data.EUR;

        $(`#${cryptos[key].toLowerCase()}-price`).text(value.toLocaleString());
      });
  });
});
