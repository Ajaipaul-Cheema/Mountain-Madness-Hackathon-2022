import React, { useEffect, useState } from 'react';
import '../styles/pages/Info.css';
import { useOutletContext, useParams } from 'react-router-dom'
import functions from '../functions'
import Modal from '../components/Modal'
import Alert from '../components/Alert'


const Info = () => {

    let { id } = useParams()
    const [stock, setStock] = useState({})
    const [stockState, priceHistoryState, userPortfolio, setUserPortfolio] = useOutletContext()
    const [change, setChange] = useState(0)
    const [diff, setDiff] = useState(0)
    const [amount, setAmount] = useState(1)
    const [modalVisible, setModalVisible] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)
    const [inventory, setInventory] = useState(null)

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        if (modalVisible === false && inventory !== null) {
            window.location.reload()
        }
    }, [modalVisible])

    const purchase = () => {
        let portfolio = userPortfolio
        if (portfolio.money - (stock.Price * amount) >= 0) {
            portfolio.money = portfolio.money - (stock.Price * amount)
            let list = stock.Product
            let randomStock = list[Math.round(functions.randomNumberBetween(0, list.length - 1))]
            const stockPurchase = {
                inventory: randomStock,
                purchasePrice: stock.Price,
                amount: amount,
                stockName: stock.Name,
                stockTicker: stock.Ticker
            }
            setInventory(randomStock)
            portfolio.inventory = [...portfolio.inventory, stockPurchase]
            setUserPortfolio(portfolio)
            localStorage.setItem("portfolio", JSON.stringify(portfolio))
            toggleModal()
        }
    }

    useEffect(() => {
        Object.keys(stockState).forEach(key => {
            if (stockState[key].Ticker === id)
                setStock(stockState[key])
        })
        if (Object.keys(stock).length > 0) {
            if (priceHistoryState.length > 1) {
                const last = priceHistoryState[priceHistoryState.length - 1][stock.Name].Price
                const secondLast = priceHistoryState[priceHistoryState.length - 2][stock.Name].Price
                let changePrice = parseFloat(functions.percentDifference(secondLast, last), 10)
                if (secondLast > last)
                    changePrice = -Math.abs(changePrice)
                setChange(changePrice)
                setDiff(last - secondLast)
            }
        }
    }, [priceHistoryState])


    if (Object.keys(stock).length === 0)
        return null

    return (
        <div className={'informationContainer'}>
            {modalVisible &&
            <Modal
                visibilityFunction={toggleModal}
                content={
                    <div style={{display: 'flex', gap: '32px'}}>
                        <img height={250} src={inventory.imgUrl} />
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '64px'}}>
                            <p style={{textAlign: 'center'}}>Congratulations, you have purchased <strong>{amount}</strong> of <strong>{inventory.name}</strong>!</p>
                            <p>Enjoy your "<strong>stock</strong>"</p>
                        </div>
                    </div>
                }
                title={"Stock Purchased"}
            />
            }
            <div className={'informationMain'}>
                <div className={'informationStats'}>
                    <span>{stock.Name}, {stock.Ticker}</span>
                    <span style={{ fontSize: '28px' }}>${stock.Price.toFixed(2)}</span>
                    {change !== 0 && <span style={{color: (change >= 0 ? '#6AD29B' : '#F32013')}}>{change >= 0 ? '▲' : '▼'} ${diff.toFixed(2)} ({change.toFixed(2)}%)</span>}
                </div>
                <div className={'informationGrid'}>
                    <img height={250} src={'https://i.imgur.com/UvWTzaA.png'} />
                </div>
            </div>
            <div className={'purchaseContainer'}>
                <span>Purchase</span>
                <hr/>
                <div className={'purchaseInformation'}>
                    <div><span>Amount: </span> <span><input onChange={event => setAmount(event.target.value)} defaultValue={1} className={'purchaseQuantity'} type={'number'} min={1} /></span></div>
                    <div><span>Cost: </span> <span>${(amount * stock.Price).toFixed(2)}</span></div>
                    <div><span>Remaining Money:</span> <span>${(userPortfolio.money - (amount * stock.Price)).toFixed(2)}</span></div>
                </div>
                <div className={'purchaseButton'} onClick={purchase}>Purchase Stock</div>
            </div>
        </div>
    )

}

export default Info   