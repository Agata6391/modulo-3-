import React from 'react';
import './StarCardShip.css';


const StarCardShip = ({ starship }) => {
    return (

        <div className='ship'>
         <h2>{starship.name}</h2>
        <p> Modelo: {starship.model}</p>
        <p> Fabricante: {starship.manufacturer}</p>
        <p> Costo: {starship.cost_in_credits}</p>
        <p> Longitud: {starship.length}</p>
        <p> Velocidad Máxima: {starship.max_atmosphering_speed}</p>
        <p> Tripulación: {starship.crew}</p>
        <p> Pasajeros: {starship.passengers}</p>
        </div>
    );

};
export default StarCardShip;