import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import "../styles/components/Stock.css";
import functions from "../functions";

const Stock = ({ stock, priceHistory }) => {
  const [change, setChange] = useState(0);
  const [starIcon, setStarIcon] = useState(farFaStar);
  const [isWatchlisted, setWatchlisted] = useState(false);
  const [watchlistedStocks, setWatchlistedStocks] = useState([]);

  const navigation = useNavigate();
  const navigate = async () => {
    if (isWatchlisted) {
      setWatchlisted(false);
    } else {
      navigation("/info/" + stock.Ticker);
    }
  };

  const addToWatchlist = () => {
    setWatchlisted(true);

    if (starIcon === farFaStar) {
      setStarIcon(fasFaStar);
      // Add to watchlist
      console.log(stock.Name)
      watchlistedStocks.push(stock.Name);
      localStorage.setItem("watch", JSON.stringify(watchlistedStocks));
    } else {
      setStarIcon(farFaStar);
      // Remove from watchlist
    }
    return watchlistedStocks;
  };

  useEffect(() => {
    setWatchlistedStocks(JSON.parse(localStorage.getItem("watch")));
   
    if (!watchlistedStocks) {
      for (var i = 0; i < watchlistedStocks.length; i++) {
          console.log(watchlistedStocks[i])
        if (watchlistedStocks[i] === stock.Name) {
          setStarIcon(fasFaStar);
        }
      }
    }
    
    if (priceHistory.length > 1) {
      const last = priceHistory[priceHistory.length - 1][stock.Name].Price;
      const secondLast =
        priceHistory[priceHistory.length - 2][stock.Name].Price;
      let changePrice = parseFloat(
        functions.percentDifference(secondLast, last),
        10
      );
      if (secondLast > last) changePrice = -Math.abs(changePrice);
      setChange(changePrice);
    }
  }, [priceHistory]);

  return (
    <div className={"stock"} onClick={navigate}>
      <div className={"stockCol1"}>
        <div className={"bubble"}>
          <span className={"bubbleText"}>
            <FontAwesomeIcon icon={faApple} /> {stock.Name}
          </span>
        </div>
        <div className={"stockPrice"}>${stock.Price.toFixed(2)}</div>
      </div>

      <div className={"stockCol2"}>
        <div className={"stockTicker"}>
          <div>{stock.Ticker}</div>
          <div style={{ color: change >= 0 ? "#6AD29B" : "#F32013" }}>
            {change.toFixed(2)}%
          </div>
        </div>
        <div className={"stockChart"}></div>
      </div>

      <div className={"stockStar"} onClickCapture={addToWatchlist}>
        <span>
          <FontAwesomeIcon icon={starIcon} />
        </span>
      </div>
    </div>
  );
};

export default Stock;
