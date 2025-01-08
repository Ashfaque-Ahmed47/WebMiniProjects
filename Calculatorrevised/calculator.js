const inputBox=document.getElementById("inputBtn"); 
const calBtns=document.querySelectorAll("button");



console.log(calBtns);

let str=" ";

calBtns.forEach((button)=>{

   button.addEventListener("click", (e)=>{
      
     if(e.target.innerHTML=='=')
     {
        str=eval(str);
        inputBox.value=str;
     }

     else if(e.target.innerHTML=='AC')
     {
        str=' ';
        inputBox.value=str;
     }
     else if(e.target.innerHTML=='DEL')
     {
        str=str.substring(0, str.length-1);
        inputBox.value=str;
     }
     else{
        str+=e.target.innerHTML;
        inputBox.value=str;

     }


   })
})


