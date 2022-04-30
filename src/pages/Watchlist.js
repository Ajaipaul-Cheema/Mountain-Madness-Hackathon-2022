import React, { useEffect, useState } from 'react';
import '../styles/pages/Watchlist.css';
import { useOutletContext } from 'react-router-dom'

import Stock from '../components/Stock'

const Watchlist = () => {

    const [stocks, setStocks] = useState([])
    const [stockState, priceHistoryState] = useOutletContext()

    useEffect(() => {
        setStocks([])
        let watchList = JSON.parse(localStorage.getItem("watch"))
        setStocks(watchList)
        console.log(watchList, localStorage.getItem("watch"))
    }, [stockState])

    return (
        <div className={'watchlistContainer'}>

            <div className={'mainWatchlistContent'}>

                {stocks.map(item => <Stock priceHistory={priceHistoryState} key={item.Ticker} stock={item} />)}

            </div>

        </div>
    )

}

export default Watchlist   