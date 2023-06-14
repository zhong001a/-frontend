import React,{ useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cart.context';
import OrdersItem from './order-item/orders-item.component';
import './Order.scss';
import Button from '../components/Button/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios';
const Order = () => {

  const { cartItems, cartTotal } = useContext(CartContext);
  const [ products, setProducts ] = useState([])
  const usehistory = useHistory()

  useEffect(()=>{
    setProducts(
      cartItems.map((item) => ({
        id:item._id,
        quantity: item.quantity,
        price: item.price
      }))
    )
  },[cartItems])

  const createOrder = async (event) =>{
    event.preventDefault();
  
    axios.post("http://localhost:4040/",{ products, totalPrice:cartTotal })
    .then((response)=>{

      usehistory.push(`/order/checkout/${response.data._id}`)
    })
    .catch((err) =>{
      console.log(err)
    })

  }
    
  // const products = [
  //   { id: 'p5', quantity: 1 },
  //   { id: 'p2', quantity: 2 }
  // ];






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

      <Button onClick={createOrder} > Go To Checkout</Button>

    </div>
  );
};

export default Order;
