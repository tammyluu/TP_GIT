const pokemonBlock = document.querySelector('.container')
const carouselInner = document.querySelector('.carousel-inner');
const pokemonCount = 10; // Number of Pokémon cards to display
let currentIndex = 0;

 function getPokemon(id) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then ((Response) => Response.json())
    .then ((data) => {
        //console.log('>>> check data', data));
        createPokemon(data)
 })
}
 //getPokemon(1)
 function getPokemons(number){
    for (let i = 0; i < number; i++){
        getPokemon(i);
    }
 }
 getPokemon(25)
 //console.log(getPokemon(25));
 function createPokemon (pokemon){
    const item = document.createElement('div');
    item.classList.add('carousel-item');

    if (currentIndex === 0) {
        item.classList.add('active'); // Mark the first item as active
    }

    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    
    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')
    
    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default
    spriteContainer.appendChild(sprite)
    
    // const number = document.createElement('p')
    // number.textContent= `#${pokemon.id.toString().padStart(3,0)}`
    
    const name = document.createElement('p')
    name.classList.add('name');
    
    const weight = document.createElement('p')
    name.classList.add('Weight');
    
    const height = document.createElement('p')
    name.classList.add('Heigth');

    name.textContent =`${pokemon.name}`
    height.textContent =`Height : ${pokemon.weight}`
    weight.textContent =`Weight : ${pokemon.height}`
    
    card.appendChild(spriteContainer)
    //card.appendChild(number)
    card.appendChild(name)
    card.appendChild(weight)
    card.appendChild(height)
    pokemonBlock.appendChild(card)
 }
 async function loadPokemons(startIndex) {
    carouselInner.innerHTML = ''; // Clear existing items

    for (let i = startIndex; i < startIndex + pokemonCount; i++) {
        const pokemon = await getPokemon(i + 1);
        const carouselItem = createPokemon(pokemon);
        carouselInner.appendChild(carouselItem);
    }
}

function showPrevious() {
    if (currentIndex > 0) {
        currentIndex -= pokemonCount;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        loadPokemons(currentIndex);
    }
}
function showNext() {
    if (currentIndex < 10) { // Assuming there are 890 Pokémon in the API
        currentIndex += pokemonCount;
        loadPokemons(currentIndex);
    }
}

document.getElementById('pokemonCarousel').addEventListener('slid.bs.carousel', (e) => {
    currentIndex = e.to;
});

// Load initial Pokémon cards
loadPokemons(currentIndex);
getPokemons(10)

    