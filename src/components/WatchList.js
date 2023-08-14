import { useState, useEffect } from "react";
import axios from "axios";
import './WatchList.css'
import { AiFillDelete } from 'react-icons/ai'

const WatchList = () => {
    const [watchlist, setWatchList] = useState([])

    useEffect(() => {
        // fetch watchlist from server

        axios.get('http://localhost:3000/coins')
        .then(response => {
            setWatchList(response.data)
        })
        .catch(error => {
            console.log('error fetching watchlist', error)
        })
    }, [])

        const removeCoin = coinId => {
            axios.delete(`http://localhost:3000/coins/${coinId}`)
            .then(response => {
                setWatchList(prevWatchList => prevWatchList.filter(coin => coin.id !== coinId))
                alert(`${coinId.toUpperCase()} removed from Watchlist !`)
            })
            .catch(error => {
                console.log('error deleting coin', error)
            })
        }

    return (
        <div className="watchlist-container">
            <div className="watchlist-header">
                <h3>Name</h3>
                <h3>Symbol</h3>
                <h3>Price</h3>
            </div>

            {
                watchlist.map(coin => (
                    <div key={coin.id} className="watchlist-coin">
                        <p>{coin.name}</p>
                        <p>{coin.symbol}</p>
                        <p>{typeof coin.price === 'number' ? `$${coin.price.toFixed(2)}` : 'N/A'}</p>
                        <div className="del-icon-container">
                            <AiFillDelete className="del-icon" onClick={() => removeCoin(coin.id)}/>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default WatchList