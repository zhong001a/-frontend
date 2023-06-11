import React,{ useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cart.context';
import './Checkout.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutItem from '../component/checkout-item.component';
import Payments from '../../components/payment/payment-component';
import axios from 'axios';
const Checkout = () => {

  const orderId = useParams().orderId;
  const { cartItems, cartTotal } = useContext(CartContext);
  const [ orderProduct, setorderProduct ] = useState([])
  const [ products, setProducts ] = useState([])

  const fecthProduct = (id) =>{
    // axios.get(`http://localhost:3010/${id}`)
    console.log("product")
    console.log(id)
  }

  const getIdProduct = () =>{
    orderProduct.map(({id}) => { 
      fecthProduct(id)
    })
  }

  useEffect(()=>{
    axios.get(`http://localhost:4040/${orderId}`)
    .then((response) => {
      setorderProduct(response.data.products)
    })
    .catch((err) => {
      console.log(err)
    })

    fecthProduct()

  },[])
  
  return (
    <div className='checkout-container'>
      {JSON.stringify(orderProduct)}
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

      </div>
      {/* {order.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))} */}
      <div className='total'>TOTAL: ${cartTotal.toLocaleString()}</div>
        <Payments/>
    </div>
  );
};

export default Checkout;
