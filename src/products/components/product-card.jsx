import React,{ useContext } from 'react'
import './product-card.scss'
import Button from '../../components/Button/Button'
import { CartContext } from '../../context/cart.context'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ProductCard = ({ product }) => {

    const { addItemToCart } = useContext(CartContext)

    const {  id, name, imageUrl, price } = product

    const addProductToCart = () => {
        addItemToCart(product)
    }

    return (
        
        <div className='product-card-container'>
            
            <Link to={`/product/${id}`}>
                <img src={imageUrl} alt="" />
            </Link>
            
            <div className='footer'>
                <span className='name'>{name}</span>
            </div>
           
            <div className='price'>{price.toLocaleString()} ฿</div>

            <Button  onClick = {addProductToCart}  >ADD TO CART</Button>

        </div>
    )
}

export default ProductCard
