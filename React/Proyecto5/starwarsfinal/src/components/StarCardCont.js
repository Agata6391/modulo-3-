import React, { useState, useEffect } from "react";
import StarCardChar from "./StarCardCharacter";
import StarCardPlanet from "./StarCardplanet";
import StarCardShip from "./StarCardShip";

const StarCardCont = ({ characters, starships, planets }) => {
    const [filterType, setFilterType] = useState('character');
    const [filterOption, setFilterOption] = useState('all');
    const [filteredItems, setFilteredItems] = useState([]);
    useEffect(() => {
        switch (filterType) {
          case 'character':
            filterCharacters();
            break;
          case 'starship':
            filterStarships();
            break;
          case 'planet':
            filterPlanets();
        }

    },[characters, starships, planets, filterType, filterOption]);

}


