import React from 'react';
import '../styles/pages/Home.css';

import Stock from '../components/Stock'

const Home = () => {

    const dummyData = {name: 'Apple', ticker: 'AAPL', 'price': 45, 'change': '+0.57'}

    return (
        <div className={'homeContainer'}>

            <div className={'mainHomeContent'}>

                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />
                <Stock stock={dummyData} />

            </div>

        </div>
    )

}

export default Home   