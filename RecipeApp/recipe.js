const searchBox=document.querySelector(".searchBox"); 
const searchBtn=document.querySelector(".searchBtn");
const recipeContiner=document.querySelector(".recipe-container");
const  recipeDetailsContent=document.querySelector(".recipe-details-content");
const recipeCloseBtn=document.querySelector(".recipe-closeBtn");
const recipeDetails=document.querySelector(".recipe-details");



const fetchRecipes=async (query)=>{

    recipeContiner.innerHTML=" Fetching searched recipes-------";

    data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`); 

    const response= await data.json(); 
    recipeContiner.innerHTML= " ";
    response.meals.forEach(meal => {

        const recipeDiv=document.createElement('div'); 
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML= `<img src= "${meal.strMealThumb}">
         <h3> ${meal.strMeal} </h3>
         <p>  <span>${meal.strArea}</span> Dish</p>
         <p> Belongs to <span>${meal.strCategory}</span> cateogory</p> `

         const button=document.createElement('button'); 
         button.textContent="View Recipe"

    
        recipeDiv.appendChild(button);
        //adding button event listener for open receipe pop-up 
        recipeContiner.appendChild(recipeDiv);

        button.addEventListener('click', ()=>{
          
            recipeDetails.style.display = 'block';
            
        })
       
        
    });
 
}

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault(); 
    const searchInput=searchBox.value.trim(); 

    fetchRecipes(searchInput);

    console.log("clicked");
})



