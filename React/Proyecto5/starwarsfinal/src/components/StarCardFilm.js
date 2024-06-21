import React from 'react';
import './StarCardFilm.css';

const StarCardFilm = ({ film }) => {
    return (

        <div className='film'>
            
            <h2>{film.title}</h2>
            <p> Productor: {film.producer}</p> 
            <p> Director: {film.director}</p>
            <p> Salida al cine: {film.release_date }</p>  
            <p> ID episodio: {film.episode_id }</p>  
            
        </div>
    );

};
export default StarCardFilm;