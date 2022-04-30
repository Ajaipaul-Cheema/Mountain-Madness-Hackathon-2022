const updateStocks = (stocks) => {

    let newStocks = {}

    Object.keys(stocks).forEach(key => {
        let stock = stocks[key]
        let change = 1 + (randomNumberBetween(-4, 4) / 100)
        let oldPrice = stock.Price
        stock.Price = oldPrice * change
        newStocks[stock.Name] = stock
    })

    return newStocks

}


const percentDifference = (one, two) => {
    return Math.abs(100 - two / one * 100).toFixed(10)
}


const randomNumberBetween = (min, max) => {
    return min + Math.random() * (max - min)
}


const calculateBuyingPower = (portfolio, stocks) => {
    let value = portfolio.money;
    portfolio.inventory.forEach(item => {
        value += (stocks[item.stockName].Price * parseInt(item.amount, 10))
    })
    return value;
}


export default {
    updateStocks, calculateBuyingPower, randomNumberBetween, percentDifference
}