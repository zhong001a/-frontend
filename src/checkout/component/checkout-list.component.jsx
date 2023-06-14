import React,{ useContext } from 'react'
import { ProductsContext } from '../../context/products.context';
import CheckoutItem from './checkout-item.component';

const CheckoutList = ({id}) => {
    const productId = id;
    // const { products } = useContext(ProductsContext)

    // const product = productsx.filter((product) => product.id === productId);

    return (
        <div>
            {
                JSON.stringify(productId)
            }
        </div>
    )
}

export default CheckoutList
