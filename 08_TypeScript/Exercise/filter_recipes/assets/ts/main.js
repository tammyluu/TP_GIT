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
const nameDetail = document.getElementById("details-name");
const servingsDetail = document.getElementById("details-servings");
const prepTimeDetail = document.getElementById("details-prepTime");
const cookTimeDetail = document.getElementById("details-cookTime");
const ingredientsDetail = document.getElementById("details-ingredients");
const instructionsDetail = document.getElementById("details-instructions");
const displayModal = document.getElementById("displayRecipesDetailModal");
const button = document.getElementById("btn");
let listOfIngredients = document.getElementById("ingredients");
const refeshRecipesContainer = () => {
    console.log("mettre les recipes de mon tableau dans mon dom");
    // console.log(selectedRecipe.name);
    // console.log(selectedRecipe.prepTime);
    // console.log(selectedRecipe.cookTime);
    recipesContainer.innerHTML = "";
    recipesTab.forEach(recipe => {
        const newButton = document.createElement("button");
        newButton.innerHTML = `<b>${recipe.name}</b><hr><img
        src="./assets/chef-hat.svg" /> ${recipe.cookTime} <i class="bi bi-fire"></i> ${recipe.prepTime}`;
        newButton.className = recipe === selectedRecipe ? "btn btn-light w-100 my-2" : "btn btn-outline-light w-100 my-2";
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe;
            console.log(selectedRecipe);
            displayModal.style.display = "block";
            nameDetail.innerHTML = recipe.name;
            instructionsDetail.innerHTML = `${recipe.instructions}`;
            refeshRecipesContainer();
        });
        recipesContainer.appendChild(newButton);
        newButton.addEventListener('click', () => {
            selectedRecipe = recipe;
            recipesTab.forEach(recipe => {
                const ingredientsList = recipe.ingredients;
                console.log(ingredientsList.forEach(recipe => {
                }));
            });
        });
    });
};
refeshRecipesContainer();
//list d'ingrédient
recipesTab.forEach(recipe => {
    const ingredientsList = recipe.ingredients;
    console.log(ingredientsList.forEach(recipe => {
        let option = document.createElement('option');
        option.innerHTML = `${recipe.name}`;
        listOfIngredients.appendChild(option);
    }));
});
//Fonction pour afficher les recettes
function displayRecipes(recipes) {
    const recipesContainer = document.querySelector('.container');
}
