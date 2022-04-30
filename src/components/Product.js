import React, { useEffect, useState } from 'react';
import '../styles/components/Product.css';


const Product = ({product, stocks, priceHistory}) => {

    const [currentPrice, setCurrentPrice] = useState(stocks[product.stockName].Price)
    const [averagePrice, setAveragePrice] = useState(0)

    useEffect(() => {
        console.log(product)
    }, [priceHistory])

    return (
        <div className={'productContainer'}>
            <div className={'productContent'}>
                <img width={200} src={product.inventory.imgUrl} />
                <div>
                    <div style={{marginTop: '12px'}}>
                        <div>{product.amount} x ${currentPrice.toFixed(2)} (${(product.amount * currentPrice).toFixed(2)})</div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Product   