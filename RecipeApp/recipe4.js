const searchBox = document.querySelector(".searchBox"); 
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-closeBtn");
const recipeDetails = document.querySelector(".recipe-details");




const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "Fetching searched recipes-------";

    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json(); 
        recipeContainer.innerHTML = " ";
        response.meals.forEach(meal => {
            const recipeDiv = document.createElement('div'); 
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p><span>${meal.strArea}</span> Dish</p>
                <p>Belongs to <span>${meal.strCategory}</span> cateogory</p>
            `;

            const button = document.createElement('button'); 
            button.textContent = "View Recipe";
            button.addEventListener('click', () => {
               openRecipePopup(meal);
            });
            
            recipeDiv.appendChild(button);
            recipeContainer.appendChild(recipeDiv);
        });
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
};

const fetchIngredients=(meal)=>{
    let ingredientsList=" "; 
    for(let i=1; i<20; i++)
    {
        const ingredient=meal[`strIngredient${i}`];
        if(ingredient)
        {
            const measure=meal[`strMeasure${i}`];
            ingredientsList+=`<li>${measure} ${ingredient} </li>`;
        }
        else
        {
            break; 
        }
    }

    return ingredientsList;

}
const openRecipePopup=(meal)=>{

    console.log("Button clicked, displaying recipe details pop-up");
    recipeDetailsContent.innerHTML = `
    <div class="recipeName"><h3>${meal.strMeal}</h3></div>
    <h2>Ingredients></h2> 
    <div class="ingredientList"><ul>${fetchIngredients(meal)}</ul></div>
    <div class="ingredientInstruction">  
     <h3> Instructions </h3> 
     <p  >${meal.strInstructions}</p>
    </div>
`;
recipeDetailsContent.parentElement.style.display = 'block';
}

recipeCloseBtn.addEventListener('click', ()=>{
    recipeDetails.parentElement.style.display='none';
})

searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const searchInput = searchBox.value.trim(); 
    fetchRecipes(searchInput);
    console.log("Search button clicked");
});

console.log("Script loaded successfully");
