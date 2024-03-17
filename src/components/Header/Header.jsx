import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Header = () => {
    const {user} = useContext(AuthContext)

    const handleLogOut = () =>{
        
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to='/register'>Register</Link>

                {
                    user && <span>{user.email} <button onClick={handleLogOut}>Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;