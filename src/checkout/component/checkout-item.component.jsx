import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ items }) => {
  const { imageUrl, name, quantity, price } = items

  return (
    <div className='checkout-item-container'>
    

      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>

        <span className='value'>{quantity}</span>

      </span>
      <span className='price'> {price}</span> 
    </div>
  );
};

export default CheckoutItem;
