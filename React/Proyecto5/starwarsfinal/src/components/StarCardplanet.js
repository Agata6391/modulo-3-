import React from 'react';
import './StarCard.css';

const StarCardPlanet = ({ planet }) => {
    return (

        <div className='planet'>
        <h2>{planet.name}</h2>
        <p> Periodo de Rotacion: {planet.rotation_period}</p>
        <p> Periodo Orbital: {planet.orbital_period}</p>
        <p> Diametro: {planet.diameter}</p>
        <p> Clima: {planet.climate}</p>
        <p> Gravedad: {planet.gravity}</p>
        <p> En superficie: {planet.terrain}</p>
        <p> Poblacion: {planet.population}</p>
        </div>
    );

};
export default StarCardPlanet;