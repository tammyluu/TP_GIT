import {createSlice} from "@reduxjs/toolkit"

const recipeSlice = createSlice({
    name: "receipe",
    initialState: {
         formMode: "",
         recipes: [], 
         selectedRecipe: null, 
         ingredients: [], 
         isLoading: false, 
         error: null
        },
    reducers: {
        addRecipe: (state, action) => {
            const newRecipe = {
                id: Date.now(),
                title: action.payload.title,
                instructions: action.payload.instructions,
                cookTime: action.payload.cookTime,
                prepTime: action.payload.prepTime,
                ingredients:[ 
                    {id: action.payload.id,
                     name: action.payload.name
                     }]  
            }
            state.recipes.push(newRecipe);
        },
        deleteRecipe: (state, action) => {
            state.recipes = state.recipes.filter(recipe => recipe.id!== action.payload.id)
        },
        upDateRecipe: (state, action) => {
            const index = state.recipes = state.recipes.findIndex(recipe => recipe.id === action.payload.id)
            if (index != -1){
                state.recipes[index].title = action.payload
                
            }
        }
    }
})

export const {addRecipe,deleteRecipe, upDateRecipe} =recipeSlice .actions
export default recipeSlice .reducer