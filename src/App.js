import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Product from './products/pages/Product';
import Navigation from './components/Navigation/Navigation';
import Order from './order/Order';
import Checkout from './checkout/pages/Checkout';
function App() {

  return (
    <div className="App">
       <Router>
          <Navigation/>

            <Switch>

              <Route path='/' exact > 
                <Product/>
              </Route>

              <Route path='/order' exact > 
                <Order/>
              </Route>

              <Route path='/order/checkout' exact > 
                <Checkout/>
              </Route>

              <Redirect to='/' /> 
              
            </Switch>

        </Router>
    </div>
  );
}

export default App;
