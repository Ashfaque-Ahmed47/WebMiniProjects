const apiKey="ee8c8b652daf3efd7f33f33fdb8acbd0"; 
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiUrl2="https://api.openweathermap.org/data/2.5/weather?q=karachi,pk&APPID=ee8c8b652daf3efd7f33f33fdb8acbd0";


const searchText=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");



async function checkWeather(city)
{
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`); 

    var data=await response.json();

    console.log(data);
    
    console.log(data.name);

    document.querySelector(".City").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp); 
    document.querySelector(".humidity").innerHTML=data.main.humidity; 
    document.querySelector(".wind").innerHTML=data.wind.speed;

    if(data.weather[0].main=="Clouds")
    {
      weatherIcon.src="Image/clouds.png";
    }
    else if(data.weather[0].mainn=="Clear")
    {
        weatherIcon.src="Image/clear.png";
    }
  
}




searchBtn.addEventListener("click", ()=>{
    checkWeather(searchText.value);
})