import React, { useEffect, useState } from 'react';
import '../styles/pages/Portfolio.css';
import { useOutletContext } from 'react-router-dom'

import Modal from '../components/Modal'


const Portfolio = () => {

    const [stockState, priceHistoryState, userPortfolio, setUserPortfolio] = useOutletContext()
    const [modalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const sell = (item) => {
        let amount = parseInt(item.amount, 10) * stockState[item.stockName].Price
        let portfolio = userPortfolio
        portfolio.money += amount
        let index = portfolio.inventory.indexOf(item)
        portfolio.inventory.splice(index, 1)
        setUserPortfolio(portfolio)
        localStorage.setItem("portfolio", JSON.stringify(portfolio))
        window.location.reload()
    }

    return (
        <div className={'homeContainer'}>
            {modalVisible && <Modal />}

            <div className={'mainHomeContent'}>

                <table>
                    <thead>
                        <tr>
                            <th scope="col">Amount</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Current Price</th>
                            <th scope="col">Purchase Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userPortfolio.inventory.map(item =>
                        <tr>
                            <td>{item.amount}</td>
                            <td>{item.inventory.name}</td>
                            <td>{item.stockTicker}</td>
                            <td style={{color: (stockState[item.stockName].Price > item.purchasePrice ? '#6AD29B' : '#F32013')}}>${stockState[item.stockName].Price.toFixed(2)}</td>
                            <td>${item.purchasePrice.toFixed(2)}</td>
                            <td style={{display: 'flex', justifyContent: 'center'}}><div onClick={() => sell(item)} className={'sellButton'}>Sell</div></td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </div>

        </div>
    )

}

export default Portfolio   