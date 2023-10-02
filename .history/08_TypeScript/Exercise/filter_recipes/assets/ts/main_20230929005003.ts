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
console.table(recipesTab);

const recipesContainer = document.querySelector("#recipesContainer") as HTMLDivElement
const preTimebtn = document.querySelector("#preTimebtn") as HTMLDivElement


const refeshRecipesContainer = () =>{
    console.log("mettre les recipes de mon tableau dans mon dom");
    // console.log(selectedRecipe.name);
    // console.log(selectedRecipe.prepTime);
    // console.log(selectedRecipe.cookTime);
    recipesContainer.innerHTML = "";
    preTimebtn.innerHTML = "";
    recipesTab.forEach(recipe => {
        const newButton = document.createElement("button");
        newButton.innerHTML = `${recipe.name}<hr> ${ recipe.cookTime} <i class="bi bi-fire"></i> ${recipe.prepTime}`
        newButton.className = recipe === selectedRecipe ? "btn btn-light w-100 my-2" :  "btn btn-outline-light w-100 my-2"
       
        preTimebtn.textContent = recipe.prepTime
        preTimebtn.className = recipe === selectedRecipe ? "preTimebtn btn-dark w-30 my-2" :  "preTimebtn btn-outline-light w-30 my-2"
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe
            refeshRecipesContainer()          
        })
        preTimebtn.addEventListener('click', () => {
            selectedRecipe = recipe   
        })
         recipesContainer.appendChild(newButton)
        })
}
refeshRecipesContainer()
//Fonction pour afficher les recettes
displayRecipesDetail.addEventListener('submit')
  const recipesContainer = document.querySelector('.container');
  const nameDetail = document.getElementById("details-name") as HTMLInputElement
  const servingsDetail = document.getElementById("details-servings") as HTMLDivElement
  const prepTimeDetail = document.getElementById("details-prepTime") as HTMLDivElement
  const cookTimeDetail = document.getElementById("details-cookTime") as HTMLDivElement
  const ingredientsDetail = document.getElementById("details-ingredients") as HTMLSpanElement
  const instructionsDetail = document.getElementById("details-instructions") as HTMLSpanElement
  
}
