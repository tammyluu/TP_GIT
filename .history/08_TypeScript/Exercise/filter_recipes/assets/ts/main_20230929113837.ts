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
const displayModal = document.getElementById("displayRecipesDetailModal") as HTMLDivElement
const button = document.getElementById("btn") as HTMLDivElement
const listOfIngredients = document.getElementById("ingredients") as HTMLSelectElement
const closeEditContactCross = document.getElementById("editContactClose") as HTMLElement
let filter = document.getElementById("filterButton") as HTMLButtonElement

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
            displayModal.style.display = "block";
            nameDetail.innerHTML= recipe.name;
            instructionsDetail.innerHTML = `${recipe.instructions}`
            selectedRecipe = recipe
            console.log(selectedRecipe);
            recipesTab.forEach(recipe => {
                const ingredientsList = recipe.ingredients;
                console.log(ingredientsList.forEach(recipe => {
                    ingredientsDetail.innerHTML += `<li> ${recipe.name},${recipe.amount}  </li>`
                }))
            })
            refeshRecipesContainer()          
        })
        recipesContainer.appendChild(newButton)
        newButton.addEventListener('click', () =>{
            selectedRecipe = recipe;
            recipesTab.forEach(recipe =>{
                const ingredientsList = recipe.ingredients;
                console.log(ingredientsList.forEach(recipe =>{
                    instructionsDetail.innerHTML += `<li>${recipe.name}, ${recipe.amount}</li>`
                }));
            })
        })
        
    })
}
refeshRecipesContainer()
//list d'ingrédient
recipesTab.forEach(recipe => {
    const ingredientsList = recipe.ingredients;
    console.log("3",ingredientsList.forEach(recipe =>{
        let option = document.createElement('option');
        option.innerHTML = `${recipe.name}`;
        listOfIngredients.appendChild(option);

    }));
})
closeEditContactCross.addEventListener('click', () => {
    displayModal.style.display = "none"
  })
const filterButton = document.getElementById("filterButton");
const prepTimeRange = document.getElementById('prepTimeRange') as HTMLInputElement;
const cookingTimeRange = document.getElementById('cookingTimeRange') as HTMLInputElement;
prepTimeRange.addEventListener('input',()=>{
    const prepTimeOutput = prepTimeRange.nextElementSibling as HTMLOutputElement;
    prepTimeOutput.textContent = prepTimeRange.value;

})
cookingTimeRange. addEventListener ('input', ()=>{
    const cookingTimeOutput = cookingTimeRange.nextElementSibling as HTMLOutputElement;
    cookingTimeOutput.textContent = cookingTimeRange.value;
})
const filterButton = document.getElementById('filterButton');
filterButton?.addEventListener('click', () =>{
    const
})
