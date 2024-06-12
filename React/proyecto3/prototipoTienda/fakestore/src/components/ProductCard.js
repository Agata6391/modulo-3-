import React from "react";
import styled from "styled-components"



const ProductContainer  = styled.div` 
background-color:#fff;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
border-radius: 12px;
padding: 20px;
margin:10px

img {
width:25%;
height: 200px;
object-fit: cover;
border-radius:7px;
}
`;
const ProductCard =({product}) =>{
    return(
        <ProductContainer> 
<div className="productName">

      <img src={product.image}alt={product.title}/>
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>   
      <button>Agregar el carrito</button>

</div>
</ProductContainer>
    );
}
export default ProductCard;