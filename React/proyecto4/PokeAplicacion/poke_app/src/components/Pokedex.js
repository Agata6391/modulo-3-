import React, { useState, useEffect } from "react";
import PokemonFilter from './PokemonFilter';
import PokemonList from "./PokemonList";
import './Pokedex.css';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filterType, setFilterType] = useState('all');
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then((response) => response.json())
            .then((data) => {
                const pokemonData = data.results.map((pokemon) => {
                    const pokemonInfo = {
                        id: pokemon.url.split('/')[6],
                        name: pokemon.name,
                        image: pokemon.sprites.font_default,
                        type: pokemon.types[0].type.name
                    };
                 });
                setPokemons(pokemonData)
            });
    },[]);
    const handleFilterChange =(type)=>{
        setFilterType(type);
    };


    return(
        <div className="pokedex">
            <h1>Poke-dex</h1>
            <PokemonFilter filterPokemon={handleFilterChange}/>
            <PokemonList pokemons={pokemons} filterPokemon={filterType}/>
        </div>
    );
};
export default Pokedex;