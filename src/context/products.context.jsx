import { createContext, useState, useEffect } from 'react';

import axios from 'axios';
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:3010/")
    .then((response) =>{

      setProducts(response.data)
    })
  },[])

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
