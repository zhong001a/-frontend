import React from 'react';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;


  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>

        <span className='value'>{quantity}</span>

      </span>
      <span className='price'> {price.toLocaleString()}</span>
    </div>
  );
};

export default CheckoutItem;
