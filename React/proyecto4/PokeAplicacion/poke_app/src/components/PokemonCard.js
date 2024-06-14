import React from 'react';
import './PokemonCard.css';

const PokemonCard =({pokemon}) =>{
return (
    <div className='Pokemon-card'>
        <img src={pokemon.image} alt={pokemon.name}/>
        <div className='pokemon-info'>
            <h2>{pokemon.name}</h2>
            <p>Tipo:{pokemon.type}</p>
            <p>ID:{pokemon.id}</p>
        </div>

    </div>
);

};
export default PokemonCard;