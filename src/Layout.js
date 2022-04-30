import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faHome, faFolder, faEye } from '@fortawesome/free-solid-svg-icons'
import functions from './functions'
import './styles/index.css'

const Layout = () => {

    const navigation = useNavigate()
    const location = useLocation()

    return (
        <div className={'container'}>
            <div className={'leftNav'}>
                <div className={'leftNavContent'}>
                    <div className={'logo'}>
                        <FontAwesomeIcon icon={faArrowTrendUp} /> StockWear
                    </div>
                    <div className={'navigationContent'}>
                        <a className={'navigationItem active'} href={'/'}>
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Home</span>
                        </a>
                        <a className={'navigationItem'} href={'/watchlist'}>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                            <span>Watchlist</span>
                        </a>
                        <a className={'navigationItem'} href={'/portfolio'}>
                            <span><FontAwesomeIcon icon={faFolder} /></span>
                            <span>My Portfolio</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={'mainContent'}>
                <div className={'topNav'}>
                    <div className={'topNavContent'}>
                        Home
                    </div>
                    <div className={'topNavContentRight'}>
                        <div className={'portfolioValue'}>
                            <div className={'valueTitle'}>Portfolio Value</div>
                            <div>${functions.numberWithCommas(functions.portfolioValue)}</div>
                        </div>
                        <div className={'buyingPower'}>
                            <div className={'valueTitle'}>Buying Power</div>
                            <div>${functions.numberWithCommas(functions.buyingPower)}</div>
                        </div>
                    </div>
                </div>
                <div className={'content'}>
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default Layout