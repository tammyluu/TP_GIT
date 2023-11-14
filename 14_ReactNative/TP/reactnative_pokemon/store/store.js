import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "../screens/Pokemonslice";



export default configureStore({
    reducer : {
        pokemons: PokemonSlice
    }
})