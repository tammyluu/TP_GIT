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
const nameDetail = document.getElementById("details-name") as HTMLHeadingElement
const preTimebtn = document.querySelector("#preTimebtn") as HTMLDivElement
const servingsDetail = document.getElementById("details-servings") as HTMLHeadingElement
const prepTimeDetail = document.getElementById("details-prepTime") as HTMLPAElement
const cookTimeDetail = document.getElementById("details-cookTime") as HTMLInputElement
const ingredientsDetail = document.getElementById("details-ingredients") as HTMLHeadingElement
const instructionsDetail = document.getElementById("details-instructions") as HTMLHeadingElement


const bloc = document.querySelector("#myModal") as HTMLDivElement

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
           
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe
            bloc.style.display = "block"
            nameDetail.innerHTML = recipe.name
            refeshRecipesContainer()          
        })
        recipesContainer.appendChild(newButton)
        })
}
refeshRecipesContainer()
//Fonction pour afficher les recettes
let displayRecipesDetail = document.createElement('submit')
displayRecipesDetail.addEventListener('submit', (e: any) =>{
    e.preventDefault()
    
    const nameDetail = document.getElementById("details-name") as HTMLHeadingElement
    
    
   
    refeshRecipesContainer()
})

 
  

