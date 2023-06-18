import React,{ useEffect, useState } from 'react';
import './Checkout.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutList from '../component/checkout-list.component';
import Payments from '../../components/payment/payment-component';
import axios from 'axios';
const Checkout = () => {
 
  const orderId = useParams().orderId;

  const [ orderProduct, setorderProduct ] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/${orderId}`);
        setorderProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const productId = orderProduct.products.map((item) => item.id)

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
      </div>


      {
        productId.map((id)=>(
          <CheckoutList key={id} id={id} />

        ))
      }

      {/* <div className='total'>TOTAL: ฿ {orderProduct.totalPrice}</div> */}
        {/* <Payments/> */}
    </div>
  );
};

export default Checkout;
