console.log("hello");
import { IRecipe } from "./Recipe.js";
import { recipes } from "./data/recipes.js";



const recipesTab: IRecipe[] = []
let selectedRecipe = recipesTab[0];
for (const key in recipes) {
    if (recipes.hasOwnProperty.call(recipes, key)){
          const element = recipes[key];
          recipesTab.push(element)
    }
}


const recipesContainer = document.querySelector("#recipesContainer") as HTMLDivElement
const preTimebtn = document.querySelector("#preTimebtn") as HTMLDivElement

const refeshRecipesContainer = () =>{
    console.log("mettre les recipes de mon tableau dans mon dom");
    console.log(selectedRecipe.name);
    console.log(selectedRecipe.prepTime);
    console.log(selectedRecipe.cookTime);
    recipesContainer.innerHTML = "";
    preTimebtn.innerHTML = "";
    recipesTab.forEach(recipe => {
        const newButton = document.createElement("button");
        newButton.innerHTML = `${recipe.name} ${ recipe.cookTime} <i class="bi bi-fire"></i> ${recipe.prepTime}`
        newButton.className = recipe === selectedRecipe ? "btn btn-light w-100 my-2" :  "btn btn-outline-light w-100 my-2"
       
        preTimebtn.textContent = recipe.prepTime
        preTimebtn.className = recipe === selectedRecipe ? "preTimebtn btn-dark w-30 my-2" :  "preTimebtn btn-outline-light w-30 my-2"
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe
            //refeshRecipesContainer()          
        })
        preTimebtn.addEventListener('click', () => {
            selectedRecipe = recipe
           
            
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