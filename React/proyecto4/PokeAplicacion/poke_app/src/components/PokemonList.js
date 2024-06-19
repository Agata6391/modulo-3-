import React,{useState,useEffect} from "react";
import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList=({pokemons, filterPokemon})=>{
    const [filteredPokemon, setFilteredPokemon] = useState(pokemons);
        useEffect(()=>{
            setFilteredPokemon(
            pokemons.filter((pokemon)=>pokemon.type === filterPokemon || filterPokemon === 'all' )
            );
        },[pokemons, filterPokemon]);

       return(
        <div className="pokemon-list">
           {filteredPokemon.map((pokemon)=>(
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
           ))}
        </div>

       );                       
};
export default PokemonList;