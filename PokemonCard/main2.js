const pokemonBlock = document.querySelector('.carousel-inner')


 function getPokemon(id) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then ((Response) => Response.json())
    .then ((data) => {
        createPokemon(data)
    });
     
 
}

 function getPokemons(number){
    for (let i = 0; i < number; i++){
        getPokemon(i);
    }
 }
 getPokemon(25)
 //console.log(getPokemon(25));

function createPokemon (pokemon) {     
    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    
    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')
    
    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_shiny
    spriteContainer.appendChild(sprite)
    
    // const number = document.createElement('p')
    // number.textContent= `#${pokemon.id.toString().padStart(3,0)}`
    
    const name = document.createElement('p')
    name.classList.add('name');
    
    const weight = document.createElement('p')
    weight.classList.add('Weight');
    
    const height = document.createElement('p')
    height.classList.add('Heigth');

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
 
getPokemons(10)

    