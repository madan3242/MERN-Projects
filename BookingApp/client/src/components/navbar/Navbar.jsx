import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color:"inherit", textDecoration:"none"}}>
            <div className="logo">Booking</div>          
          </Link>
            {user ? user.username: (<div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar