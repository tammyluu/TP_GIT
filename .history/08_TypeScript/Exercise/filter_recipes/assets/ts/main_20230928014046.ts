console.log("hello");
import { IRecipe } from "./Recipe.js";
import { re } from "./data/recipes.js";


// Convertir les valeurs de l'objet recipesDetail en un tableau de recettes
const recipes: IRecipe[] = Object.value(recipesDetail)