import React,{  useContext } from "react";
import "./product-list.scss";

import ProductCard from "./product-card";
import { ProductsContext } from "../../context/products.context";
const ProductList = () => {

    const { products } = useContext(ProductsContext)

    return (
        
        <div className="product-container">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}

        </div>
    );
};

export default ProductList;
