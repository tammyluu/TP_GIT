console.log("hello");
import { IRecipe } from "./Recipe.js";
import { recipesDetail } from "./data/recipes.js";


// Convertir les valeurs de l'objet recipesDetail en un tableau de recettes
const recipes: IRecipe[] = Object.values(recipesDetail)
//Fonction pour afficher les recettes
function displayRecipes(recipes: IRecipe[]) {
  const recipesContainer = document.querySelector('.recipes');
  recipesContainer.innerHTML = '';

  recipes.forEach((recipe, index) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <h2>${recipe.name}</h2>
      <p>Temps de préparation : ${recipe.prepTime}</p>
      <p>Ingrédients : ${recipe.ingredients.map(ingredient => `${ingredient.amount} ${ingredient.name}`).join(', ')}</p>
    `;
    recipesContainer.appendChild(recipeCard);
  });
}
