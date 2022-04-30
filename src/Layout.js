import React from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faHome, faFolder, faEye } from '@fortawesome/free-solid-svg-icons'
import './styles/index.css'

const Layout = () => {

    return (
        <div className={'container'}>
            <div className={'leftNav'}>
                <div className={'leftNavContent'}>
                    <div className={'logo'}>
                        <FontAwesomeIcon icon={faArrowTrendUp} /> StockWear
                    </div>
                    <div className={'navigationContent'}>
                        <div className={'navigationItem active'}>
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Home</span>
                        </div>
                        <div className={'navigationItem'}>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                            <span>Watchlist</span>
                        </div>
                        <div className={'navigationItem'}>
                            <span><FontAwesomeIcon icon={faFolder} /></span>
                            <span>My Portfolio</span>
                        </div>
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
                            <div>$56,221.96</div>
                        </div>
                        <div className={'buyingPower'}>
                            <div className={'valueTitle'}>Buying Power</div>
                            <div>$4,167.53</div>
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