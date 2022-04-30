import React, { useEffect, useState } from 'react';
import '../styles/pages/Portfolio.css';
import { useOutletContext } from 'react-router-dom'

import Product from '../components/Product';

const Portfolio = () => {

    const [stocks, setStocks] = useState([])
    const [stockState, priceHistoryState, userPortfolio] = useOutletContext()

    useEffect(() => {
        setStocks([])
        Object.keys(stockState).forEach(key => setStocks(prevState => [...prevState, stockState[key]]))
    }, [stockState])

    return (
        <div className={'homeContainer'}>

            <div className={'mainHomeContent'}>

                {stocks.map(item => <Product priceHistory={priceHistoryState} key={item.Ticker} stock={item} userPortfolio={userPortfolio.inventory}/>)}
                

            </div>

        </div>
    )

}

export default Portfolio   