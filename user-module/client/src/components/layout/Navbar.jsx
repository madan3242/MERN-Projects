import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutAction } from '../../redux/users/user.action';

const Navbar = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let userInfo = useSelector((state) => {
        return state.userData;
    });

    let { loading, isAuthenticated, user} = userInfo;

    let logoutHandler = () => {
        dispatch(logoutAction(navigate));
    }
  return (<Fragment>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <Link to="/" className="navbar-brand">Ecart</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                { !loading &&<>{
                    !isAuthenticated ? <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/register">Register</Link>
                        </li>
                    </> : <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/logout" onClick={logoutHandler}>Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/profile" >{user ? user.name : ''}</Link>
                        </li>
                    </>
                }</>}
                </ul>
            </div>
        </div>
    </nav>
  </Fragment>)
}

export default Navbar