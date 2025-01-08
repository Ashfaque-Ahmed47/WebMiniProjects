const searchBox = document.querySelector(".searchBox"); 
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-closeBtn");
const recipeDetails = document.querySelector(".recipe-details");

const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "Fetching searched recipes...";

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json(); 
        displayRecipes(data.meals);
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
};

const displayRecipes = (meals) => {
    recipeContainer.innerHTML = "";

    meals.forEach(meal => {
        const recipeDiv = document.createElement('div'); 
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p> Belongs to <span>${meal.strCategory}</span> category</p>
        `;

        const button = document.createElement('button'); 
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        button.addEventListener('click', () => {
            displayRecipeDetails(meal);
        });

        recipeContainer.appendChild(recipeDiv);
    });
};

const displayRecipeDetails = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <p>Instructions: ${meal.strInstructions}</p>
        <p>Category: ${meal.strCategory}</p>
        <p>Area: ${meal.strArea}</p>
    `;
    recipeDetails.style.display = 'block';
};

searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const searchInput = searchBox.value.trim(); 
    fetchRecipes(searchInput);
});
