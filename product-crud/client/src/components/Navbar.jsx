import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (<>
    <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <Link className="navbar-brand" to="/">ProductApp</Link>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
            </li>
        </ul>
    </div>
  </>)
}

export default Navbar