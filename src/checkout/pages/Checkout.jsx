import React,{ useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './Checkout.scss';

import CheckoutItem from '../component/checkout-item.component';
import Payments from '../../components/payment/payment-component';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
 
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal.toLocaleString()}</div>
        <Payments/>
    </div>
  );
};

export default Checkout;
