import React,{ useContext } from 'react';
import { CartContext } from '../context/cart.context';
import OrdersItem from './order-item/orders-item.component';
import './Order.scss';
import Button from '../components/Button/Button';
const Order = () => {

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
    
      {
        cartItems.map((cartItem) =>(
          <OrdersItem key={cartItem.id} cartItem={cartItem} />
        ))
      }

      <div className='total'>TOTAL: ${cartTotal.toLocaleString()}</div>

      <Button to="/order/checkout" > Go To Checkout</Button>

    </div>
  );
};

export default Order;
