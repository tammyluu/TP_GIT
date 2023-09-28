import { IRecipe } from "./Recipe.js";
import { recipes } from "./data/recipes.js";
// Convertir l'objet de recettes en un tableau d'objets Recipe
const recipesDetail : Record<string, IRecipe> = recipes;
// Convertir les valeurs de l'objet recipesDetail en un tableau de recettes
const recipes: IRecipe