import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faHome, faFolder, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import functions from './functions'
import './styles/index.css'
import stockData from './stock.json'

const Layout = () => {

    const [money, setMoney] = useState(0)
    const [userPortfolio, setUserPortfolio] = useState({})
    const [stockState, setStockState] = useState({})
    const [priceHistoryState, setPriceHistoryState]= useState([])

    const navigation = useNavigate()
    const location = useLocation()

    useEffect(() => {
        //Object.keys(localStorage).forEach(key => {localStorage.removeItem(key)})
        const stocks = localStorage.getItem("stocks")
        let portfolio = localStorage.getItem("portfolio")
        let priceHistory = localStorage.getItem("priceHistory")
        if (!stocks) {
            const stockData = require('./stock.json')
            localStorage.setItem("stocks", JSON.stringify(stockData))
        }
        if (!priceHistory) {
            localStorage.setItem("priceHistory", JSON.stringify([JSON.parse(localStorage.getItem("stocks"))]))
        }
        if (!portfolio) {
            portfolio = {
                money: 10000,
                inventory: []
            }
            localStorage.setItem("portfolio", JSON.stringify(portfolio))
        }
        if (typeof portfolio === 'string')
            portfolio = JSON.parse(portfolio)
        setUserPortfolio(portfolio)
        setMoney(portfolio.money)
        setStockState(JSON.parse(localStorage.getItem("stocks")))
        let newPriceHistory = JSON.parse(localStorage.getItem("priceHistory"))
        setPriceHistoryState(newPriceHistory)
        //Object.keys(localStorage).forEach(key => {localStorage.removeItem(key)})
        setInterval(updatePrices, 10000)
    }, [])


    const updatePrices = () => {
        let stocks = JSON.parse(localStorage.getItem("stocks"))
        let priceHistory = JSON.parse(localStorage.getItem("priceHistory"))
        if (priceHistory.length > 4)
            priceHistory.shift()
        let updatedStocks = functions.updateStocks(stocks)
        localStorage.setItem("stocks", JSON.stringify(updatedStocks))
        localStorage.setItem("priceHistory", JSON.stringify([...priceHistory, updatedStocks]))
        setStockState(JSON.parse(localStorage.getItem("stocks")))
        setPriceHistoryState(JSON.parse(localStorage.getItem("priceHistory")))
    }

    if (Object.keys(userPortfolio).length === 0)
        return null

    return (
        <div className={'container'}>
            <div className={'leftNav'}>
                <div className={'leftNavContent'}>
                    <div className={'logo'} onClick={() => navigation('/')}>
                        <FontAwesomeIcon icon={faArrowTrendUp} /> StockWear
                    </div>
                    <div className={'navigationContent'}>
                        <div className={(location.pathname === '/' ? 'navigationItem active' : 'navigationItem')} onClick={() => navigation('/')}>
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Home</span>
                        </div>
                        <div className={(location.pathname === '/watchlist' ? 'navigationItem active' : 'navigationItem')} onClick={() => navigation('/watchlist')}>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                            <span>Watchlist</span>
                        </div>
                        <div className={(location.pathname === '/portfolio' ? 'navigationItem active' : 'navigationItem')} onClick={() => navigation('/portfolio')}>
                            <span><FontAwesomeIcon icon={faFolder} /></span>
                            <span>My Portfolio</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mainContent'}>
                <div className={'topNav'}>
                    <div className={'topNavContent'}>
                        {
                            location.pathname === '/watchlist' ? <div>Watchlist</div>
                                : location.pathname === '/portfolio' ? <div>My Portfolio</div>
                                    : location.pathname.startsWith('/info') ? <div><FontAwesomeIcon className={'backArrow'} onClick={() => navigation('/')} color={'#6AD29B'} icon={faArrowLeft} /> Stock Information</div>
                                        : <div>Home</div>
                        }
                    </div>
                    <div className={'topNavContentRight'}>
                        <div className={'portfolioValue'}>
                            <div className={'valueTitle'}>Portfolio Value</div>
                            <div>${functions.calculateBuyingPower(userPortfolio, stockState).toLocaleString()}</div>
                        </div>
                        <div className={'buyingPower'}>
                            <div className={'valueTitle'}>Buying Power</div>
                            <div>${userPortfolio.money.toLocaleString()}</div>
                        </div>
                    </div>
                </div>
                <div className={'content'}>
                    <Outlet context={[stockState, priceHistoryState, userPortfolio, setUserPortfolio]} />
                </div>
            </div>
        </div>
    )

}

export default Layout