
import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import './App.css';


const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon, index) => {
          const pokemonDetails = await fetch(pokemon.url).then((res) => res.json());
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            image: pokemonDetails.sprites.front_default,
          };
        })
      );
      setPokemons(pokemonData);
    };
    fetchPokemons();
  }, []);
  return (
    <div className="app">
      <h1>Poke-dex</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>Todos</button>
        <button onClick={() => setFilter('fire')}>Fuego</button>
        <button onClick={() => setFilter('electric')}>Electrico</button>
        <button onClick={() => setFilter('water')}>Agua</button>
        <button onClick={() => setFilter('normal')}>Normal</button>
        <button onClick={() => setFilter('grass')}>Cama verde</button>
      </div>
      <PokemonList pokemons={pokemons} filterPokemon={filter} />
    </div>

  );
};
export default App;
