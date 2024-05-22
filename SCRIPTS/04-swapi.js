const apiURL =  'https://swapi.dev/api/people/1/';

async function getCharacters (){
    try {
        const response = await fetch (apiURL);
        const data = await response.json();
        displayCharacter(data)
        
    } catch (error) {
        console.error('Error de fetching' , error);        
    }
}
function displayCharacter(character) {
const characterInfoDiv = document.getElementById('character-info');
characterInfoDiv.innerHTML=`
<h1>${character.name}</h1>
<p>A/o de nacimiento: ${character.birth_year}</p>
<p>Peso: ${character.mass} kg</p>

`;
    
}
getCharacters();