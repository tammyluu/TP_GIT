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

const nameDetail = document.getElementById("details-name") as HTMLDivElement
const servingsDetail = document.getElementById("details-servings") as HTMLHeadingElement
const prepTimeDetail = document.getElementById("details-prepTime") as HTMLDivElement
const cookTimeDetail = document.getElementById("details-cookTime") as HTMLDivElement
const ingredientsDetail = document.getElementById("details-ingredients") as HTMLDivElement
const instructionsDetail = document.getElementById("details-instructions") as HTMLDivElement
const displayRecipesDetail = document.getElementById("displayRecipesDetailModal") as HTMLDivElement
const

const refeshRecipesContainer = () =>{
    console.log("mettre les recipes de mon tableau dans mon dom");
    // console.log(selectedRecipe.name);
    // console.log(selectedRecipe.prepTime);
    // console.log(selectedRecipe.cookTime);
    recipesContainer.innerHTML = "";
    recipesTab.forEach(recipe => {
        const newButton = document.createElement("button");
        newButton.innerHTML = `<b>${recipe.name}</b><hr> ${ recipe.cookTime} <i class="bi bi-fire"></i> ${recipe.prepTime}`
        newButton.className = recipe === selectedRecipe ? "btn btn-light w-100 my-2" :  "btn btn-outline-light w-100 my-2"
       
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe
            console.log(selectedRecipe);
            refeshRecipesContainer()          
        })
        recipesContainer.appendChild(newButton)
        
    })
}
refeshRecipesContainer()
//Fonction pour afficher les recettes
function displayRecipes(recipes: IRecipe[]) {
  const recipesContainer = document.querySelector('.container');
  


}