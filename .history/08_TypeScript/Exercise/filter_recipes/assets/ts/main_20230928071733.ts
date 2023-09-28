console.log("hello");
import { IRecipe } from "./Recipe.js";
import { recipesDetail } from "./data/recipes.js";


// Convertir les valeurs de l'objet recipesDetail en un tableau de recettes
const recipes: IRecipe[] = Object.values(recipesDetail)
console.table(recipes);

const recipesContainer = document.getElementById("recipesContainer") as HTMLDivElement
let selectedRecipe = recipes[0];
const refeshRecipesContainer = () =>{
    console.log("mettre les contacts de mon tableau dans mon dom");
    console.log(selectedRecipe);
    recipesContainer.innerHTML = "";
    recipes.forEach(recipe => {
        const newButton = document.createElement("button");
        newButton.textContent = recipe.name
        const a = document.createElement
        newButton.textContent = recipe.prepTime
        newButton.className = recipe === selectedRecipe ? "btn btn-light w-100 my-2" :  "btn btn-outline-light w-100 my-2"
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe
            refeshRecipesContainer()
            
        })

        recipesContainer.appendChild(newButton)
    })
}
refeshRecipesContainer()
//Fonction pour afficher les recettes
function displayRecipes(recipes: IRecipe[]) {
  const recipesContainer = document.querySelector('.container');
  

//   recipes.forEach((recipe, index) => {
//     const recipeCard = document.createElement('div');
//     recipeCard.classList.add('recipe-card');
//     recipeCard.innerHTML = `
//       <h2>${recipe.name}</h2>
//       <p>Temps de préparation : ${recipe.prepTime}</p>
//       <p>Ingrédients : ${recipe.ingredients.map(ingredient => `${ingredient.amount} ${ingredient.name}`).join(', ')}</p>
//     `;
//     recipesContainer.appendChild(recipeCard);
//     console.log(recipesContainer);
//   });
}
