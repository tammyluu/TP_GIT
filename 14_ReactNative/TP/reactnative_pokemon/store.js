import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemon/pokemonSlice";

export default configureStore ({
    reducer :{
        pokemons: pokemonSlice
    }
})