// vamosa ver el url base de la API
const API_URL='https://swapi.dev/api/ '
// Elementos del DOM a llamar
const content = document.getElementById('content');
const buttons = document.querySelectorAll('nav button');
const itemSelector = document.getElementById('item-selector');
const selectorContainer = document.getElementById('selector-container'); 

//hacer un funcion para obtener los datos de la api, cada seleccion
//  de cada parte donde apuntamos seria un endpoint 
async function fetchData(endpoint) {
try {
    const respose = await fetch(API_URL+endpoint);
    if (!respose.ok){
        throw new Error('Network Response was not ok')
    }
    const data = await respose.json();
    console.log (`Fetching data from ${endpoint}`, error);
    return data.results;
   
}catch(error){
    console.error(`Error Fetching Data:`, error);
    return[];
};
};
// Card para personajes
function createCharacterCard(character){
    const card = document.createElement ('div');
    card.className ='card';
    card.innerHTML =`
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
};
// Card de planetas

//Card naves espaciales

//Funcion para mostrar los datos
async function displayData(type) {
    content.innerHTML ='';
    itemSelector.style.display ='block';
    itemSelector.innerHTML = '<option value = "" disabled selected>Selecione un item</option>';
    const endpoint = type ==='character' ? 'people': type;
    console.log(`Fetching Data for endpoint: ${endpoint}`);
    const data = await fetchData(endpoint);
    if (data.length === 0) {
        itemSelector.innerHTML = '<option value="" disabled selected>No se encontraron datos</option>';
        return
    }
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.url;
        option.textContent =item.length || item.tittle;
        itemSelector.appendChild(option)
        
    });
        
    }







