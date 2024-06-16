import React, { useState, useEffect } from "react";
import StarCardChar from './StarCardCharacter';
import StarCardPlanet from './StarCardplanet';
import StarCardShip from "./StarCardShip";



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
          'people/';
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
        <button onClick={() => handleResourceChange('characters')}>Personajes</button>
      </div>

      {error && <p>Error: {error.message}</p>}
      <div className='cards'>
        {resourceType === 'ships' && data.map((ship) => <StarCardShip key={ship.name} starship={ship} />)}
        {resourceType === 'planets' && data.map((planet) => <StarCardPlanet key={planet.name} planet={planet} />)}
        {resourceType === 'characters' && data.map((character) => <StarCardChar key={character.name} character={character} />)}
      </div>
    </div>
  );
};

export default StarCardContainer;
