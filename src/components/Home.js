import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css'


const Home = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=AUD';
    axios.get(url)
      .then(response => {
        setCoins(response.data.coins);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigateToCoinDetails = coin => {
    navigate(`/coin/${coin.id}`, { state: coin});
  };

  return (
    <div>

        <div className="coin-headers">
            <h3>Rank</h3>
            <h3>Name</h3>
            <h3>Symbol</h3>
            <h3>Icon</h3>
            <h3>Price</h3>
        </div>

      {/* search bar and filteredCoins rendering */}
      {filteredCoins.map(coin => (
        <div key={coin.id} className='coin' onClick={() => navigateToCoinDetails(coin)}>
            
            <div className="coin-info">
                <p className="coin-rank">{coin.rank}</p>
                <p>{coin.name}</p>
                <p>{coin.symbol}</p>
                <img src={coin.icon} alt="coin" className='coin-symbol' />
                <p>${coin.price ? coin.price.toFixed(2) : 'N/A'}</p>
            </div>

        </div>
    
      ))}
    </div>
  );
};

export default Home;
