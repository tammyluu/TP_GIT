
const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async () =>{
        const reponse = await fetch(BASE_URL + "?offset=10&limit=50")
        const data = await reponse.json()
        return data.results
    }
)
export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
        async (id) => {
            const response = await fetch(BASE_URL + `/${id}`)
            const data = await response.json()
            return data
        }
)
const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        pokedex: [],
        seletedPokemon : null,
        displayPokedex: false
    },
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload
        },
        setPokedex: (state, action) => {
            state.pokedex.push(action.payload)
        },

        changeDisplayPokedex: (state) => {
            state.displayPokedex = !state.displayPokedex
        },
        clearPokedex: (state) => {
            state.pokedex = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
            console.log(state.pokemons);
        })
       
        
    }

    
})

export const { setPokedex, setSelectedPokemon, changeDisplayPokedex, clearPokedex} = pokemonSlice.actions
export default pokemonSlice.reducer


