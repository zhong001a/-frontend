import React,{ useContext } from 'react'
import { ProductsContext } from '../../context/products.context';
import CheckoutItem from './checkout-item.component'
const CheckoutList = ({id}) => {
    const productId = id;

    const { products } = useContext(ProductsContext)

    const product = products.filter((product) => product.id === productId);

    return (
        <div>
            {
                product
                // <CheckoutItem key={product.id} items={product}/>
            }
        </div>
    )
}

export default CheckoutList
