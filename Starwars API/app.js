// vamos a ver el url base de la API
const API_URL = 'https://swapi.dev/api/';
// Elementos del DOM a llamar
const content = document.getElementById('content');
const buttons = document.querySelectorAll('nav button');
const itemSelector = document.getElementById('item-selector');
const selectorContainer = document.getElementById('selector-container');

//hacer un funcion para obtener los datos de la api, cada seleccion
//  de cada parte donde apuntamos seria un endpoint 
async function fetchData(endpoint) {
    try {
        const respose = await fetch(API_URL + endpoint);
        if (!respose.ok) {
            throw new Error('Network Response was not ok')
        }
        const data = await respose.json();
        console.log(`Fetching data from ${endpoint}`, data);
        return data.results;

    } catch (error) {
        console.error(`Error Fetching Data:`, error);
        return [];
    };
}
// Card para personajes
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <h2>${character.name}</h2>
    <p> Altura: ${character.height}</p>
    <p> Peso: ${character.mass}</p>
    <p>Color de cabello: ${character.hair_color}</p>
    <p>Color de piel: ${character.skin_color}</p>
    <p>Color de ojos: ${character.eye_color}</p>
    <p>Año de nacimiento: ${character.birth_year}</p>
    <p>Género: ${character.gender}</p>
    `;
    return card;
}
// Card de planetas
function createPlanetCard(planet) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${planet.name}</h2>
        <p> Periodo de Rotacion: ${planet.rotation_period}</p>
        <p> Periodo Orbital: ${planet.orbital_period}</p>
        <p>diametro: ${planet.diameter}</p>
        <p>Clima: ${planet.climate}</p>
        <p>gravedad: ${planet.gravity}</p>
        <p>Agua ensuperficie: ${planet.terrain}</p>
        <p>Poblacion: ${planet.population}</p>
        `;
    return card;

}

//Card naves espaciales
function createStarShipCard(starship) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${starship.name}</h2>
        <p>Modelo: ${starship.model}</p>
        <p>Fabricante: ${starship.manufacturer}</p>
        <p>Costo: ${starship.cost_in_credits}</p>
        <p>Longitud: ${starship.length}</p>
        <p>Velocidad Máxima: ${starship.max_atmosphering_speed}</p>
        <p>Tripulación: ${starship.crew}</p>
        <p>Pasajeros: ${starship.passengers}</p>
        `;
    return card;
}

//Funcion para mostrar los datos
async function displayData(type) {
    content.innerHTML = '';
    itemSelector.style.display = 'block';
    itemSelector.innerHTML = '<option value = "" disabled selected>Selecione un item</option>';

    const endpoint = type === 'characters' ? 'people' : type;
    console.log(`Fetching Data for endpoint: ${endpoint}`);

    const data = await fetchData(endpoint);
    if (data.length === 0) {
        itemSelector.innerHTML = '<option value="" disabled >No se encontraron datos.</option>';
        return;
    }
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.url;
        option.textContent = item.name || item.tittle;
        itemSelector.appendChild(option);

    });
    itemSelector.onchange = async function () {
        const url = this.value;
        const response = await fetch(url);
        const item = await response.json();
        content.innerHTML = '';

        let card;

        if (type === 'people') {
            card = createCharacterCard(item)
        } else if (type === 'planets') {
            card = createPlanetCard(item)

        } else if (type === 'starships') {
            card = createStarShipCard(item)
        }
        if (card) {
            content.appendChild(card);
        } else {
            console.error('Error: card undefined');
        };

    }
}




// Agregar eventos de los botones
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const type = event.target.id === 'characters' ? 'people' : event.target.id;
        displayData(type);
    }
    )
});






