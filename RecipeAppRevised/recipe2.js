document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchBox = document.querySelector('.searchBox');
    const recipeContainer = document.querySelector('.recipe-container');
    const recipeDetails = document.querySelector('.recipe-details');
    const recipeDetailsContent = document.querySelector('.recipe-details-content');
    const recipeCloseBtn = document.querySelector('.recipe-closeBtn');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = searchBox.value.trim();
        if (query !== '') {
            await fetchRecipes(query);
        }
    });

    recipeCloseBtn.addEventListener('click', () => {
        recipeDetails.style.display = 'none';
    });

    const fetchRecipes = async (query) => {
        recipeContainer.innerHTML = "Fetching searched recipes...";
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        displayRecipes(data.meals);
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
                <p>Belongs to <span>${meal.strCategory}</span> category</p>
                <button class="viewRecipeBtn">View Recipe</button>
            `;
            recipeDiv.querySelector('.viewRecipeBtn').addEventListener('click', () => {
                displayRecipeDetails(meal);
            });
            recipeContainer.appendChild(recipeDiv);
        });
    };

    const displayRecipeDetails = (meal) => {
        recipeDetailsContent.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <p>${meal.strInstructions}</p>
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Area:</strong> ${meal.strArea}</p>
        `;
        recipeDetails.style.display = 'block';
    };
});
