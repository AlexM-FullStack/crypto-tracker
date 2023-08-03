import React from 'react'
import {FaCreativeCommonsNcEu} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            
                <div className="navbar-logo">
                    <Link to='/' className='navbar-link'>
                        <FaCreativeCommonsNcEu className='icon' />
                        <h1> Crypto<span>Tracker</span></h1>
                    </Link>
                </div>
            

            <div className="navbar-others">
                <Link to='/' className='nav-right'>Home</Link>
                <Link to='/about' className='nav-right'>About</Link>
                <Link to='/contact' className='nav-right'>Contact</Link>
            </div>  

        </div>
    )
}

export default Navbar
