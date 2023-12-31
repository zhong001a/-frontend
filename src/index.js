import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cart.context';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './components/util/stripe.utils';
import { ProductsProvider } from './context/products.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <Elements stripe={ stripePromise }>
          <App />
        </Elements>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
