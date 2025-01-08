const searchBtn = document.querySelector(".searchBtn");
    const searchBox = document.querySelector(".searchBox");
    const recipeContainer = document.querySelector(".recipe-container");
    const recipeDetailsContent = document.querySelector(".recipe-details-content");
    const recipeCloseBtn = document.querySelector(".recipe-closeBtn");

    searchBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const searchInput = searchBox.value.trim();
        if (searchInput !== '') {
            await fetchRecipes(searchInput);
        }
    });

    const fetchRecipes = async (query) => {
        recipeContainer.innerHTML = "Fetching searched recipes...";
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();
        displayRecipes(response.meals);
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
            `;
            const button = document.createElement('button');
            button.textContent = "View Recipe";
            button.addEventListener('click', () => {
                displayRecipeDetails(meal);
            });
            recipeDiv.appendChild(button);
            recipeContainer.appendChild(recipeDiv);
        });
    };

    const displayRecipeDetails = (meal) => {
        recipeDetailsContent.innerHTML = `<h3>${meal.strMeal}</h3>`;
        recipeDetailsContent.parentElement.style.display = "block";
    };

    recipeCloseBtn.addEventListener('click', () => {
        recipeDetailsContent.parentElement.style.display = "none";
    });
