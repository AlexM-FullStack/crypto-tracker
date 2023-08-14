import { NavLink } from "react-router-dom"
import './Navbar.css'
import {BsCurrencyBitcoin} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="logo">
        <BsCurrencyBitcoin className="logo-icon"/>
        <h3>CryptoTrack</h3>
      </div>

      <ul className="navlinks">
        <li className="navlink">
          <NavLink exact='true' to='/' activeclassname='active'>
            Home
          </NavLink>
        </li>

        <li className="navlink">
          <NavLink exact='true' to='/about' activeclassname='active'>
            About
          </NavLink>
        </li>

        <li className="navlink">
          <NavLink exact='true' to='/watchlist' activeclassname='active'>
            Watchlist
          </NavLink>
        </li>
      </ul>





    </nav>
  )
}

export default Navbar