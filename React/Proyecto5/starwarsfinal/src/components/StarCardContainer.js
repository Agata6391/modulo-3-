import React, { useState, useEffect } from "react";
import StarCardChar from './StarCardCharacter';
import StarCardPlanet from './StarCardplanet';
import StarCardShip from "./StarCardShip";
import StarCardFilm from "./StarCardFilm";



const StarCardContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [resourceType, setResourceType] = useState('ships');
  const API_URL = 'https://swapi.dev/api/';

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(API_URL + endpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(`Fetching data from ${endpoint}`, data);
      return data.results;
    } catch (error) {
      console.error(`Error fetching data:`, error);
      return [];
    }
  };

  useEffect(() => {
    const fetchResourceData = async () => {

      setError(null);
      const endpoint = resourceType === 'ships' ? 'starships/' :
        resourceType === 'planets' ? 'planets/' :
          resourceType === 'people' ? 'people/':
          'films/';
      const fetchedData = await fetchData(endpoint);
      setData(fetchedData);

    };
    fetchResourceData();
  }, [resourceType]);

  const handleResourceChange = (type) => {
    setResourceType(type);
  };

  return (
    <div className='container'>
      <div className='buttons'>
        <button onClick={() => handleResourceChange('ships')}>Naves</button>
        <button onClick={() => handleResourceChange('planets')}>Planetas</button>
        <button onClick={() => handleResourceChange('people')}>Personajes</button>
        <button onClick={() => handleResourceChange('film')}>Pelis</button>
      </div>

      {error && <p>Error: {error.message}</p>}
      <div className='cards'>
      {resourceType === 'ships' && data.map((ship) => <StarCardShip key={ship.url} starship={ship} />)}
        {resourceType === 'planets' && data.map((planet) => <StarCardPlanet key={planet.url} planet={planet} />)}
        {resourceType === 'people' && data.map((character) => <StarCardChar key={character.url} character={character} />)}
        {resourceType === 'film' && data.map((film) => <StarCardFilm key={film.url} film={film} />)}
      </div>
    </div>
  );
};

export default StarCardContainer;
