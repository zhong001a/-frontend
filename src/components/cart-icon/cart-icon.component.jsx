import React,{useContext} from 'react'
import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon } from '../../aesset/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className='cart-icon-container' >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
