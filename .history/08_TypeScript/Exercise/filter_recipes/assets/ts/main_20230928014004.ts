console.log("hello");
import { IRecipe } from "./Recipe.js";
import { recipes } from "./data/recipes.js";
// Convertir l'objet de recettes const recipesDetail : Record<string, IRecipe> =en un tableau d'objets Recipe
 recipes;
// Convertir les valeurs de l'objet recipesDetail en un tableau de recettes
const recipes: IRecipe[] = Object.value(recipesDetail)