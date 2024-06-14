import React,{useState} from "react";
import './PokemonFilter.css';
const Pokemonfilter=({filterPokemon})=>{
    const [selectedType, setSelectedType] = useState('all');
    const handleFilterChange = (event)=>{
        setSelectedType(event.target.value);
        filterPokemon(event.target.value)
    };
    return(
        <div className="Pokemon-filter">
            <labe>Filtrar por tipo:</labe>
            <select value ={selectedType} onChange={handleFilterChange}>
                <option value='all'>Todos</option>
                {/*agregar los diferentes tipos de pokemos*/}
            </select>

        </div>
    );

};
export default Pokemonfilter;