import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CoinDetails.css'
import axios from 'axios';

const CoinDetails = () => {
 
  const location = useLocation()
  const coin = location.state

  const addToWatchList = () => {
    const coinToWatchList = {
        id: coin.id.toString(),
        name: coin.name,
        symbol: coin.symbol,
        price: coin.price
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(coinToWatchList)
    }

    fetch("http://localhost:3000/coins", requestOptions)
    .then(response => response.json())
    .then(data => {
        alert('Coin added to watchlist !', data)
    })
    .catch(error => alert('error adding coin to watchlist', error))
  }

  return (
    <div className='coin-details-container'>

        <h2>Coin Details</h2>

        <div className="coin-details-header">
            <h4>Name</h4>
            <h4>Price</h4>
            <h4>1Hour</h4>
            <h4>1Day</h4>
            <h4>1Week</h4>
        </div>

        <div className="coin-details">
            <h4>{coin.name}</h4>
            <h4>{coin.price ? `$${coin.price.toFixed(2)}` : 'N/A'}</h4>
            <h4 style={{ color: coin.priceChange1h >= 0 ? 'green' : 'red' }}>
                ${coin.priceChange1h}
            </h4>
            <h4 style={{ color: coin.priceChange1d >= 0 ? 'green' : 'red' }}>
                ${coin.priceChange1d}
            </h4>
            <h4 style={{ color: coin.priceChange1w >= 0 ? 'green' : 'red' }}>
                ${coin.priceChange1w}
            </h4>
        </div>

        <div className="more-info">
            <h4>Find out more about - <span className='coin-name'>{coin.name}</span> coin :</h4>
            <a href={coin.exp[0]} target='_blank'>{coin.exp[0]}</a>
        </div>

        <div className="buttons">
            <button className='btn-add' onClick={addToWatchList}>Add to Watchlist</button>
            <Link to='/' className='home'>Back Home</Link>
        </div>
    
    </div>
  );
};

export default CoinDetails;
