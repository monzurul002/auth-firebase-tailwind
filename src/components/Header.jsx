import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut}=useContext(AuthContext)


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Ostad</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/home">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>

            {
                user ? <><h3>{user.email} </h3> <button onClick={logOut}  className='btn'>Sign Out</button>  </> : <h2>Guest Mode</h2>
            }
            </div>
        </div>
    );
};

export default Header;