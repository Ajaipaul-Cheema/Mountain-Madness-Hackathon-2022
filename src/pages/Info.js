import React, { useEffect, useState } from 'react';
import '../styles/pages/Info.css';
import { useOutletContext, useParams } from 'react-router-dom'
import functions from '../functions'


const Info = () => {

    let { id } = useParams()
    const [stock, setStock] = useState({})
    const [stockState, priceHistoryState] = useOutletContext()
    const [change, setChange] = useState(0)
    const [diff, setDiff] = useState(0)

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
            <div className={'informationMain'}>
                <div className={'informationStats'}>
                    <span>{stock.Name}, {stock.Ticker}</span>
                    <span style={{ fontSize: '28px' }}>${stock.Price.toFixed(2)}</span>
                    <span style={{color: (change >= 0 ? '#6AD29B' : '#F32013')}}>{change >= 0 ? '▲' : '▼'} ${diff.toFixed(2)} ({change.toFixed(2)}%)</span>
                </div>
                <div className={'informationGrid'}>
                    <img height={250} src={'https://i.imgur.com/UvWTzaA.png'} />
                </div>
            </div>
        </div>
    )

}

export default Info   