import React from 'react';
import './StarCardCharacter.css';


const StarCardChar = ({ character }) => {
    return (

        <div className='character'>
            
            <h2>{character.name}</h2>
            <p> Altura: {character.height}</p>
            <p> Peso: {character.mass}</p>
            <p> Color de cabello: {character.hair_color}</p>
            <p> Color de piel: {character.skin_color}</p>
            <p> Color de ojos:{character.eye_color}</p>
            <p> Año de nacimiento: {character.birth_year}</p>
            <p> Género: {character.gender}</p>
        </div>
    );

};
export default StarCardChar;