import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=50';
      const response = await fetch(url);
      const data = await response.json();
  
      // Fetch details for each Pokémon
      
      const detailsPromises = data.results.map(async (pokemon) => {
        const dataResponse = await fetch(pokemon.url);
        console.log(pokemon.url,'-----detail')
        const detailsData = await dataResponse.json();
        console.log(detailsData);
        
        return detailsData;
      });

      const detailsResults = await Promise.all(detailsPromises);
      const complexData = data.results.map((pokemon, index) => ({
        mainData: pokemon,
        detailsData: detailsResults[index],
       
      }));
      console.log("combination" ,complexData);
  
      return complexData;
    }
  );

        
  const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
      pokemons: [],
      pokemonsDetails:{},
      selectedPokemon: null,
      pokedex: [],
      next: null,
      loading: false
    },
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload
        },
        setPokedex: (state, action) => {
            state.pokedex.push(action.payload)
        },
       
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.loading = true;
            state.next = action.payload;
            state.pokemons = action.payload;
            console.log("statepokemon", state.pokemons);


        })
       /*  builder.addCase(fetchDetailsPokemons.fulfilled, (state, action) => {
            const { id, types, sprites } = action.payload;
            state.pokemonsDetails[id] = { types, sprites };
        }); */
        
       
    },
  });
  

  export const { setSelectedPokemon,setPokedex} = pokemonsSlice.actions
  export default pokemonsSlice.reducer
  