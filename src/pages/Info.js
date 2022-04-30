import React from 'react';
import '../styles/pages/Info.css';

import Grid from '../components/Grid'


const Info = () => {

    const y = [1, 2, 3, 4, 3, 2, 4, 5, 3, 2, 1]

    return (
        <div className={'informationContainer'}>
            <div className={'informationMain'}>
                <div className={'informationStats'}>
                    <span>Apple, APPL</span>
                    <span style={{ fontSize: '28px' }}>$45</span>
                    <span style={{color: '#6AD29B'}}>▲ +$2 (+1.24%)</span>
                </div>
                <div className={'informationGrid'}>
                    <img height={250} src={'https://i.imgur.com/UvWTzaA.png'} />
                </div>
            </div>
        </div>
    )

}

export default Info   