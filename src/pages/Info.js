import React, { useEffect, useState } from 'react';
import '../styles/pages/Info.css';
import { useOutletContext, useParams } from 'react-router-dom'
import functions from '../functions'
import Modal from '../components/Modal'


const Info = () => {

    let { id } = useParams()
    const [stock, setStock] = useState({})
    const [stockState, priceHistoryState, userPortfolio, setUserPortfolio] = useOutletContext()
    const [change, setChange] = useState(0)
    const [diff, setDiff] = useState(0)
    const [amount, setAmount] = useState(1)
    const [modalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const purchase = () => {
        toggleModal()
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
            {modalVisible && <Modal visibilityFunction={toggleModal} />}
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