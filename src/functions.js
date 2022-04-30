var buyingPower = 10000
var portfolioValue = buyingPower
var percentChange = 0
const SETMAX = 2.5
var purchasedProducts = []

const changeInStockPrice = (stockPrice) => {
  // Done Through Percentage Change
  percentChange = (Math.random() * SETMAX)
  var changeInPrice = (percentChange / 100) * stockPrice

  if (Math.floor(Math.random() * 10) >= 5) {
    stockPrice = stockPrice + changeInPrice
    portfolioValue += changeInPrice
  } else {
    if (stockPrice < 0) return;
    stockPrice = stockPrice - changeInPrice
    portfolioValue -= changeInPrice
  }

  return stockPrice;
}

const buyingStock = (stockPrice) => {
  if (buyingPower < 0) return
  buyingPower -= stockPrice
  portfolioValue -= stockPrice
}

const sellingStock = (stockPrice) => {
  if(stockPrice < 0) return
  buyingPower += stockPrice
  portfolioValue += stockPrice
}

const addStockInfo = (name, price) => {
  purchasedProducts.push({
    key:   name,
    value: price
});
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {
  changeInStockPrice, buyingStock, sellingStock, addStockInfo, buyingPower, portfolioValue, purchasedProducts, numberWithCommas
}