document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');
    const pokemonCount = 10; // Number of Pokémon cards to display
    let currentIndex = 0;

    function getPokemon(id) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((response) => response.json());
    }

    function createPokemonCarouselItem(pokemon) {
        const item = document.createElement('div');
        item.classList.add('carousel-item');

        if (currentIndex === 0) {
            item.classList.add('active'); // Mark the first item as active
        }

        const card = document.createElement('div');
        card.classList.add('pokemon-block');

        const spriteContainer = document.createElement('div');
        spriteContainer.classList.add('img-container');

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprites.front_default;
        spriteContainer.appendChild(sprite);

        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = ` ${pokemon.name}`;

        const weight = document.createElement('p')
        name.classList.add('Weight');
        
        const height = document.createElement('p')
        name.classList.add('Heigth');

        height.textContent =`Height : ${pokemon.weight}`
        weight.textContent =`Weight : ${pokemon.height}`
        card.appendChild(spriteContainer);
        card.appendChild(name);
        item.appendChild(card);
        card.appendChild(weight)
        card.appendChild(height)

        return item;
    }

    async function loadPokemons(startIndex) {
        carouselInner.innerHTML = ''; // Clear existing items

        for (let i = startIndex; i < startIndex + pokemonCount; i++) {
            const pokemon = await getPokemon(i + 1);
            const carouselItem = createPokemonCarouselItem(pokemon);
            carouselInner.appendChild(carouselItem);
        }
    }

    function showPrevious() {
        if (currentIndex > 0) {
            currentIndex -= 1;
            loadPokemons(currentIndex);
        }
    }

    function showNext() {
        if (currentIndex < 10) { // Assuming there are 890 Pokémon in the API
            currentIndex += 1;
            loadPokemons(currentIndex);
        }
    }

    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Load initial Pokémon cards
    loadPokemons(currentIndex);
});
