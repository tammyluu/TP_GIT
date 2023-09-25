import { fetchPokemonData } from "./utils/utils.js";

let pokemons = [];

fetchPokemonData()
  .then((data) => {
    console.log(data);
    pokemons = data
    displayFirst()
  })
  .catch((error) => {
    console.error(`Erreur lors de la récupération des données: ${error.message}`);
  });
//récuperer dans DOM ,
// non poiter sur valeur en 1er, pointer sur élement d'abord pour avoir référence (espace mémoire stokage)
const container = document.querySelector(".container");
const loading = document.getElementById("loading");
const img = document.getElementById("pokemon-img");
const name = document.getElementById("name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0; //pour quoi? pour le buton 



function displayFirst() { //appeler quand recuper tous les pokemons
  if (pokemons.length > 0) {
    container.style.display = ""
    loading.style.display = "none" //loading disparaite
    // const item = pokemons[currentItem];//chercher 1er elelment dans tab pokemon
    // img.src = item.img; // item = pokemon. 
    // name.textContent = item.name;//devenir propriete de pokemon dans DOM
    // weight.textContent = item.weight;
    // height.textContent = item.taille;
    showPokemon();
  }
}


function showPokemon() {
  const item = pokemons[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  weight.textContent = item.weight;
  height.textContent = item.taille;
}

nextBtn.addEventListener("click", function () {
  currentItem++; //incrémenter
  if (currentItem > pokemons.length - 1) {
    currentItem = 0;
  }
  showPokemon();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = pokemons.length - 1;
  }
  showPokemon(); // prendre current item  et va  chercher l'autre dans le tab
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * pokemons.length);
  showPokemon();
});


window.addEventListener("DOMContentLoaded", function () { // contient affichange de container
  container.style.display = "none"
});



