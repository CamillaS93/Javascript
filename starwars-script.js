const input = document.querySelector('input')
const resultat = document.querySelector('.results')
const search = document.querySelector('.söka-knapp')

search.addEventListener('click', getApi)

async function getApi () {
const baseUrl = 'https://swapi.dev/api/people/10/';
const response = await fetch (baseUrl);
const data = await response.json();

const name = data.name;
const height = data.height;
const birthYear = data.birth_year;
const eyeColor = data.eye_color
const gender = data.gender
const hairColor = data.hair_color
const mass = data.mass
const skinColor = data.skin_color

resultat.innerText = (`Name: ${name},\n Height: ${height},\n Mass: ${mass},\n Birth year: ${birthYear},\n Eye color: ${eyeColor},\n Gender: ${gender},\n Hair color: ${hairColor},\n Skin color: ${skinColor},`)
}