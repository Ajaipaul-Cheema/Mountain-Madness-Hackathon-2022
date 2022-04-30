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


const calculateBuyingPower = (portfolio) => {
    let value = portfolio.money;
    portfolio.inventory.forEach(item => {
        value += item.price;
    })
    return value;
}


export default {
    updateStocks, calculateBuyingPower, randomNumberBetween, percentDifference
}