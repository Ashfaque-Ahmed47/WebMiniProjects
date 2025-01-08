var dt=new Date();
function renderDate()
{
dt.setDate(1);
var day= dt.getDay();

var endDate =new Date(
    dt.getFullYear(),
    dt.getMonth()+1, 0).getDate(); 

    
var preDate =new Date(
    dt.getFullYear(),
    dt.getMonth(), 0).getDate(); 


var today=new Date().getDate();


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
//console.log(dt.getMonth());
document.getElementById("str_date").innerHTML=new Date().toDateString(); 
document.getElementById("str_month").innerHTML=months[dt.getMonth()];

var days=" ";

for(let x=day; x>0; x--)
{
    days+="<div class='preday'>"+(preDate-x+1)+"</div>";
}

document.getElementsByClassName("days")[0].innerHTML=days;

for(let i=1; i<=endDate; i++)
{
    if(i==today)
    {
    days+="<div class='today'>"+i+"</div>";
    }
    else{
    days+="<div>"+i+"</div>";
    }
}

document.getElementsByClassName("days")[0].innerHTML=days;
}
renderDate();
const preClick=document.querySelector(".prev");
const nextClick=document.querySelector(".next");

preClick.addEventListener("click", ()=>{
    
  dt.setMonth(dt.getMonth()-1);
    //dt.setMonth(dt.getMonth-1);
    renderDate();
})

nextClick.addEventListener("click", ()=>{
    dt.setMonth(dt.getMonth()+1);
    renderDate();
    
})

// preClick.addEventListener("click", ()=>{

//     console.log("this is good");

// });
