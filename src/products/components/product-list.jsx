import React,{ useState, useEffect } from "react";
import "./product-list.scss";
import axios from "axios";
import ProductCard from "./product-card";
const ProductList = () => {
    const [ products, setProducts ] = useState([])
    
    const fectProducts = () =>{
        axios.get(`http://localhost:3010/`)
        .then(response => {
            setProducts(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    useEffect(()=>{
        fectProducts();
    },[]);

    return (
        
        <div className="product-container">
            { 
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default ProductList;
