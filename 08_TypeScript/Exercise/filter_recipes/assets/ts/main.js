console.log("hello");
import { recipes } from "./data/recipes.js";
const recipesTab = [];
let selectedRecipe = recipesTab[0];
for (const key in recipes) {
    if (recipes.hasOwnProperty.call(recipes, key)) {
        const element = recipes[key];
        recipesTab.push(element);
    }
}
const recipesContainer = document.querySelector("#recipesContainer");
const preTimebtn = document.querySelector("#preTimebtn");
const refeshRecipesContainer = () => {
    console.log("mettre les recipes de mon tableau dans mon dom");
    // console.log(selectedRecipe.name);
    // console.log(selectedRecipe.prepTime);
    // console.log(selectedRecipe.cookTime);
    recipesContainer.innerHTML = "";
    preTimebtn.innerHTML = "";
    recipesTab.forEach(recipe => {
        const newButton = document.createElement("button");
        newButton.innerHTML = `<b>${recipe.name}</b><hr> ${recipe.cookTime} <i class="bi bi-fire"></i> ${recipe.prepTime}`;
        newButton.className = recipe === selectedRecipe ? "btn btn-light w-100 my-2" : "btn btn-outline-light w-100 my-2";
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe;
            refeshRecipesContainer();
        });
        recipesContainer.appendChild(newButton);
    });
};
refeshRecipesContainer();
//Fonction pour afficher les recettes
function displayRecipes(recipes) {
    const recipesContainer = document.querySelector('.container');
}
