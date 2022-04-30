import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/Stock.css';


const Stock = ({stock}) => {

    const navigation = useNavigate()

    const navigate = () => {
        navigation('/info/' + stock.ticker)
    }

    return (
        <div className={'stock'} onClick={navigate}>

            <div className={'stockCol1'}>
                <div className={'bubble'}><span className={'bubbleText'}><FontAwesomeIcon icon={faApple} /> {stock.name}</span></div>
                <div className={'stockPrice'}>${stock.price}</div>
            </div>

            <div className={'stockCol2'}>
                <div className={'stockTicker'}>
                    <div>{stock.ticker}</div>
                    <div style={{color: '#6AD29B'}}>{stock.change}%</div>
                </div>
                <div className={'stockChart'}>

                </div>
            </div>

        </div>
    )

}


export default Stock   