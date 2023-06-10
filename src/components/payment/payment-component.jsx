import React,{ useContext } from 'react'
import { CardElement} from '@stripe/react-stripe-js'
import Button from '../Button/Button';
import { CartContext } from '../../context/cart.context';
import './payment.scss'

const Payments = () => {
    const { cartTotal } = useContext(CartContext)
    const userId = sessionStorage.getItem("user")
    const clickCheckOut = async (event) =>{
        event.preventDefault();
        console.log("PAYING",cartTotal," by ",userId)

    }

    return (
        <div className='card-container'>
           
            <div className='credit-card'>
                
                <CardElement />
            </div>
            <Button onClick ={clickCheckOut} >Pay Now</Button>

        </div>

      );
}

export default Payments
