import React, { useEffect, useState } from 'react';
import '../styles/pages/Home.css';
import { useOutletContext } from 'react-router-dom'

import Stock from '../components/Stock'

const Home = () => {

    const [stocks, setStocks] = useState([])
    const [stockState, priceHistoryState] = useOutletContext()

    useEffect(() => {
        setStocks([])
        Object.keys(stockState).forEach(key => setStocks(prevState => [...prevState, stockState[key]]))
    }, [stockState])

    return (
        <div className={'homeContainer'}>

            <div className={'mainHomeContent'}>

                {stocks.map(item => <Stock priceHistory={priceHistoryState} key={item.Ticker} stock={item} />)}

            </div>

        </div>
    )

}

export default Home   