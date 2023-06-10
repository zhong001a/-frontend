import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import CartIcon from '../cart-icon/cart-icon.component';

const Navigation = () => {
  const getUser = sessionStorage.getItem("user")
  return (
    <div className="navigation">
      <div className="center-menu">

        <Link to="/products" className="center-item">Products</Link>

        <Link to="/order" className='cart-icon'><CartIcon/></Link>
        {
            !getUser && (
              <Link to="/user/signup" className="center-item">Signin</Link>
            )
        }
        {
            getUser && (
              <Link to={`/user/profile/${getUser}`} className="center-item">Profile</Link>
            )
        }
        
      </div>
    </div>
  );
};

export default Navigation;
