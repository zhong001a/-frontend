import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import React,{useContext} from 'react'
import Button from '../../components/Button/Button'
import './single-page-product.scss'

import { CartContext } from '../../context/cart.context'
const SinglePageProduct = () => {

    const productId  = useParams().id ;
    const { addItemToCart } = useContext(CartContext)
    const filtered = PRODUCTS.filter(obj => {
        return obj.id === parseInt(productId,10);
    });

    return (
        <div>
            {/* <h2>SINGLE PAGE PRODCUT</h2>
                {filtered.map(product => (
                    <div className='product-container'>
                        <img className='image' src={product.imageUrl} alt="" />
  
                        <h3>{product.name}</h3>
                        <h3>{product.color}</h3>
                        <h3>{product.description}</h3>

                    </div>
                ))}     
                      <Button  onClick = {addItemToCart} >ADD TO CART</Button> */}

        </div>
    )
}

export default SinglePageProduct
