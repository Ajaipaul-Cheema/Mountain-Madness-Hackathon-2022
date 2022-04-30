var buyingPower = 10000
var portfolioValue = buyingPower 
const SETMAX = 2.5

const changeInStockPrice = (stockPrice) => {

    // Done Through Percentage Change 
    var changeInPrice = ((Math.random() * (SETMAX)) / 100) * stockPrice

    if(Math.floor(Math.random() * 10) >= 5) {
        stockPrice = stockPrice + changeInPrice
        portfolioValue += changeInPrice
    } else {
        if(stockPrice < 0) return 
        stockPrice = stockPrice - changeInPrice
        portfolioValue -= changeInPrice
    }

    return stockPrice
}

const buyingStock = (stockPrice) => {
    if(buyingPower < 0) return 
    buyingPower -= stockPrice;
    portfolioValue -= stockPrice;
}

const sellingStock = (stockPrice) => {
    buyingPower += stockPrice
    portfolioValue += stockPrice
}