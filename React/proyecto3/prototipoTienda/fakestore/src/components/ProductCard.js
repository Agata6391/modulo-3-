import React from "react";
import styled from "styled-components";



const Contenedor = styled.div` 
    background-color:#fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 12px;
    padding: 20px;
    margin:10px

    img {
    width:200px;
    height: 200px;
    object-fit: cover;
    border-radius:7px;
    }

    p {
    font-family: 'Roboto', sans-serif
    font-size:14px
    margin-botton:15px

    }
    button{
    background-color: #007bff

    }


`;
const ProductCard = ({ product }) => {
    return (
        <Contenedor>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button>Agregar el carrito</button>

        </Contenedor>
    );
};
export default ProductCard;