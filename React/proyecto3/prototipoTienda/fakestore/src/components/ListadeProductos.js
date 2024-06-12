import React,{useState,useEffect} from "react";
import ProductCard from "./ProductCard";
import axios from "axios"


const ProductList = ()=>{
    const[products , setProducts]= useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error=> console.error (error));
    },[]);

    return(
        <div className="productList">
            {products.map(product =>(
                <ProductCard key = {product.id} product={product}/>
            ))}

        </div>
    );
}
export default ProductList;